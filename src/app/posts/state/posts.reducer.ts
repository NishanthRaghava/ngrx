import { addPost } from './posts.action';
import { on } from '@ngrx/store';
import { initialState } from './posts.state';
import { createReducer } from '@ngrx/store';


const _postReducer = createReducer(initialState, on(addPost, (state,action)=>{
    let post = {...action.post};
    post.id = (state.posts.length+1).toString();   
    return{
        ...state,
        posts: [...state.posts, post]
    }
}));

export function postsReducer(state,action){
    return _postReducer(state,action)
}