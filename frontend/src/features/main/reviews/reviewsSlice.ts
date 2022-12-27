import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ReviewsState from './types/State';
import * as api from './api';

// 1. начальное состояние
const initialState: ReviewsState = {
  reviews: [],
};

// 2. асинхронные операции - санки

// loadReviews - это actionCreator
export const loadReviews = createAsyncThunk(
  'reviews/loadReviews',
  async () => {
    const reviews = await api.loadReviews();
    // то что возвращает thunk всегда попадает в action.payload
    return reviews;
  }
);

// 3. Сам слайс с редьюсерами

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // когда thunk loadSuggestions только запустился
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadReviews.pending, (state, action) => {
        state.loading = true;
      })
      // когда thunk loadSuggestions завершиться удачей (fulfilled)
      // то выполни этот редьюсер (измени стэйт)
      .addCase(loadReviews.fulfilled, (state, action) => {
        const reviews = action.payload;
        state.reviews = reviews;
        state.loading = false;
      })
      // когда thunk loadSuggestions завершиться неудачей
      .addCase(loadReviews.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        state.loadError = action.error.message;
        state.loading = false;
      });
  },
});

export default reviewsSlice.reducer;
