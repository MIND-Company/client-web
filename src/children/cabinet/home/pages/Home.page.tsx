import React, { FC } from 'react';
import { InfoWidget, LoaderWrapper, ParkingWidget } from '@ermolaev/mind-ui';
import { RulesComponent } from '../components/Rules.component';
import classes from './Home.page.styles.module.css';
import { IParking } from '../../models/parking.model';

interface IHomePageProps {
  lastParking: IParking | null;
}

export const HomePage: FC<IHomePageProps> = ({ lastParking }) => {
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

        {!lastParking && 'У вас еще нет паркингов'}
        <div className={classes.cardWrapper}>
          <InfoWidget
            size={'mini'}
            leftSideText="Ваша карта:"
            rightSideText="8480"
          />
          <LoaderWrapper
            isLoading={false}
            elementSizes={{ widthCss: '434px', heightCss: '302px' }}
          >
            <InfoWidget
              size="mini"
              leftSideText="Ваш номер:"
              rightSideText={'sdasdas'}
            />
          </LoaderWrapper>
        </div>
      </div>
    </div>
  );
};
