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
export interface Article{
  id:String;
  title:String;
  text:String;
  medias:Medias[];
  nbComments:number;
  nbReacts:number;
  comments:Comment[];
  user: Users;
}
