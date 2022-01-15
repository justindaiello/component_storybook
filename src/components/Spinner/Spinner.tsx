import * as React from 'react';

import { StyledSpinner } from './Spinner.styled';

export type SpinnerProps = {
  large: boolean;
};

const Spinner = ({ large }: SpinnerProps) => {
  return (
    <StyledSpinner large={large}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </StyledSpinner>
  );
};

export default Spinner;
