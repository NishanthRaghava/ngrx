
import { Action, createReducer, on } from '@ngrx/store';
import { setLoadingSpinner, setErrorMessage } from './shared.action';
import { SharedState, initialState } from './shared.state';

 const _sharedReducer = createReducer(initialState, 
    on(setLoadingSpinner, (state,action)=>{
        return{
            ...state,
            showLoading: action.status,
        };
    }),
    on(setErrorMessage, (state,action)=>{
        return{
            ...state,
            errorMessage: action.message,
        }
    })
    );

export function SharedReducer(state: SharedState, action: Action){
    return _sharedReducer(state,action);
} 