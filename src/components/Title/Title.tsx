import * as React from 'react';

import { StyledTitle } from './Title.styled';

export type TitleProps = {
  as: keyof JSX.IntrinsicElements;
  size: string;
  children: React.ReactNode;
};

const Title = ({ children, as = 'span', size }: TitleProps) => {
  return (
    <StyledTitle as={as} size={size}>
      {children}
    </StyledTitle>
  );
};

export default Title;
