import { createSelector, createSlice } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage f

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
export const persitiAuthReduser = persistReducer(persistConfig, authReducer);