import {Articles} from "../articles/articles";
import {Users} from "../users/users";

export interface ArticleState {
  articles: Articles[];
  // users: Users[];
  selectedArticle: Articles | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ArticleState = {
  articles: [],
  // users: [],
  selectedArticle: null,
  loading: false,
  error: null
};
