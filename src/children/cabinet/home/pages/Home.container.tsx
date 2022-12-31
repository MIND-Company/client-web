import { useParkings } from '../../hooks/parkings.hooks';
import React, { useEffect, useState } from 'react';
import { useUpgradedState } from '@ermolaev/mind-ui';
import { HomePage } from './Home.page';
import { IParking } from '../../models/parking.model';
import { useNavigate } from 'react-router-dom';

export const HomeContainer = () => {
  const parking = useParkings();
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
  }, []);

  return <HomePage lastParking={lastParkingState.value} />;
};
