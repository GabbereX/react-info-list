import React, { FC, useEffect, useState } from 'react';
// import styles from './TableBody.module.scss';
import ErrorReson from '../../simple/ErrorReson/ErrorReson';
import TableRow from '../../smart/TableRow/TableRow';
import useFetch from '../../../../hooks/useFetch';
import { useAppSelector } from '../../../../hooks/useRedux';
import { paginationState } from '../../../../store/reducers/paginationSlice';
import { IData } from '../../../../interfaces/IData';

const TableBody: FC = () => {
  const { data, status } = useFetch();
  const { page, itemsPerPage } = useAppSelector(paginationState);
  const [dataPage, setDataPage] = useState<IData[] | []>([]);

  useEffect(() => {
    if (data.length) {
      const sliceEnd = Number(page) * itemsPerPage;
      const sliceStart = sliceEnd - itemsPerPage;
      const dataForPage = data.slice(sliceStart, sliceEnd);
      setDataPage(dataForPage);
    }
  }, [page, itemsPerPage, data]);

  return (
    <tbody>
      {dataPage.length ? (
        dataPage &&
        dataPage.map(dataItem => (
          <TableRow key={dataItem.id} dataItem={dataItem} />
        ))
      ) : (
        <ErrorReson
          text={
            status
              ? 'Сервер недоступен. Попробуйте позже'
              : 'На данный момент список пуст'
          }
        />
      )}
    </tbody>
  );
};

export default TableBody;
