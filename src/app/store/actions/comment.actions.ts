import { createAction, props } from '@ngrx/store';
import { Comments } from '../../comments/comments';

export const loadComments = createAction('[Comments] Load Comments', props<{ page: number, size: number }>());
export const loadCommentsSuccess = createAction('[Comments] Load Comments Success', props<{ comments: Comments[] }>());
export const loadCommentsFailure = createAction('[Comments] Load Comments Failure', props<{ error: any }>());
export const selectComment = createAction('[Comments] Select Comment', props<{ comment: Comments }>());
export const addComment = createAction('[Comments] Add Comment', props<{ comment: Comments }>());
