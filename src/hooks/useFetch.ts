import { useAppDispatch, useAppSelector } from './useRedux';
import { getDataState } from '../store/reducers/api/getData';
import { useEffect } from 'react';

const useFetch = () => {
  const { data, isLoading, status } = useAppSelector(getDataState);
  const { fetchAPI } = useAppDispatch();

  useEffect(() => {
    if (!data.length) {
      fetchAPI();
    }
  }, []);

  return { data, isLoading, status };
};

export default useFetch;
