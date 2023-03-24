import { initialState } from './posts.state';
import { createReducer } from '@ngrx/store';


const _postReducer = createReducer(initialState);

export function postsReducer(state,action){
    return _postReducer(state,action)
}