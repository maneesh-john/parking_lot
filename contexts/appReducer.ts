import { State } from "../types/context";

export const initState: State = {
  parkingLots: {}
}

export function reducer(state: State, action: any){
  switch(action.type){

    case "CREATE_SLOTS":
      return {
        ...state,
        parkingLots: {
          ...state.parkingLots,
          ...action.payload
        }
      }

    case "REGISTER_SLOT":
      return {
        ...state,
        parkingLots: {
          ...state.parkingLots,
          [action.payload.slotId]: action.payload
        }
      }
    case "UPDATE_SLOTS":
      return {
        ...state,
        parkingLots: action.payload
      }

    default:
      return state;
  }
}