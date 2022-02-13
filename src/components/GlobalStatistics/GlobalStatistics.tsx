import React from 'react';
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

export const GlobalStatistics = ({ data }: any) => {

  return (
    <div className="chart-container">
      {
        !data.length ? (
          <p>Please get data!!!</p>
        ) : (
          <ResponsiveContainer width="90%" aspect={4}>
            <BarChart
              width={500}
              height={300}
              data={data}
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
              <Bar dataKey="NewConfirmed" fill="#8884d8" />
              <Bar dataKey="NewDeaths" fill="#82ca9d" />
              <Bar dataKey="NewRecovered" fill="#84559d" />
              <Bar dataKey="TotalConfirmed" fill="#881111" />
              <Bar dataKey="TotalDeaths" fill="#0346fe" />
              <Bar dataKey="TotalRecovered" fill="#fbbd01" />
            </BarChart>
          </ResponsiveContainer>
        )
      }
    </div>
  );
}
