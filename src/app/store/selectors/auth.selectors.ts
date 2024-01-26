import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthState} from "../../state/auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  (state) => state.loggedIn
);

export const getError = createSelector(
  selectAuthState,
  (state) => state.error
);
