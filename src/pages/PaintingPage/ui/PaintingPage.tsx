import { Canvas } from 'features/Paint';
import { Tools } from 'entities/Tools';
import { ToastContainer, toast } from 'react-toastify';
import styles from './PaintingPage.module.scss';
import { usePaintingPage } from '../lib/usePaintinPage';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { db, storage } from 'app/config/firbase';
import { addDoc, collection } from 'firebase/firestore';

export const PaintingPage = () => {
  const { tool, setTool, width, setWidth, setColor, color, userEmail } = usePaintingPage();

  // const { mutate, isLoading} = useMutation<string, UploadResult>((pic) =>
  //   uploadString(storageRef, pic, 'base64', {
  //     contentType: 'image/png',
  //   }),
  // );

  const handleUploadFile = (pic: string) => {
    const picId = uuidv4();

    const storageRef = ref(storage, `images/${picId}`);
    const uploadImage = uploadString(storageRef, pic, 'base64', {
      contentType: 'image/png',
    });

    uploadImage.then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        try {
          addDoc(collection(db, 'images'), {
            imageURL: downloadURL,
            date: new Date(),
            userEmail: userEmail,
          });
          toast.success('Successfully uploaded');
        } catch (error) {
          console.log(error);
        }
      });
    });
  };

  return (
    <div className={styles.container}>
      <ToastContainer position="top-left" />
      <Tools
        width={width}
        setWidth={setWidth}
        setTool={setTool}
        color={color}
        setColor={setColor}
      />
      <Canvas color={color} width={width} tool={tool} handleUploadImage={handleUploadFile} />
    </div>
  );
};
