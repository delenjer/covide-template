import { GET_COUNTRIES } from './action';
import { ICountriesLIst } from "../../interface/interface";

export const countries = (state: ICountriesLIst) => state;

const countriesListReducer = (countries = [], action: any) => {
  switch (action.type) {
    case GET_COUNTRIES:

      return action.countries;

    default:
      return countries;
  }
}

export default countriesListReducer;
