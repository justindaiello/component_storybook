import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ItemProps } from './AccordionItem';

export const StyledItemWrapper = styled.div`
  /* box-model */
  border-bottom: ${({ theme }) => `1px solid ${theme.primary}`};
  padding: 1.5rem;

  &:first-of-type {
    /* box-model */
    border-top: ${({ theme }) => `1px solid ${theme.primary}`};
  }
`;

export const StyledChevron = styled(FontAwesomeIcon)<ItemProps>`
  /* visual */
  color: ${({ theme }) => theme.primary};
  transition: 0.2s linear all;
  transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
`;

/* Full width button for better accessibility */
export const StyledButton = styled.button`
  /* typography */
  font-size: ${({ theme }) => theme.fontSizeLg};

  /* positioning */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* box-model */
  width: 100%;
  padding: 0;

  /* visual */
  background: transparent;
  border: none;
`;
