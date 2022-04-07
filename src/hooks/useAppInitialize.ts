import { useEffect } from 'react';

import { useAppDispatch } from 'store/hooks';
import { getMenusAction } from 'store/menus';

const useAppInitialize = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenusAction());
  }, [dispatch]);
};

export default useAppInitialize;
