import { Map, Placemark, YMaps } from 'react-yandex-maps';
import React, { FC } from 'react';
import classes from './MiniMap.styles.module.css';
import { Loader } from '@ermolaev/mind-ui';

export interface IMiniMapProps {
  lat: number;
  long: number;
  zoom?: number;
  width?: string;
  height?: string;
  arr: { lan: number; long: number }[];
}

export const MiniMap: FC<IMiniMapProps> = ({
  lat,
  long,
  zoom = 15,
  width = '500px',
  height = '200px',
  arr = [],
}) => {
  if (!lat || !long) {
    return <Loader />;
  }

  return (
    <YMaps>
      <div>
        <Map
          style={{
            width,
            height,
          }}
          className={classes.container}
          state={{
            center: [lat, long],
            zoom,
          }}
        >
          {arr.map((el, index) => {
            return <Placemark key={index} geometry={[el.lan, el.long]} />;
          })}
        </Map>
      </div>
    </YMaps>
  );
};
