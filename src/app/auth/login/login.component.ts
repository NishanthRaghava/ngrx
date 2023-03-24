import { setLoadingSpinner } from './../../store/shared/shared.action';
import { loginstart } from './../state/auth.action';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
  })
  }

  onLoginSubmit(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}))
    this.store.dispatch(loginstart({ email , password})); 
  }

}
