import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from 'app/config/firbase';
import { collection, getDocs, query } from 'firebase/firestore';
import { toast } from 'react-toastify';

const q = query(collection(db, 'images'));

export const picsAsyncThunk = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const querySnapshot = await getDocs(q);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const picsArray = querySnapshot.docs.map((doc: any) => {
      const picsInfo = doc.data();
      const imageURL = picsInfo.imageURL;
      const userEmail = picsInfo.userEmail;

      return { imageURL, userEmail };
    });
    console.log(picsArray);
    return picsArray;
  } catch (e) {
    toast.error('Something went wrong');
  }
});
