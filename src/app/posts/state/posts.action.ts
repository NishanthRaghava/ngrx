import { Post } from './../../models/posts.model';
import { createAction, props } from '@ngrx/store';
export const ADD_POST_ACTION = '[post page] add post';
export const ADD_POST_SUCCESS = '[post page] add post success';
export const UPDATE_POST_ACTION = '[post page] update post';
export const UPDATE_POST_SUCCESS = '[post page] update post success'
export const DELETE_POST_ACTION = '[post page] delete post';
export const DELETE_POST_SUCCESS = '[post page] delete post success';
export const LOAD_POSTS = '[post page] load posts';
export const LOAD_POSTS_SUCCESS = '[post page] load posts success';
// export const CREATE_POST = '[post page]create post'
// export const CREATE_POST_SUCCESS = '[post page] create post success';


export const addPost = createAction(ADD_POST_ACTION, props<{post: Post}>());
export const addPostSuccess = createAction(ADD_POST_SUCCESS, props<{post: Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: Post}>());
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS,props<{post: Post}>());
export const deletePost = createAction(DELETE_POST_ACTION,props<{id:String}>());
export const deletePostSuccess = createAction(DELETE_POST_SUCCESS,props<{id:String}>())
export const loadPost = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(LOAD_POSTS_SUCCESS, props<{posts: Post[]}>());
// export const createPost = createAction(CREATE_POST, props<{post: Post}>());
// export const createPostSuccess =createAction(CREATE_POST_SUCCESS, props<{post: Post}>());

