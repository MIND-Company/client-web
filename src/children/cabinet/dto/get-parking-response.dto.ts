export interface IGetParkingsResponseDto {
  count: number;
  results: IGetParkingResponseDto[];
}

export interface IGetParkingResponseDto {
  calculated_price: number | null;
  car: string;
  checkout_time: string;
  entry_time: string;
  park: {
    description: string;
  };
}
