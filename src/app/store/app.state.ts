import { SHARED_STATE_NAME } from './shared/shared.selector';
import { PostsState } from './../posts/state/posts.state';
import { CounterState } from './../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { counterReducer } from '../counter/state/counter.reducer';
import { SharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';

export interface AppState {
    // counter : CounterState,
    // posts: PostsState,
    SHARED_STATE_NAME: SharedState
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postsReducer,
    SHARED_STATE_NAME: SharedReducer
}