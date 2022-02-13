import React from 'react';

import { ITitle } from "../../interface/interface";

export const Title: React.FC<ITitle> = ({ classAttr, text }) => {

  return (
    <h2 className={`${classAttr}`}>{text}</h2>
  );
}
