import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ICountries } from "../../../interface/interface";
import { loadingCountryStatistic } from "../../../store/thunk/thunk";

export const CountriesAutocomplete: React.FC<ICountries> = ({ countries }) => {
  const [value, setValue] = useState<string | null>('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingCountryStatistic(value));
  }, [value]);

  const handleChange = (val: string | null ) => {
    return countries.filter(country => country.Country === val ? setValue(country.Slug) : '');
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={(event: any, newValue: string | null) => {
        handleChange(newValue)
      }}
      options={countries.map((country: any) => country.Country)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Countries list" />}
    />
  );
}
