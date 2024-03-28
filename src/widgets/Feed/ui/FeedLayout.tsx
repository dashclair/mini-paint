import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';
import { LayoutLoader } from 'shared/ui';
import { Skeleton } from 'antd';
import { useGetCards } from '../model/useGetCards';

export const FeedLayout = () => {
  const { posts, isLoading, handleSetImageLoad, imageIsLoad } = useGetCards();

  const skeletonsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <LayoutLoader isLoading={isLoading}>
      <div className={styles.feedWidgenContainer}>
        {posts
          ? posts.map((post) => {
              return (
                <Card
                  key={post.imageURL}
                  hoverable
                  cover={<img onLoad={handleSetImageLoad} alt="example" src={post.imageURL} />}
                >
                  <Skeleton loading={imageIsLoad} paragraph />
                  <Meta description={post.userEmail} />
                </Card>
              );
            })
          : skeletonsArray.map((skeleton) => {
              return <Skeleton key={skeleton} loading={imageIsLoad} active />;
            })}
      </div>
    </LayoutLoader>
  );
};
