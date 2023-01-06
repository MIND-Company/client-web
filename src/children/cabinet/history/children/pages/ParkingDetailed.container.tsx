import { IFinishedParking } from '../../../models/parking.model';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface IParkingDetailedProps {
  paring: IFinishedParking;
}

export const ParkingDetailedContainer: FC = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
