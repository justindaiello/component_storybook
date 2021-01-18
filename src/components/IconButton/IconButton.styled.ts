import styled from 'styled-components';

import { ButtonProps } from './IconButton';

export const StyledIconButton = styled.button<ButtonProps>`
  /* box-model */
  border: none;

  /* visual */
  cursor: pointer;
  transition: color 0.2s;
  background: transparent;
  color: ${({ theme }) => theme.purple};

  svg {
    /* visual */
    fill: ${({ theme }) => theme.purple};
  }

  &:hover,
  &:active,
  &:focus {
    /* visual */
    color: ${({ theme }) => theme.pink};

    svg {
      /* visual */
      fill: ${({ theme }) => theme.pink};
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
