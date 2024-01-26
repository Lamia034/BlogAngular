import { createReducer, on } from '@ngrx/store';
import * as CommentActions from '../actions/comment.actions';
import { CommentState, initialState } from "../../state/comment.state";


export const commentReducer = createReducer(
  initialState,

  // on(CommentActions.loadCommentsSuccess, (state, { comments }) => {
  //   console.log('New State with comments:', { ...state, comments });
  //   return { ...state, comments };
  // }),

  on(CommentActions.loadComments, (state) => ({ ...state, loading: true, error: null })),
  on(CommentActions.loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments,
    loading: false,
    error: null,
  })),
  on(CommentActions.loadCommentsFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(CommentActions.selectComment, (state, { comment }) => ({ ...state, selectedComment: comment })),

  on(CommentActions.addComment, (state, { comment }) => ({
  ...state,
  comments: [...state.comments, comment],
}))
);

export { CommentState } from '../../state/comment.state';
