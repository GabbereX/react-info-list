import React, { FC } from 'react';
import styles from './ErrorReson.module.scss';

type TProps = { text: string };

const ErrorReson: FC<TProps> = ({ text }) => {
  return (
    <tr>
      <td colSpan={4} className={styles.error}>{text}</td>
    </tr>
  );
};

export default ErrorReson;
