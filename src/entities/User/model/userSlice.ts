import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';

export interface userDataProps {
  email: string | null;
  id: string | null;
}

export interface userStateProps {
  userData: userDataProps | null;
  //   isAuth: boolean;
}

const initialState: userStateProps = {
  userData: null,
  //   isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userData = payload;
    },
    setUnAuth: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, setUnAuth } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.userData;

export default userSlice.reducer;
