import { createSlice } from '@reduxjs/toolkit';

function safeGetItem(key) {
  try {
    return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
  } catch (e) {
    return null;
  }
}

const initialState = {
  isAuthenticated: safeGetItem('token') ? true : false,
  user: safeGetItem('user') ? JSON.parse(safeGetItem('user')) : null,
  token: safeGetItem('token') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      try {
        typeof localStorage !== 'undefined' && localStorage.setItem('token', token);
        typeof localStorage !== 'undefined' && localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        // ignore in test or non-browser environments
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      try {
        typeof localStorage !== 'undefined' && localStorage.removeItem('token');
        typeof localStorage !== 'undefined' && localStorage.removeItem('user');
      } catch (e) {
        // ignore in test or non-browser environments
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
