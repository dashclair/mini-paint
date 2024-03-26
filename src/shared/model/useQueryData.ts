import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type QueryFunction<T> = () => Promise<T>;

type UseQueryReturn<T> = {
  data: T | null;
  isError: boolean;
  isLoading: boolean;
};

export const useQueryData = <T>(queryFunction: QueryFunction<T>): UseQueryReturn<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setError('');
      const data = await queryFunction();
      setData(data);

      return data;
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isError: Boolean(error), isLoading };
};
