import { User } from './../../models/user.model';
import { on } from '@ngrx/store';
import { initialState } from './auth.state';
import { createReducer } from '@ngrx/store';
import { loginsuccess, signupsuccess, autologout } from './auth.action';


const _AuthReducer = createReducer(initialState,
    on(loginsuccess, (state,action)=>{
        console.log(action);
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupsuccess, (state,action)=>{
        return {
            ...state,
            user: action.user
        }
    }),
    on(autologout, (state,action)=>{
        return{
            ...state,
            user: null
        }
    })
    );

export function AuthReducer(state, action) {
    return _AuthReducer(state, action)
}