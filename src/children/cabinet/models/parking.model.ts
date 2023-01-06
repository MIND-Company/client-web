export interface INotFinishedParking {
  carPlate: string;
  entryTime: Date;
  parkName: string;
  price: number;
}

export interface IFinishedParking extends INotFinishedParking {
  checkoutTime: Date;
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
  price: number,
  checkoutTime?: Date,
): IParking => {
  if (checkoutTime) {
    return {
      carPlate: plate,
      entryTime: entryTime,
      parkName: parkName,
      isFinished: true,
      checkoutTime: checkoutTime,
      price,
    };
  }

  return {
    carPlate: plate,
    entryTime: entryTime,
    parkName: parkName,
    isFinished: false,
    price,
  };
};
