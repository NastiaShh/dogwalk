import { createSlice } from '@reduxjs/toolkit';
import AuthState from './types/AuthState';

const initialState: AuthState = {
  authChecked: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
