import styled from 'styled-components';

type InputStyleProps = {
  readonly error: boolean;
};

const Input = styled.input<InputStyleProps>`
  /* box-model */
  width: 100%;
  height: 40px;
  padding: 0.375rem;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadiusSm};
  border-color: ${({ theme, error }) => (error ? theme.danger : theme.gray300)};

  /* positioning */
  display: block;

  /* visual */
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
  transition: border-color 0.2s ease-in-out;

  /* typography */
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizeLg};

  &::placeholder {
    /* visual */
    color: ${({ theme }) => theme.gray300};
    opacity: 1; /* Override Firefox's unusual default opacity; */
  }

  &:focus {
    /* box-model */
    border-color: ${({ theme }) => theme.gray200};
    outline: 0;
  }

  &:disabled,
  &[readonly] {
    /* visual */
    cursor: not-allowed !important;
    background-color: ${({ theme }) => theme.gray100};
    /* iOS fix for unreadable disabled content; */
    opacity: 1;
  }
`;

export default Input;
