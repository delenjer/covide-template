import React from 'react';
import { useSelector } from "react-redux";
import * as selectors from '../../../store/store';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export const CountryStatisticChart = () => {
  const countryStatistic = useSelector(state => selectors.countryStatistic(state));

  return (
    <div className="chart-container">
      {
        !countryStatistic.length ? (
          <p className="alert-text">Please set country!!!</p>
        ) : (
          <ResponsiveContainer width="90%" aspect={4}>
            <BarChart
              width={500}
              height={300}
              data={countryStatistic}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Active" fill="#8884d8" />
              <Bar dataKey="Recovered" fill="#fb9121" />
            </BarChart>
          </ResponsiveContainer>
        )
      }
    </div>
  );
}
