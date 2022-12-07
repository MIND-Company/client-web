import { ContentType, isCorrectResponse, useHttp } from '@ermolaev/mind-ui';
import { useEndpoint } from '../../../../../hooks/endpoint.hook';

type LoginRequestDto = {
  phone: string;
  password: string;
};

type LoginResponseDto = {
  access: string;
  refresh: string;
};

export const useLogin = async (phone: string, password: string) => {
  const endpoint = useEndpoint();
  const http = useHttp();

  return http<LoginRequestDto, LoginResponseDto>({
    url: '/login/',
    method: 'POST',
    mode: 'cors',
    body: {
      phone,
      password,
    },
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      contentType: ContentType.JSON,
    },
  }).then((response) => {
    if (!isCorrectResponse(response)) {
      throw new Error();
    }

    return response;
  });
};
