import styled from 'styled-components';

import { PillProps, PillEnums } from './Pill';
import { ColorTypes } from '../../styles/theme';

/**
 * Parse variant type and return appropriate css block
 * @param {PillEnums} variant - variant enum
 * @returns {string}
 */

function parseVariant(variant: PillEnums, theme: ColorTypes): string {
  switch (variant) {
    case PillEnums.SECONDARY: {
      return theme.secondary;
    }
    case PillEnums.WARNING: {
      return theme.warning;
    }
    case PillEnums.DANGER: {
      return theme.danger;
    }
    default: {
      return theme.primary;
    }
  }
}

export const StyledPill = styled.div<PillProps>`
  /* positioning */
  display: inline-block;

  /* box-model */
  border-radius: 1rem;
  padding: 0.06rem 0.6rem;
  border: 1px solid
    ${({ variant, theme, outline }) =>
      outline ? parseVariant(variant, theme) : 'transparent'};

  /* typography */
  color: ${({ variant, theme, outline }) =>
    outline ? parseVariant(variant, theme) : theme.white};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: 500;

  /* visual */
  background: ${({ variant, theme, outline }) =>
    outline ? 'transparent' : parseVariant(variant, theme)};
`;
