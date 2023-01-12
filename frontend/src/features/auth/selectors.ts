import { RootState } from '../../store';

export const selectAuthError = (state: RootState): string | undefined =>
  state.auth.authError;
