import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import { RegisteredUser, LoggedUser } from './types/UserState';
import * as api from './api';

export const registerUser = createAsyncThunk('api/auth/register', async (user: RegisteredUser) => api.register(user));

export const login = createAsyncThunk('api/auth/login', async (user: LoggedUser) => api.login(user));

export const logout = createAsyncThunk('api/auth/logout', () => api.logout());

export const checkUser = createAsyncThunk('api/auth/user', () => api.getUser());

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
  role: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        const user = action.payload;
        const role = action.payload.role;
        state.user = user;
        state.authChecked = true;
        state.role = role;
        state.authError = undefined;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authChecked = false;
        state.user = undefined;
        state.role = '';
        state.authError = action.error.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        const user = action.payload;
        const role = action.payload.role;
        state.user = user;
        state.authChecked = true;
        state.role = role;
        state.authError = undefined;
      })
      .addCase(login.rejected, (state, action) => {
        state.authChecked = false;
        state.user = undefined;
        state.role = '';
        state.authError = action.error.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.authChecked = false;
        state.user = undefined;
        state.role = '';
      })
      .addCase(logout.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        if (!action.payload.isLoggedIn) {
          state.authChecked = false;
          state.user = undefined;
          state.role = '';
        } else {
          state.user = action.payload.user;
          state.role = action.payload.role
          state.authChecked = action.payload.isLoggedIn;
        }
      })
  },
});

export default authSlice.reducer;
