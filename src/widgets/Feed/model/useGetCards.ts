import { db } from 'app/config/firbase';
import { QueryDocumentSnapshot, collection, getDocs, query } from 'firebase/firestore';
import { useState } from 'react';
import { useQueryData } from 'shared/model/useQueryData';

export interface PostsReturnedTypes {
  imageURL: string;
  userEmail: string;
}

export const useGetCards = () => {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [emails, setEmails] = useState<{ value: string; label: string }[]>([]);
  const [imageIsLoad, setImageLoad] = useState(true);

  const q = query(collection(db, 'images'));
  const querySnapshot = () => {
    return getDocs(q);
  };
  const { data, isLoading } = useQueryData(querySnapshot);

  const posts = data?.docs.map((doc: QueryDocumentSnapshot): PostsReturnedTypes => {
    const picsInfo = doc.data();
    const imageURL = picsInfo.imageURL;
    const userEmail = picsInfo.userEmail;

    return { imageURL, userEmail };
  });

  const handleOpen = (open: boolean) => {
    if (open) {
      const uniqueEmails = Array.from(new Set(posts?.map((post) => post.userEmail)));
      const emailOptions = uniqueEmails?.map((email) => {
        return {
          value: email,
          label: email,
        };
      });

      setEmails(emailOptions);
    }
  };

  const handleSelectUser = (value: string) => {
    setSelectedEmails((prevSelectedEmails) => [...prevSelectedEmails, value]);
  };

  const handleDeselect = (value: string) => {
    setSelectedEmails((prevSelectedEmails) =>
      prevSelectedEmails.filter((email) => email !== value),
    );
  };

  const shouldShowPost = (post: PostsReturnedTypes) => {
    if (selectedEmails.length === 0) {
      return post;
    }

    return selectedEmails.includes(post.userEmail);
  };

  const handleSetImageLoad = () => {
    setImageLoad(false);
  };

  return {
    posts,
    imageIsLoad,
    isLoading,
    emails,
    handleSetImageLoad,
    handleOpen,
    handleSelectUser,
    handleDeselect,
    shouldShowPost,
  };
};
