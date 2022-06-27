import React, { FC, useEffect, useState } from 'react';
// import styles from './FullItem.module.scss';
import { useParams } from 'react-router-dom';
import { IData } from '../../../../interfaces/IData';
import useFetch from '../../../../hooks/useFetch';

const FullItem: FC = () => {
  const { data } = useFetch();
  const [itemData, setItemData] = useState<IData | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.id && data.length) {
      const newData = data.filter(item => params.id && item.id === +params.id);
      setItemData(newData[0]);
    }
  }, [data]);

  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

  return (
    <div className={'container'} style={{textAlign: 'center'}}>
      {itemData ? (
        <div>{JSON.stringify(itemData)}</div>
      ) : (
        <div>Такого задания не существует</div>
      )}
    </div>
  );
};

export default FullItem;
