import { db } from 'app/config/firbase';
import { QueryDocumentSnapshot, collection, getDocs, query } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { useQueryData } from 'shared/model/useQueryData';

interface PostsReturnedTypes {
  imageURL: string;
  userEmail: string;
}

export const useGetCards = () => {
  const q = query(collection(db, 'images'));
  const querySnapshot = useCallback(() => {
    return getDocs(q);
  }, [q]);

  const [imageIsLoad, setImageLoad] = useState(true);
  const { data, isLoading } = useQueryData(querySnapshot);

  const handleSetImageLoad = () => {
    setImageLoad(false);
  };

  const posts = data?.docs.map((doc: QueryDocumentSnapshot): PostsReturnedTypes => {
    const picsInfo = doc.data();
    const imageURL = picsInfo.imageURL;
    const userEmail = picsInfo.userEmail;

    return { imageURL, userEmail };
  });

  return { posts, imageIsLoad, isLoading, handleSetImageLoad };
};
