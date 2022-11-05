import { ContentType, useHttp } from '../../http';
import { useEndpoint } from '../endpoint.hook';
import type { LoginRequestDto, LoginResponseDto } from './dto';

const req = useHttp();
const endpoint = useEndpoint();

const login = async (body: LoginRequestDto, apiVersion: string) =>
  req<LoginRequestDto, LoginResponseDto>({
    method: 'POST',
    url: `${endpoint}/api/${apiVersion}/driver-person/login`,
    headers: {
      contentType: ContentType.JSON,
    },
    body,
  });

export const useDriverApi = () => ({
  login: async (body: LoginRequestDto, apiVersion?: string) =>
    login(body, apiVersion ?? 'v1'),
});
