import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  InfoWidget,
  Loader,
  LoaderWrapper,
  ParkingWidget,
} from '@ermolaev/mind-ui';
import { RulesComponent } from '../components/Rules.component';
import classes from './Home.page.styles.module.css';

export const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.topWidgetWrapper}>
        <RulesComponent />
      </div>
      <div className={classes.bottomWidgetsWrapper}>
        <ParkingWidget
          size={'mini'}
          price={200}
          id={'sdad'}
          onClick={() => {}}
        />
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
