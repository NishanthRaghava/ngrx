import { addPost, deletePost, updatePost, loadPostSuccess, addPostSuccess, updatePostSuccess, deletePostSuccess } from './posts.action';
import { on } from '@ngrx/store';
import { initialState } from './posts.state';
import { createReducer } from '@ngrx/store';


const _postReducer = createReducer(initialState,
    // on(addPost, (state,action)=>{
    // let post = {...action.post};
    // post.id = (state.posts.length+1).toString();   
    // return{
    //     ...state,
    //     posts: [...state.posts, post]
    // }
    // }), to add posts 
    on(addPostSuccess, (state, action)=>{
        let post = {...action.post};
        return{
            ...state,
            posts: [...state.posts, post]
        } // this is to add the posts to the server
    }),
    // on(updatePost, (state,action)=>{
    //     const updatedPost = state.posts.map((post)=>{
    //         return action.post.id === post.id ? action.post: post;
    //     });
    //     return{
    //         ...state,
    //         posts: updatedPost,
    //     }  
    // }),
    on(updatePostSuccess, (state,action)=>{
        const updatedPost = state.posts.map((post)=>{
            return action.post.id === post.id ? action.post: post;
        });
        return{
            ...state,
            posts: updatedPost,
        }  
    }),
    // on(deletePost, (state, {id})=>{
    //     const deletedPost = state.posts.filter((post)=>{
    //         return post.id !== id;
    //     });
    //     return {
    //         ...state,
    //         posts: deletedPost
    //     }
    // }),
    on(deletePostSuccess, (state, {id})=>{
        const deletedPost = state.posts.filter((post)=>{
            return post.id !== id;
        });
        return {
            ...state,
            posts: deletedPost
        }
    }),
    // on(createPostSuccess,(state,action)=>{
    //     let post={...action.post}
    //     // product.id=(state.products.length+1).toString()
    //     return {
    //         ...state,
    //         posts:[...state.posts,post]
    //     }
    // }),
    on(loadPostSuccess, (state, action)=>{
        return{
            ...state,
            posts: action.posts
        }
    })
);

export function postsReducer(state,action){
    return _postReducer(state,action)
}