import {Users} from "../users/users";

export interface Comments{
  id:String;
  text:String;
   // userId:String;
  user:Users;
  articleId:String;
  postingTime:Date;
  replies?: Comments[];
}
