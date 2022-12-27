import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RequestState from './types/State';
import * as api from './api';

const initialState: RequestState = {
  requests: []
}

export const loadRequest = createAsyncThunk('requests/loadRequests', async () => {
  const requests = await api.loadRequest()
  return requests
})

// export const createRequest = createAsyncThunk('requests/createRequest', async () => {
//   const requests = await api.createRequest()
//   return requests
// })

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadRequest.fulfilled, (state, action) => {
        const requests = action.payload
        state.requests = requests
      })
      // .addCase()
  },
})

export default requestsSlice.reducer
