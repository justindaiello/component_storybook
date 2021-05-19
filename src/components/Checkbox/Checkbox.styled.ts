import styled from 'styled-components';

export const StyledCheckbox = styled.label`
  /* box-model */
  margin: 0;

  /* positioning */
  position: relative;
  display: block;

  /* typography */
  word-break: break-word;

  /* ******************************* */
  /* Default Checkbox Input (hidden) */
  /* ******************************* */

  > input {
    /* positioning */
    position: absolute;
    left: -9999px;

    /* visual */
    opacity: 0;
  }

  /* ************* */
  /* FA Check Icon */
  /* ************* */

  > input ~ svg {
    /* box-model */
    height: 1rem;

    /* positioning */
    position: absolute;
    top: 4px;
    left: 5px;
    z-index: 1;

    /* visual */
    cursor: pointer;
    color: ${({ theme }) => theme.white};
    transition: transform 0.2s, opacity 0.2s;
  }

  > input:not(:checked) ~ svg {
    opacity: 0;
    transform: scale(0);
  }

  > input:checked ~ svg {
    opacity: 1;
    transform: scale(1);
    cursor: pointer;
  }

  /* ***************************** */
  /* Custom Checkbox (not checked) */
  /* ***************************** */

  > input ~ label {
    position: relative;
    padding: 0.2rem 0 0 2rem;
    cursor: pointer;
    transition: background 0.2s;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1.5rem;
      height: 1.5rem;
      border: ${({ theme }) => `1px solid ${theme.gray200}`};
      background: white;
      border-radius: 0.2rem;
    }
  }

  /* ************************* */
  /* Custom Checkbox (checked) */
  /* ************************* */

  > input:checked:not(:disabled) ~ label {
    &:before {
      border: none;
      background: ${({ theme }) => theme.primary};
    }
  }

  /* ************************** */
  /* Custom Checkbox (disabled) */
  /* ************************** */

  > input:disabled:not(:checked) ~ label {
    &:before {
      background-color: ${({ theme }) => theme.gray100};
    }
  }

  > input:disabled:not(:checked) ~ label,
  > input:disabled:not(:checked) ~ svg,
  > input:disabled:checked ~ svg,
  > input:disabled:checked ~ label {
    color: ${({ theme }) => theme.gray300};
  }
`;
