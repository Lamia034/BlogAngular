import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ArticlesComponent } from './articles/articles.component';
import { CommentsComponent } from './comments/comments.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {articleReducer} from "./store/reducers/article.reducers";
import {ArticleEffects} from "./store/effects/article.effects";
import {EffectsModule} from "@ngrx/effects";
import { UsersComponent } from './users/users.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CommentsComponent,
    ArticleDetailsComponent,
    NavbarComponent,
    FooterComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({}, {})
    StoreModule.forRoot({}),
    StoreModule.forFeature('articles', articleReducer),
    EffectsModule.forRoot([ArticleEffects]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
