import { setLoadingSpinner } from './../../store/shared/shared.action';
import { Store } from '@ngrx/store';
import { loginstart, loginsuccess } from './auth.action';
import { exhaustMap, map } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';


@Injectable()
export class AuthEffects{
    constructor(private action$: Actions , private authservice: AuthService, private store: Store){}
    
    login$ = createEffect(()=> {
        return this.action$.pipe(
            ofType(loginstart),
            exhaustMap((action)=>{
                return this.authservice.login(action.email, action.password).pipe(
                    map((data)=>{
                        this.store.dispatch(setLoadingSpinner({status: false}))
                        const user = this.authservice.formatUser(data); 
                        return loginsuccess({user});
                    }))
            })
        )
    })
}