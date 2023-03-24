
import { Post } from "./../../models/posts.model";

export interface PostsState{
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [
        {id:'1',title:'sample title', description:'sample description'},
        {id:'2',title:'sample title', description:'sample description'}
    ],
};