import { useAuthHttp } from './auth-http.hook';

export const useParks = () => {
  const http = useAuthHttp();
  return (): Promise<{ lan: number; long: number }[]> => {
    return http({
      method: 'GET',
      url: '/api/all-parks/',
    }).then((res: { longitude: string; latitude: string }[]) => {
      return res.map((el) => {
        return {
          lan: parseFloat(el.latitude),
          long: parseFloat(el.longitude),
        };
      });
    });
  };
};
