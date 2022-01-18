import styled from 'styled-components/macro';

type TextareaStyleProps = {
  readonly error: boolean;
};

const Textarea = styled.textarea<TextareaStyleProps>`
  /* box-model */
  width: 100%;
  border: 1px solid;
  padding: 0.6rem 0.375rem 0.375rem;
  border-color: ${({ theme, error }) => (error ? theme.danger : theme.gray300)};
  border-radius: ${({ theme }) => theme.borderRadiusSm};

  /* positioning */
  display: block;

  /* typography */
  font-weight: normal;
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSizeLg};

  /* visual */
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.background};
  transition: border-color 0.15s ease-in-out;

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
    background: ${({ theme }) => theme.background};
    /* iOS fix for unreadable disabled content; */
    opacity: 1;
  }
`;

export default Textarea;
