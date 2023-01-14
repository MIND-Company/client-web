import { useAuthHttp } from './auth-http.hook';
import { Car } from '../models/car';

export const useCars = () => {
  const http = useAuthHttp();
  return () =>
    http({
      method: 'GET',
      url: '/api/cars/',
    });
};
