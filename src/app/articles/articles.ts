import {Comments} from "../comments/comments";
import {Users} from "../users/users";

export enum MediaType {
  VIDEO,
  IMAGE,
  AUDIO
}
export interface Medias {
  url: string;
  mediaType: MediaType;
  altText: string;
}
export interface Articles{
  id:String;
  title:String;
  text:String;
  medias:Medias[];
  nbComments:number;
  nbReacts:number;
  comments:Comments[];
  user:Users;
}
