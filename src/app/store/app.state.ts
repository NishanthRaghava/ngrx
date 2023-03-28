import { AuthState } from './../auth/state/auth.state';
import { AUTH_STATE_NAME } from './../auth/state/auth.selector';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { PostsState } from './../posts/state/posts.state';
import { CounterState } from './../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';
import { counterReducer } from '../counter/state/counter.reducer';
import { SharedReducer } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';
import { AuthReducer } from '../auth/state/auth.reducer';

export interface AppState {
    // counter : CounterState,
    // posts: PostsState,
    [SHARED_STATE_NAME]: SharedState,//why square brackets are used. if we dont use [] then it is assigned as a property.
    [AUTH_STATE_NAME]: AuthState
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postsReducer,
    [SHARED_STATE_NAME]: SharedReducer,
    [AUTH_STATE_NAME]: AuthReducer
}