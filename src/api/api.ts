const BASE_URL = 'https://api.covid19api.com/';

export const getWorldWip = (formatDate:string[]) => {
  return fetch(`${BASE_URL}world?from=${formatDate[0]}&to=${formatDate[1]}`)
    .then(response => response.json())
    .then(data => data);
}

export const getCountriesList = () => {
  return fetch('https://api.covid19api.com/countries')
    .then(response => response.json())
    .then(data => data);
}

export const getCountryStatistic = (region: string | null) => {
  return fetch(`${BASE_URL}country/${region}`)
    .then(response => response.json())
    .then(data => data);
}

