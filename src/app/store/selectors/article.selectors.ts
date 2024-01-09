import {ArticleState} from "../../state/article.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectArticles = createSelector(
  selectArticleState,
  (state: ArticleState) => state.articles
);
