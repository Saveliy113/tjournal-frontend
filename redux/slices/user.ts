import { UserResponse } from '@/utils/api/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;

export const userReducer = userSlice.reducer;
