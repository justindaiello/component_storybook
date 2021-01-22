import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ItemProps } from './AccordionItem';

export const StyledItemWrapper = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.gray200}`};
  padding: 1.5rem;

  &:first-of-type {
    border-top: ${({ theme }) => `1px solid ${theme.gray200}`};
  }
`;

export const StyledChevron = styled(FontAwesomeIcon)<ItemProps>`
  color: ${({ theme }) => theme.primary};
  transition: 0.2s linear all;
  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
`;

/* Full width button for better accessibility */
export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizeLg};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;
