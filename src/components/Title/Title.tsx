import * as React from 'react';

import { StyledTitle } from './Title.styled'

export type TitleProps = {
  as: keyof JSX.IntrinsicElements;
  size: string;
  children: string | object;
}

const Title: React.FC<TitleProps> = ({ children, as = "span", size }) => {
  return (
    <StyledTitle as={as} size={size}>
      {children}
    </StyledTitle>
  )
}

export default Title;