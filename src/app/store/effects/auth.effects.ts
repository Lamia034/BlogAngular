import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {AuthService} from "../../login/auth.service";

import * as AuthActions from '../actions/auth.actions';
// import * as AuthActions from './auth.actions';
// import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) => {
        const loginData = (action as any).loginData;
        return this.authService.login(loginData).pipe(
          map((response) => AuthActions.loginSuccess()),
          catchError((error) =>
            of(AuthActions.loginFailure({ error: error.message }))
          )
        );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
