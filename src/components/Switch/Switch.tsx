import * as React from 'react';

import { StyledSwitch } from './Switch.styled';

const Switch = () => {
  const [active, setActive] = React.useState(false);

  return (
    <StyledSwitch
      onClick={() => setActive((prevState) => !prevState)}
      active={active}
    >
      <span />
    </StyledSwitch>
  );
};

export default Switch;
