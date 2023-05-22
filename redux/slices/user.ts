import { UserResponse } from '@/utils/api/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { HYDRATE } from 'next-redux-wrapper';

export interface UserState {
  data: UserResponse | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserResponse>) => {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // state.data = action.payload.user.data;
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;

export const userReducer = userSlice.reducer;
