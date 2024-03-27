import { selectUser } from 'entities/User';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from 'shared/model/hooks';
// import { useMutation } from 'shared/model/useMutation';
// import { UploadResult, getDownloadURL, ref, uploadString } from 'firebase/storage';
// import { db, storage } from 'app/config/firbase';
// import { addDoc, collection } from 'firebase/firestore';
// import { toast } from 'react-toastify';

export const usePaintingPage = () => {
  const [tool, setTool] = useState<string | null>(null);
  const [width, setWidth] = useState<string>('3');
  const [color, setColor] = useState('#aabbcc');
  const user = useAppSelector(selectUser);
  const userEmail = user.userData!.email;

  return { tool, setTool, width, setWidth, setColor, color, userEmail };
};
