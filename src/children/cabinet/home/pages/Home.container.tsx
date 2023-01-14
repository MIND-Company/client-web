import { useParkings } from '../../hooks/parkings.hooks';
import React, { useEffect, useState } from 'react';
import { Loader, useUpgradedState } from '@ermolaev/mind-ui';
import { HomePage } from './Home.page';
import { IParking } from '../../models/parking.model';
import { useNavigate } from 'react-router-dom';
import { useCars } from '../../../../hooks/cars.hook';
import { Car } from '../../../../models/car';

export const HomeContainer = () => {
  const parking = useParkings();
  const carApi = useCars();
  const [car, setCar] = useState<Car | null>(null);
  const lastParkingState = useUpgradedState<IParking | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    parking(1)
      .then((res) => {
        lastParkingState.setValue(res[0]);
      })
      .catch(() => {
        navigate('/auth/login');
      });

    carApi()
      .then((c: Car[]) => {
        setCar(c[0] as Car);
      })
      .catch(() => {
        navigate('/auth/login');
      });
  }, []);

  if (lastParkingState.value && car?.number) {
    return (
      <HomePage lastParking={lastParkingState.value} carPlate={car?.number} />
    );
  }

  return <Loader />;
};
