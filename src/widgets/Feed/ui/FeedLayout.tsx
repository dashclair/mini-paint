import { useAppSelector } from 'shared/model/hooks';
import { selectPosts } from 'entities/Post';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';

export const FeedLayout = () => {
  const postsSelector = useAppSelector(selectPosts);
  const posts = postsSelector.posts;

  return (
    <div className={styles.feedWidgenContainer}>
      {posts?.map((post) => {
        return (
          <Card
            key={post.imageURL}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={post.imageURL} />}
          >
            <Meta description={post.userEmail} />
          </Card>
        );
      })}
    </div>
  );
};
