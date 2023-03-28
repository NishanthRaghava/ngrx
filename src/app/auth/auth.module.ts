import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthReducer } from './state/auth.reducer';
import { AUTH_STATE_NAME } from './state/auth.selector';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    { path: '', children : [
        {path:'', redirectTo:'login', pathMatch:'full'},
        {path:'login', component: LoginComponent},
        {path:'signup', component: SignupComponent},
    ] }

]


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
        // StoreModule.forFeature(AUTH_STATE_NAME  ,AuthReducer),
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent, SignupComponent]
})

export class AuthModule{}