import { db } from 'app/config/firbase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'shared/model/useMutation';

export const useDeleteCard = <T>(refetch: () => Promise<T | undefined>) => {
  const { mutate } = useMutation((id: string) => deleteDoc(doc(db, 'images', id)));
  const handleDeleteDoc = useCallback(async (id: string) => {
    try {
      await mutate(id);
      await refetch();
    } catch (err) {
      toast.error('Something went wrong');
    }
  }, []);

  return { handleDeleteDoc };
};
