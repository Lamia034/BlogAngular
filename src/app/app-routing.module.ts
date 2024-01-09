import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {ArticleDetailsComponent} from "./article-details/article-details.component";

const routes: Routes = [
  {path:'' , component:ArticlesComponent},
  { path: 'article-details/:articleId', component: ArticleDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
