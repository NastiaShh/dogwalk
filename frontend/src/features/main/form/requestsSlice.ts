import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import RequestState from './types/State';
import * as api from './api';
import Request from './types/Request';

const initialState: RequestState = {
  requests: []
}

export const loadRequest = createAsyncThunk('requests/loadRequests', async () => {
  const requests = await api.loadRequest()
  return requests
})

export const createRequest = createAsyncThunk('requests/createRequest', async (request: Request) => {
  const requests = await api.createRequest(request)
  return requests
})

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
      .addCase(createRequest.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      })
  },
})

export default requestsSlice.reducer
