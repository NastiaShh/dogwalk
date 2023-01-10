import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import PriceState from './types/PriceState';

const initialState: PriceState = {
  initialPrice: 650,
  totalPrice: 650,
  oneWalkPrice: 650,
  oneDayPrice: 600,
  oneHourPrice: 800,
  walksPerDay: 2,
  walksNumber: 1,
  hoursNumber: 1,
  visitsNumber: 1,
  daysNumber: 1,
  dogsNumber: 1,
  trialDiscount: false,
  selectedService: 'dogWalking',
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    changeInitialPrice: (state, action: PayloadAction<string>) => {
      switch(action.payload) {
        case 'dogWalking':
          state.selectedService = 'dogWalking';
          state.totalPrice = 650;
          break;
        case 'dogBoarding':
          state.selectedService = 'dogBoarding';
          state.totalPrice = 1200;
          break;
        case 'dogNanny':
          state.selectedService = 'dogNanny';
          state.totalPrice = 800;
          break;
      }
    },

    changeWalkPrice: (state, action: PayloadAction<number>) => {
      state.oneWalkPrice = action.payload
    },
    
    changeDayPrice: (state, action: PayloadAction<number>) => {
      state.oneWalkPrice = action.payload
    },
    changeWalksPerDay: (state, action: PayloadAction<number>) => {
      state.walksPerDay = action.payload;
    },
    changeWalksNumber: (state, action: PayloadAction<number>) => {
      state.walksNumber = action.payload
    },
    changeVisitsNumber: (state, action: PayloadAction<number>) => {
      state.visitsNumber = action.payload
    },
    changeHoursNumber: (state, action: PayloadAction<number>) => {
      state.hoursNumber = action.payload
    },
    changeDaysNumber: (state, action: PayloadAction<number>) => {
      state.daysNumber = action.payload
    },
    changeDogsNumber: (state, action: PayloadAction<number>) => {
      state.dogsNumber = action.payload
    },
    changeTrialDiscount: (state) => {
      state.trialDiscount = !state.trialDiscount;
    },
    calculateTotalPrice: (state) => {
      console.log(state.selectedService)
      let oneUnitPrice = state.oneWalkPrice;
      let unitsNumber = state.walksNumber;
      let nextDogPrice = 0.3;

      switch(state.selectedService) {
        case 'dogWalking':
          break;
        case 'dogBoarding':
          oneUnitPrice = state.walksPerDay * state.oneDayPrice;
          unitsNumber = state.daysNumber;
          nextDogPrice = 0.5;
          break;
        case 'dogNanny':
          oneUnitPrice = state.oneHourPrice * state.hoursNumber;
          unitsNumber = state.visitsNumber;
          nextDogPrice = 0.2;
          break;
      }

      const pricePerUnit =
        (state.dogsNumber === 1) ?
          oneUnitPrice :
          oneUnitPrice + (state.dogsNumber - 1) * (oneUnitPrice * nextDogPrice);
      const discount = (state.trialDiscount) ? pricePerUnit : 0;
      const totalPrice = Math.round(pricePerUnit * unitsNumber - discount);
      state.totalPrice = totalPrice;
      
    },

    reset: () => initialState,
  }
})

export const {
  changeInitialPrice,
  changeWalkPrice,
  changeDayPrice,
  changeWalksPerDay,
  changeDaysNumber,
  changeWalksNumber,
  changeVisitsNumber,
  changeHoursNumber,
  changeDogsNumber,
  changeTrialDiscount,
  calculateTotalPrice,
  reset,
} = priceSlice.actions
export default priceSlice.reducer;
