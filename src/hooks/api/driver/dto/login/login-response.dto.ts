export type LoginResponseDto = {
  accessToken: string;
  refreshToken: string;
  id: string;
  transportPlates: string[];
  parkingProcessesIds: string[];
  currentParkingProcessId: string | undefined;
  personData?: {
    phone: string;
    email?: string;
  };
};
