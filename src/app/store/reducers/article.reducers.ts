import { createReducer, on } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { ArticleState, initialState } from "../../state/article.state";

export const articleReducer = createReducer(
  initialState,

  on(ArticleActions.loadArticlesSuccess, (state, { articles }) => {
    console.log('New State with articles:', { ...state, articles });
    return { ...state, articles };
  })
  // on(ArticleActions.addArticleSuccess, (state, { article }) => ({ ...state, article })),
  // on(ArticleActions.updateArticleSuccess, (state, { article }) => ({ ...state, article })),
  // on(ArticleActions.deleteArticleSuccess, (state, { id }) => ({ ...state, id }))
);

export { ArticleState } from '../../state/article.state';
