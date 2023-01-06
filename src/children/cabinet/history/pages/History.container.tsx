import { HistoryPage } from './History.page';
import { useParkings } from '../../hooks/parkings.hooks';
import React, { useEffect } from 'react';
import { useUpgradedState } from '@ermolaev/mind-ui';
import { IParking } from '../../models/parking.model';
import { useNavigate } from 'react-router-dom';

export const HistoryContainer = () => {
  const parkingsApi = useParkings();
  const parkings = useUpgradedState<IParking[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    parkingsApi(20)
      .then((res) => {
        parkings.setValue(res);
      })
      .catch(() => {
        navigate('/auth/login');
      });
  }, []);

  return <HistoryPage parkings={parkings.value} toDetail={() => {}} />;
};
