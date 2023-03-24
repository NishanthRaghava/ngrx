import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
export const SET_LOADING_ACTION = '[shared state] set loadng spinner';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION, props<{status: boolean}>()  
);