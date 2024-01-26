import { createReducer, on } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { ArticleState, initialState } from "../../state/article.state";


export const articleReducer = createReducer(
  initialState,

  // on(ArticleActions.loadArticlesSuccess, (state, { articles }) => {
  //   console.log('New State with articles:', { ...state, articles });
  //   return { ...state, articles };
  // }),

  on(ArticleActions.loadArticles, (state) => ({ ...state, loading: true, error: null })),
  on(ArticleActions.loadArticlesSuccess, (state, { articles }) => ({
    ...state,
    articles,
    loading: false,
    error: null,
  })),
  on(ArticleActions.loadArticlesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(ArticleActions.selectArticle, (state, { article }) => ({ ...state, selectedArticle: article }))
  // on(ArticleActions.addArticleSuccess, (state, { article }) => ({ ...state, article })),
  // on(ArticleActions.updateArticleSuccess, (state, { article }) => ({ ...state, article })),
  // on(ArticleActions.deleteArticleSuccess, (state, { id }) => ({ ...state, id }))
);

export { ArticleState } from '../../state/article.state';
