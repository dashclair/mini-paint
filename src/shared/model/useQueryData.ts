import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type QueryFunction<T> = () => Promise<T>;

type UseQueryReturn<T> = {
  data: T | null;
  isError: boolean;
  isLoading: boolean;
  refetch(): Promise<T | undefined>;
};

type UseQueryOptions = {
  refetchOnMount?: boolean;
};

export const useQueryData = <T>(
  queryFunction: QueryFunction<T>,
  options?: UseQueryOptions,
): UseQueryReturn<T> => {
  const refetchOnMount = options?.refetchOnMount ?? true;
  const [isLoading, setIsLoading] = useState<boolean>(refetchOnMount);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    try {
      setError('');
      const data = await queryFunction();
      setData(data);
      console.log('query function');
      return data;
    } catch (error) {
      toast.error('someting went wrond while fetching data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (refetchOnMount) {
      fetchData();
    }
  }, [fetchData, refetchOnMount]);

  return { data, isError: Boolean(error), isLoading, refetch: fetchData };
};
