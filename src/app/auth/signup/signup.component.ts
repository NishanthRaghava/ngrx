import { setLoadingSpinner } from './../../store/shared/shared.action';
import { signupstart } from './../state/auth.action';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })  
  }

  onsignupSubmit(){
    if(!this.signupForm.valid){
    return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signupstart({email,password}));
  }
}
