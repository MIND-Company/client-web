import { IFinishedParking, IParking } from '../../../models/parking.model';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStorage } from '@ermolaev/mind-ui';
import classes from './ParkingDetailed.styles.module.css';
import { useTimeFormatter } from '../../../../../hooks/time-formatter.hook';

interface IParkingDetailedProps {
  paring: IFinishedParking;
}

export const ParkingDetailedContainer: FC = () => {
  const storage = useStorage();
  const [parkings, setParkings] = useState<IFinishedParking[]>([]);
  const { id } = useParams();

  useEffect(() => {
    setParkings(JSON.parse(storage.read('parkings') ?? '{}'));

    return () => storage.write('parkings', null as any);
  }, []);

  if (!parkings || !parkings[id as any as number]) {
    return <div>Информация о паркинге отсутствует</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <div>Номер ТС: {parkings[id as any as number].carPlate}</div>
        <div>
          Время въезда:{' '}
          {useTimeFormatter(parkings[id as any as number].entryTime)}
        </div>
        {parkings[id as any as number].checkoutTime && (
          <div>
            Время выезда:{' '}
            {useTimeFormatter(parkings[id as any as number].checkoutTime)}
          </div>
        )}
        {parkings[id as any as number].price && (
          <div>Сумма: {parkings[id as any as number].price}₽</div>
        )}
      </div>
    </div>
  );
};
