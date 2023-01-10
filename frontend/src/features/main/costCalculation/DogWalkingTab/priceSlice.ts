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
    increaseWalkPrice: (state) => {
      state.oneWalkPrice *= 2
    },
    decreaseWalkPrice: (state) => {
      state.oneWalkPrice /= 2
    },
    increaseWalksNumber: (state) => {
      state.walksNumber += 1
    },
    decreaseWalksNumber: (state) => {
      state.walksNumber -= 1
    },
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
      // console.log(state.totalPrice);
      // state.totalPrice = action.payload;
      const pricePerWalk =
       (state.dogsNumber === 1) ?
          state.oneWalkPrice :
          state.oneWalkPrice + (state.dogsNumber - 1) * (state.oneWalkPrice * 0.3);
      const discount = (state.trialWalk) ? pricePerWalk : 0;
      const totalPrice = pricePerWalk * state.walksNumber - discount;
      state.totalPrice = totalPrice;
    },
    // changeOneWalkPrice: (state, action: PayloadAction<string>) => {
    //   state.oneWalkPrice = Number(action.payload)
    // },
  }
})

export const {
  increaseWalkPrice,
  decreaseWalkPrice,
  increaseWalksNumber,
  decreaseWalksNumber,
  changeWalkPrice,
  changeWalksNumber,
  changeDogsNumber,
  changeTrialWalk,
  calculateTotalPrice,
} = priceSlice.actions
export default priceSlice.reducer;
