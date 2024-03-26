import { Card, Spin } from 'antd';
import Meta from 'antd/es/card/Meta';
import styles from './FeedLayout.module.scss';
import { QueryDocumentSnapshot, collection, getDocs, query } from 'firebase/firestore';
import { db } from 'app/config/firbase';
import { useQueryData } from 'shared/model/useQueryData';

export const FeedLayout = () => {
  const q = query(collection(db, 'images'));
  const querySnapshot = () => {
    return getDocs(q);
  };

  const { data, isLoading } = useQueryData(querySnapshot);

  const posts = data?.docs.map((doc: QueryDocumentSnapshot) => {
    const picsInfo = doc.data();
    const imageURL = picsInfo.imageURL;
    const userEmail = picsInfo.userEmail;

    return { imageURL, userEmail };
  });

  console.log('loading', isLoading);

  return (
    <div className={styles.feedWidgenContainer}>
      {posts?.map((post) => {
        return (
          <Card key={post.imageURL} hoverable style={{ width: 240 }} cover={<Spin />}>
            <Meta description={post.userEmail} />
          </Card>
        );
      })}
    </div>
  );
};
