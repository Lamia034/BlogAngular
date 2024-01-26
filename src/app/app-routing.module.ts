import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'' , component:ArticlesComponent},
  { path: 'article-details/:articleId', component: ArticleDetailsComponent },
  {path:'login' , component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
