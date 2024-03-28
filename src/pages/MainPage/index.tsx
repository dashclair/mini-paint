import { FeedLayout } from 'widgets/Feed';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <FeedLayout />
    </div>
  );
};
