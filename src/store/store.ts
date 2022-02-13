import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { loadState, saveState } from "./cacheStorage/cacheStorage";
import { IState } from "../interface/interface";

import worldStatisticDataReducer, *as selectorsWorldStatistic from './worldStatisticDataReducer/index';
import countriesListReducer, *as selectorsCountries from './countriesListReducer/index';
import countryStatisticReducer, *as selectorsCountryStatistic from './countryStatisticReducer';

export const worldStatistic = (state: IState) => selectorsWorldStatistic.worldStatistic(state.worldStatistic);
export const countries = (state: IState) => selectorsCountries.countries(state.countries);
export const countryStatistic = (state: any) => selectorsCountryStatistic.countryStatistic(state.countryStatistic);

const persistedState = loadState();

const rootReducer = combineReducers({
  worldStatistic: worldStatisticDataReducer,
  countries: countriesListReducer,
  countryStatistic: countryStatisticReducer,
});

const store = createStore(rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    countries: store.getState().countries,
  });
});

export default store;