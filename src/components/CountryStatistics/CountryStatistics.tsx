import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import * as selectors from '../../store/store';
import { IState } from "../../interface/interface";
import { loadingCountries } from "../../store/thunk/thunk";
import { loadState } from '../../store/cacheStorage/cacheStorage';
import {Title} from "../Title/Title";
import {CountriesAutocomplete} from "./CountriesAutocomplete/CountriesAutocomplete";
import { CountryStatisticChart } from "./CountryStatisticChart/CountryStatisticChart";

export const CountryStatistics = () => {
  const countries = useSelector((state: IState) => selectors.countries(state));
  const dispatch = useDispatch();
  const isCache = loadState();

  useEffect(() => {
    if(isCache && isCache.countries) {
      return;
    } else {
      dispatch(loadingCountries());
    }
  }, [dispatch]);

  return (
    <>
      <Title classAttr="title" text="Statistics by country"/>

      <div className="top-indent">
        <CountriesAutocomplete countries={countries} />
      </div>

      <CountryStatisticChart />
    </>
  );
}
