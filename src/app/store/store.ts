import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/User';
import { postsReducer } from '../../entities/Post';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
