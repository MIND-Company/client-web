export interface INotFinishedParking {
  carPlate: string;
  entryTime: Date;
  parkName: string;
}

export interface IFinishedParking extends INotFinishedParking {
  checkoutTime: Date;
  price: number;
}

export type IParking =
  | (INotFinishedParking & { isFinished: false })
  | (IFinishedParking & { isFinished: true });

export const isFinishedParking = (
  parking: IParking,
): parking is IFinishedParking & { isFinished: true } => {
  return parking.isFinished;
};

export const parkingModel = (
  plate: string,
  parkName: string,
  entryTime: Date,
  checkoutTime?: Date,
  price?: number,
): IParking => {
  console.log(checkoutTime, price);
  if (checkoutTime && price) {
    return {
      carPlate: plate,
      entryTime: entryTime,
      parkName: parkName,
      isFinished: true,
      checkoutTime: checkoutTime,
      price: price,
    };
  }

  return {
    carPlate: plate,
    entryTime: entryTime,
    parkName: parkName,
    isFinished: false,
  };
};
