import React, { FC, useEffect, useState } from 'react';
import styles from './StatusButton.module.scss';

type TProps = { status: string };
type TState = { text: string; color: string };

const StatusButton: FC<TProps> = ({ status }) => {
  const [optionsButton, setOptionsButton] = useState<TState>({
    text: 'Новое',
    color: '#b94a48',
  });

  useEffect(() => {
    if (status !== 'new') {
      status === 'declined' &&
        setOptionsButton({
          text: 'Отменено',
          color: '#252525',
        });

      status === 'started' &&
        setOptionsButton({
          text: 'Выполняется',
          color: '#3276b1',
        });

      status === 'assigned_to' &&
        setOptionsButton({
          text: 'Назначено',
          color: '#c79121',
        });
    }
  }, []);

  return (
    <button className={styles.button} style={{ background: optionsButton.color }}>{optionsButton.text}</button>
  );
};

export default StatusButton;
