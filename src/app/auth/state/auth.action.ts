import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOGIN_START = '[auth page login start]';
export const LOGIN_SUCCESS = '[auht page login success]';
export const LOGIN_FAIL = '[auth page login fail]';

export const loginstart = createAction(LOGIN_START, props<{email: string, password: string}>());

export const loginsuccess = createAction(LOGIN_SUCCESS, props<{user: User}>());