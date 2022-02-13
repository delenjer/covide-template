import {ICountriesLIst, IGlobalData} from "../../interface/interface";
import { getWorldWip, getCountriesList, getCountryStatistic } from '../../api/api';
import { getCovidGlobalData } from '../worldStatisticDataReducer/action';
import { getCountries } from '../countriesListReducer/action';
import { setCountry } from "../countryStatisticReducer/action";

export const loadingCovidGlobalData = (formatDate:string[]) => {
  return (dispatch: (arg: { type: string }) => void) => {
    getWorldWip(formatDate).then((data: IGlobalData[]) => dispatch(getCovidGlobalData(data)));
  }
}

export const loadingCountries = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    getCountriesList().then((data: ICountriesLIst[]) => dispatch(getCountries(data)))
      .catch(() => dispatch(getCountries([])));
  }
}

export const loadingCountryStatistic = (region: string | null) => {
  return (dispatch: (arg: { type: string }) => void) => {
    getCountryStatistic(region).then((data: any[]) => dispatch(setCountry(data)))
      .catch(() => dispatch(setCountry([])));
  }
}