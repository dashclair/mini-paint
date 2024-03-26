import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';
import { LayoutLoader } from 'shared/ui';
import { Skeleton } from 'antd';
import { useGetCards } from '../model/useGetCards';

export const FeedLayout = () => {
  const { posts, isLoading, handleSetImageLoad, imageIsLoad } = useGetCards();

  return (
    <LayoutLoader isLoading={isLoading}>
      <div className={styles.feedWidgenContainer}>
        {posts?.map((post) => {
          return (
            <>
              <Card
                key={post.imageURL}
                hoverable
                cover={<img onLoad={handleSetImageLoad} alt="example" src={post.imageURL} />}
              >
                <Meta description={post.userEmail} />
              </Card>
              <Skeleton loading={imageIsLoad} paragraph />
            </>
          );
        })}
      </div>
    </LayoutLoader>
  );
};
