export interface IState {
  worldStatistic: IGlobalData;
  countries: ICountriesLIst;
}

export interface ITitle {
  classAttr: string;
  text: string
}

export interface IGlobalData {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IData {
  data: IGlobalData
}

export interface ICountriesLIst {
  length: number;
  Country: string;
  Slug: string;
  ISO2: string;
  map(element: (country: any) => JSX.Element): any;
  filter(param: (country: any) => void): any;
}

export interface ICountries {
  countries: ICountriesLIst;
}
