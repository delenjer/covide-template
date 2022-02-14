import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Home } from "../../Home/Home";
import { CountryStatistics } from "../../CountryStatistics/CountryStatistics";
import { About } from "../../About/About";

export const NavRouters = () => {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="statistics-by-country/" element={<CountryStatistics />} />
      <Route path="about/" element={<About />} />
    </Routes>
  );
}
