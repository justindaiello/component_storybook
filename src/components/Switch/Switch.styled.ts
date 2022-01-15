import styled, { css } from 'styled-components';

type SwitchStyleProps = {
  readonly active: boolean;
};

/* ***************************** */
/* Active circle (active state) */
/* ***************************** */

const activeStyles = css`
  /* positioning */
  transform: translateX(20px);
  bottom: 4px;

  /* visual */
  background: ${({ theme }) => theme.white};

  /* box-model */
  height: 17px;
  width: 17px;
`;

export const StyledSwitch = styled.button<SwitchStyleProps>`
  /* positioning */
  position: relative;
  display: inline-block;
  z-index: 99;

  /* box-model */
  width: 45px;
  height: 25px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusMd};
  box-shadow: ${({ theme }) => theme.lightBoxShadow};

  /* visual */
  background: ${({ theme, active }) => (active ? theme.primary : theme.white)};
  cursor: pointer;

  &:after {
    /* visual */
    content: '';
    background: transparent;

    /* positioning */
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;

    /* box-model */
    border: 2px solid transparent;
    border-radius: 19px;
  }

  &:focus {
    /* box-model */
    outline: none;

    &:after {
      /* box-model */
      border-color: ${({ theme }) => theme.primary};
    }
  }

  /* ******************************* */
  /* Default circle (inactive state) */
  /* ******************************* */

  span {
    /* positioning */
    position: absolute;
    left: 3px;
    bottom: 3px;

    /* visual */
    cursor: pointer;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;

    /* box-model */
    height: 19px;
    width: 19px;
    border-radius: 100%;

    ${({ active }) => active && activeStyles}
  }

  @media (max-width: 600px) {
    /* positioning */
    right: 2.75rem;
  }
`;
