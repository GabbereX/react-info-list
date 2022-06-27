import React, { FC } from 'react';
// import styles from './Main.module.scss';
import Table from '../../smart/Table/Table';
import Pagination from '../../smart/Pagination/Pagination';
import ShowBy from '../../smart/ShowBy/ShowBy';

const Main: FC = () => {
  return (
    <main className={'container'}>
      <Table />
      <ShowBy />
      <Pagination />
    </main>
  );
};

export default Main;
