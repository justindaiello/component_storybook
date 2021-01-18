import styled, { keyframes } from 'styled-components';

import { SpinnerProps } from './Spinner';

// Animations for Spinner
const rotateMain = keyframes`
	100% {
    transform: rotate(360deg);
  }
`;

const rotateDot = keyframes`
  80%, 100% {
    transform: rotate(360deg)
  }
`;

const rotateBefore = keyframes`
  50% {
    transform: scale(0.4)
  }

  0%, 100% {
    transform: scale(1.0);
  }
`;

export const StyledSpinner = styled.div<SpinnerProps>`
  /* visual */
  animation: ${rotateMain} 2.5s infinite linear both;

  /* box-model */
  width: ${({ large }) => (large ? '100px' : '40px')};
  height: ${({ large }) => (large ? '100px' : '40px')};
  margin: 0 auto;

  /* positioning */
  position: relative;

  .dot {
    /* box-model */
    width: 100%;
    height: 100%;

    /* positioning */
    position: absolute;
    left: 0;
    top: 0;

    /* visual */
    animation: ${rotateDot} 2s infinite ease-in-out both;

    &:before {
      /* visual */
      content: '';
      animation: ${rotateBefore} 2s infinite ease-in-out both;
      background-color: ${({ theme }) => theme.primary};

      /* box-model */
      display: block;
      width: 25%;
      height: 25%;
      border-radius: 100%;
    }
  }

  /* Individual dots, animation delay enables the circling effect */
  .dot:nth-child(1) {
    animation-delay: -1.1s;
  }
  .dot:nth-child(2) {
    animation-delay: -1s;
  }
  .dot:nth-child(3) {
    animation-delay: -0.9s;
  }
  .dot:nth-child(4) {
    animation-delay: -0.8s;
  }
  .dot:nth-child(5) {
    animation-delay: -0.7s;
  }
  .dot:nth-child(6) {
    animation-delay: -0.6s;
  }
  .dot:nth-child(1):before {
    animation-delay: -1.1s;
  }
  .dot:nth-child(2):before {
    animation-delay: -1s;
  }
  .dot:nth-child(3):before {
    animation-delay: -0.9s;
  }
  .dot:nth-child(4):before {
    animation-delay: -0.8s;
  }
  .dot:nth-child(5):before {
    animation-delay: -0.7s;
  }
  .dot:nth-child(6):before {
    animation-delay: -0.6s;
  }
`;
