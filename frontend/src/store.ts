import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
import reviewsSlice from './features/main/reviews/reviewsSlice';
import requestsSlice from './features/main/form/requestsSlice';
import walkersSlice from './features/walkers/walkersSlice';
import authSlice from './features/auth/authSlice';
import priceSlice from './features/main/costCalculation/priceSlice';
import dogsSlice from './features/profile/dogsSlice';

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    reviews: reviewsSlice,
    walkers: walkersSlice,
    requests: requestsSlice,
    auth: authSlice,
    price: priceSlice,
    dogs: dogsSlice,
  }
})

// для правильной типизации будем использовать useAppDispatch вместо useDispatch
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>

export default store
