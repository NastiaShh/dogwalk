// в этом файле мы указываем функции, которые достают данные из стэйта

import { RootState } from '../../../store';
import Review from './types/Review';

export const selectReviews = (state: RootState): Review[] =>
  state.reviews.reviews;

export const selectLoadError = (state: RootState): string | undefined =>
  state.reviews.loadError;

export const selectLoading = (state: RootState): boolean | undefined =>
  state.reviews.loading;
