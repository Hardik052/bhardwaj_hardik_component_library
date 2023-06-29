import React, { LabelHTMLAttributes } from 'react';
import './Label.css';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const label:React.FC<LabelProps> = ({ children, ...rest }) => (
  <label >
    {children}
  </label>
);

export default label;