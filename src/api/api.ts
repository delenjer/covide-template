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
  return fetch(`${BASE_URL}country/${region}/status/confirmed/live?from=2022-02-02T00:00:00Z&to=2022-02-05T00:00:00Z`)
    .then(response => response.json())
    .then(data => data);
}

