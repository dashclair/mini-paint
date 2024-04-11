import { CustomButton, IconComponent, LayoutLoader } from 'shared/ui';
import { Skeleton } from 'antd';
import { useGetCards } from '../../model/useGetCards';
import { Card, Select } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';
import { PreviewButton } from 'features/Preview';
import { useDeleteCard } from 'widgets/Feed/model/useDeleteCard';

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
    refetch,
  } = useGetCards();

  const { handleDeleteDoc } = useDeleteCard(refetch);

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
                <div className={styles.cardContentContainer}>
                  <Meta description={post.userEmail} />
                  <div className={styles.feedButtons}>
                    <PreviewButton image={post.imageURL} />
                    <CustomButton
                      type="text"
                      className={styles.buttonDelete}
                      disabled={isLoading}
                      onClick={() => handleDeleteDoc(post.id)}
                    >
                      <IconComponent className={styles.trashIcon} iconName="trash" />
                    </CustomButton>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </LayoutLoader>
  );
};
