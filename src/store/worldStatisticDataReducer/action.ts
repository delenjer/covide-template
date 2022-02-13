import { IGlobalData } from "../../interface/interface";

export const GET_GLOBAL_DATA = 'GET_GLOBAL_DATA';

export const getCovidGlobalData = (data: IGlobalData[]) => ({
  type: GET_GLOBAL_DATA,
  data,
});
