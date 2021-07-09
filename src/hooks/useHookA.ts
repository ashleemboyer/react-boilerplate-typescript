import React, { useState, useEffect } from 'react';

export const INITIAL_HOOK_STATE = {
  data: null,
  isLoading: null,
};

const useHookA = () => {
  const [data, setData] = useState(INITIAL_HOOK_STATE);

  useEffect(() => {
    setData({ ...data, isLoading: true });

    setTimeout(() => {
      setData({ data: 'testing123', isLoading: false });
    }, 500);
  }, []);

  return [data.data, data.isLoading];
};

export default useHookA;
