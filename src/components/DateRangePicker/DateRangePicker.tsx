import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import TextField, { TextFieldProps } from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import { loadingCovidGlobalData } from '../../store/thunk/thunk';
import { saveStorage, getStorage, formatDate } from "../../helper/helper";

export const BasicDateRangePicker = () => {
  const [value, setValue] = useState<any>([null, null]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const isValidDate = formatDate(value).some((item: string) => item === 'Invalid date');

    if(!isValidDate) {
      dispatch(loadingCovidGlobalData(formatDate(value)));
    }
  }, [dispatch, value]);

  const handleChange = (val: any) => {
    navigate(`${formatDate(val)}`);

    setValue(val);
    saveStorage(val);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From"
        endText="To"
        value={value.every((item: any) => item === null) ? getStorage() : value}
        onChange={newValue => handleChange(newValue)}
        renderInput={(
         startProps: JSX.IntrinsicAttributes & TextFieldProps,
         endProps: JSX.IntrinsicAttributes & TextFieldProps
        ) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
       />
    </LocalizationProvider>
  );
}
