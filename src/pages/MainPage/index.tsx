import { useEffect } from 'react';
import { FeedLayout } from 'widgets/Feed';
import { useAppDispatch } from 'shared/model/hooks';
import { picsAsyncThunk } from 'entities/Post/model/fetchThunk';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const handleFatchingPosts = async () => {
    await dispatch(picsAsyncThunk());
  };

  useEffect(() => {
    handleFatchingPosts();
  }, []);

  return (
    <div className={styles.container}>
      Main page
      <FeedLayout />
    </div>
  );
};
