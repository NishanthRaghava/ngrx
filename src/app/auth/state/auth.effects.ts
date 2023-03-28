import { AppState } from './../../store/app.state';
import { setLoadingSpinner, setErrorMessage } from './../../store/shared/shared.action';
import { Store } from '@ngrx/store';
import { loginstart, loginsuccess, signupstart, signupsuccess, autologin } from './auth.action';
import { catchError, exhaustMap, map, tap, mergeMap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthEffects{
    constructor(private action$: Actions , private authservice: AuthService, 
        private store: Store<AppState>,private router: Router){}
    
    login$ = createEffect(()=> {
        return this.action$.pipe(
            ofType(loginstart),
            exhaustMap((action)=>{
                return this.authservice.login(action.email, action.password).pipe(
                    map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        this.store.dispatch(setErrorMessage({message: ''}));
                        const user = this.authservice.formatUser(data); 
                        this.authservice.setUserInLocoalStorage(user);
                        return loginsuccess({user});
                    }),
                    catchError((errResp)=>{
                        // console.log(errResp.error.error.message);
                        const errorMessage = this.authservice.getErrorMessage(
                            errResp.error.error.message
                        );
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        return of(setErrorMessage({message: errorMessage}));   
                    })
                    )
            })
        )
    });
    loginRedirect$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(...[loginsuccess,signupsuccess]),
                tap((action)=>{
                    this.store.dispatch(setErrorMessage({message: ''}));
                    this.router.navigate(['/'])
                })
            );
        },
        { dispatch: false }
    )

    signUp$ =  createEffect(() => {
        return this.action$.pipe(
            ofType(signupstart),
            exhaustMap((action)=>{
                return this.authservice.signup(action.email, action.password).pipe(
                    map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        const user = this.authservice.formatUser(data);
                        this.authservice.setUserInLocoalStorage(user);
                        return signupsuccess({user});
                    }),
                    catchError((errResp)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        const errorMessage = this.authservice.getErrorMessage(
                            errResp.error.error.message
                        );
                        return of(setErrorMessage({message: errorMessage}));   
                    })
                )
            })
        )
    });
    
    autoLogin$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(autologin),
            mergeMap((action)=>{
                const user = this.authservice.getUserFromLocalStorage();
                return of(loginsuccess({user}));
            }),
        )
    },
    )
}