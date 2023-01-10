import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import PriceState from './types/PriceState';

const initialState: PriceState = {
  totalPrice: 650,
  oneWalkPrice: 650,
  walksNumber: 1,
  dogsNumber: 1,
  trialWalk: false,
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    changeWalkPrice: (state, action: PayloadAction<number>) => {
      state.oneWalkPrice = action.payload
    },
    changeWalksNumber: (state, action: PayloadAction<number>) => {
      state.walksNumber = action.payload
    },
    changeDogsNumber: (state, action: PayloadAction<number>) => {
      state.dogsNumber = action.payload
    },
    changeTrialWalk: (state) => {
      state.trialWalk = !state.trialWalk;
    },
    calculateTotalPrice: (state) => {
      const pricePerWalk =
       (state.dogsNumber === 1) ?
          state.oneWalkPrice :
          state.oneWalkPrice + (state.dogsNumber - 1) * (state.oneWalkPrice * 0.3);
      const discount = (state.trialWalk) ? pricePerWalk : 0;
      const totalPrice = Math.round(pricePerWalk * state.walksNumber - discount);
      state.totalPrice = totalPrice;
    },
  }
})

export const {
  changeWalkPrice,
  changeWalksNumber,
  changeDogsNumber,
  changeTrialWalk,
  calculateTotalPrice,
} = priceSlice.actions
export default priceSlice.reducer;
