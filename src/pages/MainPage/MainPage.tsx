import { FeedLayout } from 'widgets/Feed';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <FeedLayout />
    </div>
  );
};

export default MainPage;
