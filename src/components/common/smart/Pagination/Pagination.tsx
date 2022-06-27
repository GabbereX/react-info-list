import React, { FC, useEffect } from 'react';
import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { getDataState } from '../../../../store/reducers/api/getData';
import { paginationState } from '../../../../store/reducers/paginationSlice';
import { useLocation, useSearchParams } from 'react-router-dom';

const Pagination: FC = () => {
  const { data } = useAppSelector(getDataState);
  const { itemsPerPage, page } = useAppSelector(paginationState);
  const { setPage } = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get('page');
    page && setPage(page);
    !page && setPage('1');
    if (page === '1') {
      window.history.replaceState(null, 'search', window.location.pathname);
      searchParams.delete('page');
    }
  }, [location.search]);

  return (
    <div className={styles.pagination}>
      {new Array((data.length / itemsPerPage) | 0).fill('').map((item, i) => {
        const index = i + 1;
        return (
          <button
            key={index}
            className={styles.button}
            disabled={Number(page) === index}
            onClick={() => setSearchParams({ page: String(index) })}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
