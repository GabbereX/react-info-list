import React, { FC } from 'react';
import styles from './TableHead.module.scss';

const TableHead: FC = () => {
  const theadList = [
    'Номер / Дата',
    'Тип задания / Автор',
    'Аккаунт / Терминал',
    'Статус',
  ];
  return (
    <thead>
      <tr className={styles.container}>
        {theadList.map(text => (
          <th key={text} className={styles.column}>
            <div className={styles.columnName}>{text}</div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
