import { SET_COUNTRY } from './action';

export const countryStatistic = (state: any) => state;

const countryStatisticReducer = (countryStatistic = [], action: any) => {
  switch (action.type) {
    case SET_COUNTRY:

      return action.data;

    default:
      return countryStatistic;
  }
}

export default countryStatisticReducer;
