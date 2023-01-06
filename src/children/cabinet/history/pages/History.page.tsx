import React, { FC } from 'react';
import { ParkingWidget, useHttp } from '@ermolaev/mind-ui';
import { IParking } from '../../models/parking.model';
import classes from './History.page.styles.module.css';

export const HistoryPage: FC<{
  parkings: IParking[];
  toDetail: (id: string) => void;
}> = ({ parkings, toDetail }) => {
  return (
    <div className={classes.wrapper}>
      {parkings.map((parking: IParking, index) => {
        if (!parking.isFinished) {
          return;
        }

        return (
          <div className={classes.element} key={index}>
            <ParkingWidget
              size={'long'}
              price={parking.price}
              parkingName={parking.parkName}
              id={parking.price}
              date={parking.checkoutTime}
              onClick={() => toDetail(parking.parkName)}
            />
          </div>
        );
      })}
    </div>
  );
};
