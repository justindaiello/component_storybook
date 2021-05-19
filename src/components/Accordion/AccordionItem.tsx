import * as React from 'react';

import {
  StyledItem,
  StyledButton,
  StyledChevron,
  StyledItemWrapper,
} from './Accordion.styled';

export type ItemProps = {
  isOpen?: boolean,
  label?: string,
  handleClick: Function
}

const AccordionItem: React.FC<ItemProps> = ({ label, isOpen, children, handleClick }) => {
  return (
    <StyledItemWrapper>
      <StyledButton onClick={() => handleClick(label)}>
        <span>{label}</span>
        <StyledChevron
          size="lg"
          title="expand"
          isOpen={isOpen}
          handleClick={() => handleClick(label)}
          icon={['fas', 'chevron-down']}
        />
      </StyledButton>
      {isOpen && <StyledItem>{children}</StyledItem>}
    </StyledItemWrapper>
  )
}

export default AccordionItem