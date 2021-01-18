import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledIconButton } from './IconButton.styled'
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
  label?: string;
  icon?: IconName;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, icon, label, ...rest }) => {
  return (
    <StyledIconButton aria-label={label} onClick={onClick} {...rest}>
      <FontAwesomeIcon icon={['fas', icon || 'times']} />
    </StyledIconButton>
  );
}

export default ButtonComponent;
