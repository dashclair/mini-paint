import { createSlice } from '@reduxjs/toolkit';

interface IPosts {
  uid: string;
  email: string;
  link: string;
}

interface IPostsInitialState {
  posts: IPosts[] | null;
}

const initialState: IPostsInitialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, { payload }) => {
      const posts = state.posts;
      posts?.push(payload);
    },
  },
});
