import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import { StyledItemWrapper, StyledButton, StyledChevron } from './Accordion.styled';

export type ItemProps = {
  isOpen?: boolean,
  label?: string,
  handleClick?: Function,
}

const AccordionItem: React.FC<ItemProps> = ({ label, isOpen, children }) => {
  return (
    <StyledItemWrapper>
      <StyledButton>
        <span>{label}</span>
        <StyledChevron
          size="lg"
          title="expand"
          isOpen={isOpen}
          icon={['fas', 'chevron-down']}
        />
      </StyledButton>
      {isOpen && <span>{children}</span>}
    </StyledItemWrapper>
  )
}

export default AccordionItem