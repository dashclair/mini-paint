import { useState } from 'react';
import { toast } from 'react-toastify';

type UseMutationReturn<TVariables, TData> = {
  data: TData | null;
  isLoading: boolean;
  mutate: (variables: TVariables) => Promise<TData | undefined>;
};

export const useMutation = <TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
): UseMutationReturn<TVariables, TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = async (variables: TVariables) => {
    setIsLoading(true);
    try {
      const data = await mutationFn(variables);
      setData(data);
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, isLoading, data };
};
