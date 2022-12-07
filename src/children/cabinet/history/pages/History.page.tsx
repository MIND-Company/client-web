import React from 'react';
import { useHttp } from '@ermolaev/mind-ui';

export const HistoryPage = () => {
  const http = useHttp();

  const getParkings = async () => {
    const response = await http({ method: 'GET', url: '/api/parkings/' });
    console.log(response);
  };

  getParkings();

  return <div>Hello</div>;
};
