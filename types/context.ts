import { Dispatch } from "react";

export interface Slot {
  slotId: string;
  createdAt: Date;
  vehicleRegNo: string;
}

export interface ParkingLot {
  [id: string]: Slot;
}

export interface State {
  parkingLots: ParkingLot;
}

export interface Context {
  state: State;
  dispatch: Dispatch<any>;
}