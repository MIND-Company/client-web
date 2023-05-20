import React, { FC } from 'react';
import { InfoWidget, LoaderWrapper, ParkingWidget } from '@ermolaev/mind-ui';
import { RulesComponent } from '../components/Rules.component';
import classes from './Home.page.styles.module.css';
import { IParking } from '../../models/parking.model';

interface IHomePageProps {
  lastParking: IParking | null;
  carPlate: string | null;
}

export const HomePage: FC<IHomePageProps> = ({ lastParking, carPlate }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.topWidgetWrapper}>
        <RulesComponent />
      </div>
      <div className={classes.bottomWidgetsWrapper}>
        {lastParking && lastParking.isFinished && (
          <ParkingWidget
            size={'mini'}
            price={lastParking.price}
            id={lastParking.parkName}
            date={lastParking.entryTime}
            parkingName={lastParking.parkName}
            onClick={() => {}}
          />
        )}

        {lastParking && !lastParking.isFinished && (
          <ParkingWidget
            size={'mini'}
            price={lastParking.price}
            id={lastParking.parkName}
            onClick={() => {}}
          />
        )}

        {!lastParking && (
          <InfoWidget
            size={'mini'}
            leftSideText={'У вас еще нет паркингов'}
            rightSideText={''}
          />
        )}
        <div className={classes.cardWrapper}>
          <InfoWidget
            size={'mini'}
            leftSideText="Ваша карта:"
            rightSideText="8480"
          />
          {carPlate && (
            <LoaderWrapper
              isLoading={false}
              elementSizes={{ widthCss: '434px', heightCss: '302px' }}
            >
              <InfoWidget
                size="mini"
                leftSideText="Ваш номер:"
                rightSideText={carPlate}
              />
            </LoaderWrapper>
          )}
        </div>
      </div>
    </div>
  );
};
