import { increment, decrement, reset, customIncrement, changeText } from './counter.action';
import { createReducer, on } from "@ngrx/store"
import { initialState } from "./counter.state";


const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => ({
        ...state,
        counter: state.counter + 1,
    })),

    on(decrement, (state) =>({
        ...state,
        counter: state.counter-1,
    })) ,

    on(reset, (state) => ({
        ...state,
        counter:  0,
    })),
    on(customIncrement, (state, action) => ({
        ...state,
        counter: state.counter + action.count
    })),
    on(changeText, (state) => ({
        ...state,
        text: 'Enter any number' 
    })),
    


    );

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action)
}