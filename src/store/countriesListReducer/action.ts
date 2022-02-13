import { ICountriesLIst } from "../../interface/interface";

export const GET_COUNTRIES = 'GET_COUNTRIES';

export const getCountries = (countries: ICountriesLIst[]) => ({
  type: GET_COUNTRIES,
  countries,
});
