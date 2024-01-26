import {CommentState} from "../../state/comment.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectCommentState = createFeatureSelector<CommentState>('comments');

export const selectComments = createSelector(
  selectCommentState,
  (state: CommentState) => state.comments
);
export const selectLoading = createSelector(
  selectCommentState,
  (state: CommentState) => state.loading
);

export const selectError = createSelector(
  selectCommentState,
  (state: CommentState) => state.error
);

export const selectSelectedComment = createSelector(
  selectCommentState,
  (state: CommentState) => state.selectedComment
);

