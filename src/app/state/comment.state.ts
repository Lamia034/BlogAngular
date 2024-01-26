import {Comments} from "../comments/comments";
import {Users} from "../users/users";

export interface CommentState {
  comments: Comments[];
  replies: Comments[];
  users: Users[];
  selectedComment: Comments | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CommentState = {
  comments: [],
  replies: [],
  users: [],
  selectedComment: null,
  loading: false,
  error: null
};
