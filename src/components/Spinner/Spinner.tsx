import * as React from 'react';

import { StyledSpinner } from './Spinner.styled';

export interface SpinnerProps {
  large: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ large }) => {
  return (
    <StyledSpinner large={large}>
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </StyledSpinner>
  )
}

export default Spinner