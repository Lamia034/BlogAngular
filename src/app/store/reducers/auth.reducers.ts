import {createReducer, on} from "@ngrx/store";
import {initialAuthState} from "../../state/auth.state";
import * as AuthActions from '../actions/auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state) => ({
    ...state,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state) => ({
    ...state,
    loggedIn: true,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loggedIn: false,
    error,
  }))
);
