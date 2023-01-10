import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import { LoggedUser } from './types/UserState';
// import User from './types/User';
import * as api from './api';
// import { getUser } from './authSlice';

export const checkUser = createAsyncThunk('api/auth/user', () => api.getUser());

export const login = createAsyncThunk('api/auth/login', async (user: LoggedUser) => api.login(user));

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  role: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      // .addCase(login.pending, (state, action) => {
      //   state.loading = true;
      // })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload;
          const role = action.payload.role;
          state.user = user;
          state.authChecked = true;
          state.role = role;
        }
      })
      .addCase(login.rejected, (state, action) => {
        // в action.error попадёт ошибка сгенерированная санком
        // state.loadError = action.error.message;
        // state.loading = false;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        // state.authChecked = true;
        if (!action.payload.isLoggedIn) {
          state = initialState;
        } else {
          state.user = action.payload.user;
          state.role = action.payload.role
          state.authChecked = action.payload.isLoggedIn;
        }
      })
  },
});

export default authSlice.reducer;
