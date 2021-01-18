import styled from 'styled-components';

import { ButtonProps } from './IconButton';

export const StyledIconButton = styled.button<ButtonProps>`
  /* box-model */
  border: none;

  /* visual */
  cursor: pointer;
  transition: color 0.2s;
  background: transparent;
  color: ${({ theme }) => theme.primary};

  svg {
    /* visual */
    fill: ${({ theme }) => theme.primary};
  }

  &:hover,
  &:active,
  &:focus {
    /* visual */
    color: ${({ theme }) => theme.secondary};

    svg {
      /* visual */
      fill: ${({ theme }) => theme.secondary};
    }
  }

  &:disabled,
  &:disabled:hover {
    /* visual */
    opacity: 0.5;
    color: ${({ theme }) => theme.warning};
    cursor: not-allowed !important;

    /* box-model */
    box-shadow: none;
  }
`;
