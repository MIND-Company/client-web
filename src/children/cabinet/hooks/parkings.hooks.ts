import { ContentType, isCorrectResponse, useHttp } from '@ermolaev/mind-ui';
import { useAuthHttp } from '../../../hooks/auth-http.hook';
import { IGetParkingsResponseDto } from '../dto/get-parking-response.dto';
import { IParking, parkingModel } from '../models/parking.model';

export const useParkings = () => {
  const http = useAuthHttp();

  return async (limit: number): Promise<IParking[]> => {
    return http<never, IGetParkingsResponseDto>({
      method: 'GET',
      url: `/api/parkings/?limit=${limit}`,
      headers: {
        contentType: ContentType.JSON,
      },
    }).then((response: IGetParkingsResponseDto) => {
      if (!isCorrectResponse(response)) {
        return null;
      }

      return response.results.map((dto) => {
        return parkingModel(
          dto.car,
          dto.park.description,
          new Date(dto.entry_time),
          new Date(dto.checkout_time),
          dto.calculated_price ?? undefined,
        );
      });
    });
  };
};
