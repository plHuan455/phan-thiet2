import useDidMount from 'hooks/useDidMount';
import { useAppDispatch } from 'store/hooks';
import { getSystemsAsync } from 'store/systems';

const useAppInitialize = () => {
  const dispatch = useAppDispatch();

  useDidMount(() => {
    dispatch(getSystemsAsync());
  });
};

export default useAppInitialize;
