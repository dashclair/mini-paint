import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { picsAsyncThunk } from './fetchThunk';

interface IPosts {
  imageURL: string;
  userEmail: string;
}

interface IPostsInitialState {
  posts: IPosts[] | null | undefined;
  isLoading: boolean;
}

const initialState: IPostsInitialState = {
  isLoading: true,
  posts: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(picsAsyncThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(picsAsyncThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    });
  },
});

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
