import React from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '@ermolaev/mind-ui';

export const HomePage = () => {
  const location = useLocation();
  return <Loader />;
};
