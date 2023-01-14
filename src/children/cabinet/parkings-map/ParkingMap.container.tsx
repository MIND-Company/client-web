import React, { useEffect, useState } from 'react';
import { useParks } from '../../../hooks/parks.hook';
import { MiniMap } from '../../../components/Maps/MiniMap/MiniMap.component';
import classes from './ParkingMap.styles.module.css';

export const ParkingMapContainer = () => {
  const parksApi = useParks();
  const [coords, setCoords] = useState<{ long: number; lan: number }[]>();

  useEffect(() => {
    parksApi().then((res) => {
      setCoords(res);
    });
  }, []);

  if (!coords) {
    return <div></div>;
  }

  return (
    <div className={classes.container}>
      <MiniMap
        lat={coords[0].lan}
        long={coords[0].long}
        zoom={12}
        width={'900px'}
        height={'500px'}
        arr={coords}
      />
    </div>
  );
};
