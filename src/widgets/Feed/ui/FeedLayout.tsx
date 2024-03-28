import { Card, Select } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';
import { LayoutLoader } from 'shared/ui';
import { Skeleton } from 'antd';
import { useGetCards } from '../model/useGetCards';
import { useState } from 'react';

export const FeedLayout = () => {
  const { posts, isLoading, handleSetImageLoad, imageIsLoad } = useGetCards();
  const [filteredEmail, setFilterdEmails] = useState<string>('');
  const [emails, setEmails] = useState<{ value: string; label: string }[] | undefined>([]);

  const handleOpen = (open: boolean) => {
    if (open) {
      const emailsOnOpen = Array.from(new Set(posts?.map((post) => post.userEmail)));
      const filteredUsers = emailsOnOpen?.map((email) => {
        return {
          value: email,
          label: email,
        };
      });

      setEmails(filteredUsers);
      console.log('emails on open', emailsOnOpen);
      console.log('filtered email', filteredUsers);
    }
  };

  const handleSelectUser = (value: string) => {
    console.log('selected value', value);
    setFilterdEmails(value);
  };

  const handleDeselect = () => {
    setFilterdEmails('');
  };

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
          ?.filter((post) => post.userEmail.includes(filteredEmail))
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
