import React from 'react';
import { useSelector } from "react-redux";

import * as selectors from '../../store/store';
import { BasicDateRangePicker } from "../DateRangePicker/DateRangePicker";
import { GlobalStatistics } from "../GlobalStatistics/GlobalStatistics";
import {Title} from "../Title/Title";
import { IState } from "../../interface/interface";

export const Home = () => {
  const worldStatistic = useSelector((state: IState) => selectors.worldStatistic(state));

  return (
    <div className="container">
      <Title classAttr="title" text="Global statistics" />

      <BasicDateRangePicker />

      <GlobalStatistics data={worldStatistic} />
    </div>
  );
}
