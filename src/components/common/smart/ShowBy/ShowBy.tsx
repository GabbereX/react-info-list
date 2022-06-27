import React, { ChangeEvent, FC } from 'react';
import styles from './ShowBy.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { paginationState } from '../../../../store/reducers/paginationSlice';
import { useSearchParams } from 'react-router-dom';

const ShowBy: FC = () => {
  const { itemsPerPage } = useAppSelector(paginationState);
  const { setItemsPerPage, setPage } = useAppDispatch();
  const [searchParams] = useSearchParams();
  const optionsList = [10, 25, 50, 100];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.target.value);
    setPage('1');
    searchParams.delete('page');
    window.history.replaceState(null, 'search', window.location.pathname);
  };

  return (
    <div className={styles.selectContainer}>
      Показывать по
      <select
        className={styles.select}
        defaultValue={itemsPerPage}
        onChange={handleChange}
      >
        {optionsList.map(optionText => {
          return (
            <option
              key={optionText}
              value={optionText}
              // selected={itemsPerPage === optionText}
            >
              {optionText}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ShowBy;
