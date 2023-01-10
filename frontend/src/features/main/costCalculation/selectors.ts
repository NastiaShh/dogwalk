import { RootState } from '../../../store';
import PriceState from './types/PriceState';

export const selectPrice = (state: RootState): PriceState =>
  state.price;
