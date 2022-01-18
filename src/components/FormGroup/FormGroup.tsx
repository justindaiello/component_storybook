import * as React from 'react';

import Input from '../Input';
import Textarea from '../Textarea/Textarea';
import { StyledInputWrapper, StyledLabel } from './FormGroup.styled';

export type FormGroupProps = {
  error: string;
  formConfig: FormConfig;
};

type FormConfig = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  disabled: boolean;
  placeholder: string;
  autoComplete?: string;
  onChange: (e?: React.ChangeEvent) => void;
};

const FormGroup = ({ formConfig, error }: FormGroupProps) => {
  const {
    id,
    name,
    value,
    disabled,
    placeholder,
    autoComplete,
    onChange,
  } = formConfig;

  function handleRenderInput(type: string) {
    switch (type) {
      case 'text': {
        return (
          <Input
            type="text"
            error={!!error}
            value={value}
            id={id}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-label={name}
          />
        );
      }
      case 'textarea': {
        return (
          <Textarea
            rows={5}
            error={!!error}
            value={value}
            id={id}
            disabled={disabled}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-label={name}
          />
        );
      }
    }
  }

  return (
    <StyledInputWrapper error={!!error}>
      <StyledLabel htmlFor={formConfig.name} error={!!error}>
        {formConfig.label}
      </StyledLabel>
      {handleRenderInput(formConfig.type)}
      <span>{error}</span>
    </StyledInputWrapper>
  );
};

export default FormGroup;
