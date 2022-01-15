import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCheckbox } from './Checkbox.styled';

export type CheckboxProps = {
  label: string;
  checked: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = ({ label, checked, handleChange, ...rest }: CheckboxProps) => {
  return (
    <StyledCheckbox>
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...rest}
      />
      <FontAwesomeIcon icon={['fas', 'check']} title="check" />
      <label htmlFor={label}>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
