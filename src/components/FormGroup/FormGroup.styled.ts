import styled from 'styled-components';

type FormGroupStyleProps = {
  readonly error: boolean;
};

export const StyledInputWrapper = styled.div<FormGroupStyleProps>`
  /* box-model */
  margin-bottom: 1rem;

  /* positioning */
  position: relative;

  span {
    /* box-model */
    display: block;
    margin-top: 0.25rem;

    /* positioning */
    position: absolute;

    /* visual */
    color: ${({ theme }) => theme.danger};
    visibility: ${({ error }) => (error ? 'visible' : 'hidden')};

    /* typography */
    font-size: ${({ theme }) => theme.fontSizeSm};
  }
`;

export const StyledLabel = styled.label<FormGroupStyleProps>`
  /* box-model */
  margin-bottom: 0.5rem;

  /* typography */
  font-size: ${({ theme }) => theme.fontSizeMd};
  font-weight: 600;
  text-align: left;

  /* visual */
  color: ${({ error, theme }) => (error ? theme.danger : theme.black)};
`;
