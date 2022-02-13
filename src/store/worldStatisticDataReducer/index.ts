import { GET_GLOBAL_DATA } from './action';
import { IGlobalData } from "../../interface/interface";

export const worldStatistic = (state: IGlobalData) => state;

const worldStatisticDataReducer = (initialState = [], action: any) => {
  switch (action.type) {
    case GET_GLOBAL_DATA:

      return action.data;

    default:
      return initialState;
  }
}

export default worldStatisticDataReducer;
