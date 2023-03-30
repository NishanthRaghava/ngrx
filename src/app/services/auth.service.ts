import { autologout } from './../auth/state/auth.action';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Observable, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { AuthResponseData } from '../models/AuthResponseData.model';




@Injectable({
    providedIn: 'root',
})

export class AuthService {
    timeoutInterval : any;
    constructor(private http: HttpClient, private store: Store){}
        login(email: String, password: String): Observable<AuthResponseData> {
            return this.http.post<AuthResponseData>(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
                { email, password, returnSecureToken: true }
             );
        }
        signup(email: String, password: String): Observable<AuthResponseData> {
            return this.http.post<AuthResponseData>(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
                { email, password, returnSecureToken: true }
             );
        }
        formatUser(data: AuthResponseData){
            const expirationDate = new Date(new Date().getTime() + + data.expiresIn * 1000)
            const user = new User(data.email, data.idToken, data.localId, expirationDate);
            return user;
        }
        getErrorMessage(message: string){
            switch(message){
                case 'EMAIL_NOT_FOUND':
                    return 'Email Not Found';
                case 'INVALID_PASSWORD':
                    return 'Invalid Password';
                case 'EMAIL_EXISTS':
                    return 'Email is already exist';
                default:
                    return 'Unknown Error Occured';
            }
        }
        setUserInLocoalStorage(user: User){
            localStorage.setItem('userData',JSON.stringify(user));
            this.runTimeoutInterval(user);
            
        }

        runTimeoutInterval(user: User){
            const todaysDate = new Date().getTime();
            const expirationDate = user.expireDate.getTime();
            const timeInterval = expirationDate - todaysDate;

            this.timeoutInterval=setTimeout(()=>{
                this.store.dispatch(autologout());
            },timeInterval)
        }

        getUserFromLocalStorage(){
            const userDataStirng = localStorage.getItem('userData');
            if(userDataStirng){
                const userData = JSON.parse(userDataStirng);
                const expirationDate = new Date(userData.expirationDate) 
                const user = new User(userData.email,userData.token,userData.localId,expirationDate)
                this.runTimeoutInterval(user)
                return user;
            }
            return null;
        }

        logout(){
            localStorage.removeItem('userData');
            if(this.timeoutInterval){
                clearTimeout(this.timeoutInterval);
                this.timeoutInterval= null;
            }
        }
}