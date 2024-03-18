import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';
import { User } from 'firebase/auth';

export interface userDataProps {
  email: string | null;
  id: string | null;
}

export interface userStateProps {
  userData: User | null;
  pending: boolean;
}

const initialState: userStateProps = {
  userData: null,
  pending: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPending: (state) => {
      state.pending = false;
    },
    setUser: (state, { payload }) => {
      state.userData = payload;
    },
    setUnAuth: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, setUnAuth, setPending } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
