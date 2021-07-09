import React, { useState, useEffect } from 'react';

interface UseHookAState {
  data: any;
  isLoading: boolean;
}

export const INITIAL_HOOK_STATE: UseHookAState = {
  data: null,
  isLoading: null,
};

const useHookA = (): [UseHookAState['data'], UseHookAState['isLoading']] => {
  const [data, setData] = useState<UseHookAState>(INITIAL_HOOK_STATE);

  useEffect(() => {
    setData({ ...data, isLoading: true });

    setTimeout(() => {
      setData({ data: 'testing123', isLoading: false });
    }, 500);
  }, []);

  return [data.data, data.isLoading];
};

export default useHookA;
