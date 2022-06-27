import React, { FC } from 'react';
import styles from './Table.module.scss';
import TableHead from '../../simple/TableHead/TableHead';
import TableBody from '../../ordinary/TableBody/TableBody';

const Table: FC = () => {
  return (
    <table className={styles.table}>
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
