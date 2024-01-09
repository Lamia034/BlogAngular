export enum MediaType {
  VIDEO,
  IMAGE,
  AUDIO
}
export interface Articles{
  id:String;
  title:String;
  text:String;
  media:MediaType;
  nbComments:number;
  nbReacts:number;
}
