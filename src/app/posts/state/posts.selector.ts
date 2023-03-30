import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from "./posts.state";

export const POSTS_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POSTS_STATE_NAME);

export const getPosts = createSelector(getPostsState, (state)=> {
    
    console.log(state.posts);
    return state.posts;
});

export const getpostById = createSelector(getPostsState, (state, props)=>{
    // console.log(props);
    return state.posts.find((post)=> post.id === props.id);
});