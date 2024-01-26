import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as CommentActions from '../actions/comment.actions';
import { CommentService } from '../../comments/comments.service';

import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { Comments } from '../../comments/comments';

@Injectable()
export class CommentEffects {


  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentActions.loadComments),
      mergeMap((action) =>
        this.commentService.getComments(action.page, action.size).pipe(
          map((comments) => CommentActions.loadCommentsSuccess({ comments })),
          catchError((error) => of(CommentActions.loadCommentsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commentService: CommentService
  ) {}

}
