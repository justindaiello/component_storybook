import * as React from 'react';

import { StyledPill } from './Pill.styled';

export enum PillEnums {
  PRIMARY,
  SECONDARY,
  WARNING,
  DANGER
}

export type PillProps = {
  variant: PillEnums,
  outline?: boolean
  children: React.ReactNode
}


const Pill: React.FC<PillProps> = ({ children, variant, outline }) => {
  return (
    <StyledPill variant={variant} outline={outline}>
      <span>{children}</span>
    </StyledPill>
  )
}

export default Pill;