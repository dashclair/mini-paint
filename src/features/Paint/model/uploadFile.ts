import { getDownloadURL, ref, uploadString } from '@firebase/storage';
import { storage } from 'app/config/firbase';
import { v4 as uuidv4 } from 'uuid';

export const uploadFile = (pic: string) => {
  const picId = uuidv4();
  const storageRef = ref(storage, `images/${picId}`);
  const uploadTask = uploadString(storageRef, pic, 'base64', {
    contentType: 'image/png',
  });

  uploadTask.then((snapshot) => {
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log(downloadURL);
    });
  });
};
