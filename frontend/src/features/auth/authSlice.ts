import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';
import { RegisteredUser, LoggedUser } from './types/UserState';
// import User from './types/User';
import * as api from './api';
// import { getUser } from './authSlice';

export const register = createAsyncThunk('api/auth/register', async (user: RegisteredUser) => api.register(user));

export const login = createAsyncThunk('api/auth/login', async (user: LoggedUser) => api.login(user));

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
  // здесь описываем реакции на асинхронные операции (санки)
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        // if (action.payload) {
        //   console.log('kfkfkfk');
        // } 
        // if (action.payload) {
          // console.log(action.payload);
          
          const user = action.payload;
          state.user = user;
          state.authChecked = true;
        // }
      })
      .addCase(register.rejected, (state, action) => {
        // state = initialState;
        console.log(action.error.message);
        // console.log(state);
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload) {
          const user = action.payload;
          state.user = user;
          state.authChecked = true;
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
          state.authChecked = action.payload.isLoggedIn;
        }
        
        console.log(action.payload.isLoggedIn);
        console.log(state.authChecked);
        
      })
  },
});

export default authSlice.reducer;
