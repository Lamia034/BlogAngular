export interface AuthState {
  loggedIn: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  error: null,
};
