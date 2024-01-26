import {ArticleState} from "../../state/article.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(
  selectArticleState,
  (state: ArticleState) => state.articles
);
export const selectLoading = createSelector(
  selectArticleState,
  (state: ArticleState) => state.loading
);

export const selectError = createSelector(
  selectArticleState,
  (state: ArticleState) => state.error
);

export const selectSelectedArticle = createSelector(
  selectArticleState,
  (state: ArticleState) => state.selectedArticle
);
