import { LayoutLoader } from 'shared/ui';
import { Skeleton } from 'antd';
import { useGetCards } from '../model/useGetCards';
import { Card, Select } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';

export const FeedLayout = () => {
  const {
    posts,
    imageIsLoad,
    isLoading,
    emails,
    handleSetImageLoad,
    handleOpen,
    handleSelectUser,
    handleDeselect,
    shouldShowPost,
  } = useGetCards();

  return (
    <LayoutLoader isLoading={isLoading}>
      <Select
        mode="tags"
        style={{ width: '100%' }}
        options={emails}
        onSelect={handleSelectUser}
        onDeselect={handleDeselect}
        onDropdownVisibleChange={handleOpen}
      />
      <div className={styles.feedWidgenContainer}>
        {posts
          ?.filter((post) => shouldShowPost(post))
          .map((post) => {
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
          })}
      </div>
    </LayoutLoader>
  );
};
