import React, { FC } from 'react';
import styles from './TableRow.module.scss';
import { IData } from '../../../../interfaces/IData';
import { useNavigate } from 'react-router-dom';
import convertDate from '../../../../utils/convertDate';
import convertUser from '../../../../utils/convertUser';
import StatusButton from '../../../ui/StatusButton/StatusButton';

type TProps = { dataItem: IData };

const TableRow: FC<TProps> = ({ dataItem }) => {
  const navigate = useNavigate();
  const {
    id,
    account,
    created_user,
    created_date,
    status,
    terminal,
    order_type,
  } = dataItem;

  return (
    <tr className={styles.row} onClick={() => navigate(`/item/${id}`)}>
      <td className={styles.cell}>
        <div className={styles.cellWrapper}>
          <div className={styles.cellWrapperTop}>№{id}</div>
          <div className={styles.cellWrapperBottom}>
            {convertDate(created_date)}
          </div>
        </div>
      </td>
      <td className={styles.cell}>
        <div className={styles.cellWrapper}>
          <div className={styles.cellWrapperTop}>{order_type.name}</div>
          <div className={styles.cellWrapperBottom}>
            {convertUser(created_user)}
          </div>
        </div>
      </td>
      <td className={styles.cell}>
        <div className={styles.cellWrapper}>
          <div className={styles.cellWrapperTop}>{account.name}</div>
          <div className={styles.cellWrapperBottom}>{terminal.name}</div>
        </div>
      </td>
      <td className={styles.cell}>
        <div className={styles.cellWrapper}>
          <StatusButton status={status} />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
