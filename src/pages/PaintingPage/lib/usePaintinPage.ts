import { db, storage } from 'app/config/firbase';
import { selectUser } from 'entities/User';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from 'shared/model/hooks';

export const usePaintingPage = () => {
  const [tool, setTool] = useState<string | null>(null);
  const [width, setWidth] = useState<string>('3');
  const [color, setColor] = useState('#aabbcc');
  const user = useAppSelector(selectUser);
  const userEmail = user.userData!.email;

  const handleUploadFile = async (pic: string) => {
    const picId = uuidv4();

    const storageRef = ref(storage, `images/${picId}`);

    try {
      const snapshot = await uploadString(storageRef, pic, 'base64', {
        contentType: 'image/png',
      });
      const downloadURL = await getDownloadURL(snapshot.ref);

      const uploading = await addDoc(collection(db, 'images'), {
        imageURL: downloadURL,
        date: new Date(),
        userEmail: userEmail,
      });

      console.log('uploading image in add doc', uploading);
      toast.success('Successfully uploaded');
    } catch (error) {
      toast.error('Something went wrong during the upload process');
      console.error(error);
    }
  };

  return {
    tool,
    setTool,
    width,
    setWidth,
    setColor,
    color,
    userEmail,
    handleUploadFile,
  };
};
