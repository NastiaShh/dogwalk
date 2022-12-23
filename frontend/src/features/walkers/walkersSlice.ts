import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import WalkersState from './types/State';
import * as api from './api';

const initialState: WalkersState = {
  walkers: [],
}

// санки(ассинхронные операции)

export const loadWalkers = createAsyncThunk(
  'warkers/loadWarkers',
  async () => {
    const walkers = await api.loadWalkers()
    return walkers
  }
)

// слайс с редьюсерами

const walkersSlice = createSlice({
  name: 'walkers',
  initialState,
  reducers: {},
  // реакции на асинхронные операции(санки)
  extraReducers(builder) {
    builder
      .addCase(loadWalkers.fulfilled, (state, action) => {
        const walkers = action.payload
        state.walkers = walkers
      })
  },
})

export default walkersSlice.reducer;

