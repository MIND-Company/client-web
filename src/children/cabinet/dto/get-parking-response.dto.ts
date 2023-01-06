export interface IGetParkingsResponseDto {
  count: number;
  results: IGetParkingResponseDto[];
}

export interface IGetParkingResponseDto {
  calculated_price: string;
  current_price: string;
  car: string;
  checkout_time_utc: string | null;
  entry_time_utc: string;
  park: {
    description: string;
  };
}
