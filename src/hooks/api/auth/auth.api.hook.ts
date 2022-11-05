import { useHttp, ContentType } from '../../http';
import { useEndpoint } from '../endpoint.hook';
import type { SendConfirmationCodeRequestDto } from './dto';

const req = useHttp();
const endpoint = useEndpoint();

const sendCode = async (
  body: SendConfirmationCodeRequestDto,
  apiVersion: string,
) =>
  req<SendConfirmationCodeRequestDto, void>({
    method: 'POST',
    url: `${endpoint}/api/${apiVersion}/auth/send-code`,
    headers: {
      contentType: ContentType.JSON,
    },
    body,
  });

export const useAuthApi = () => ({
  sendCode: async (body: SendConfirmationCodeRequestDto, appVersion?: string) =>
    sendCode(body, appVersion ?? 'v1'),
});
