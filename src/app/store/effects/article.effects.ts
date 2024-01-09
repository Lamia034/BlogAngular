import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as ArticleActions from '../actions/article.actions';
import { ArticleService } from '../../articles/articles.service';

import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { Articles } from '../../articles/articles';

@Injectable()
export class ArticleEffects {


  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ArticleActions.loadArticles),
      mergeMap((action) =>
        this.articleService.getArticles(action.page, action.size).pipe(
          map((articles) => ArticleActions.loadArticlesSuccess({ articles })),
          catchError((error) => of(ArticleActions.loadArticlesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

}

