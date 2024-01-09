import {Articles} from "../articles/articles";

export interface ArticleState {
  articles: Articles [];
}

export const initialState: ArticleState = {
  articles: []
}
