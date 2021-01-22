import * as React from 'react';

import AccordionItem from './AccordionItem';

export type AccordionProps = {
  label: string
}

type OpenState = { [label: string]: boolean }

const Accordion: React.FC<AccordionProps> = ({ children, label }) => {
  const [open, setOpen] = React.useState<OpenState>({})

  function handleClick(label: string): void {
    let isOpen: boolean = Boolean(open[label]);

    setOpen({ [label]: !isOpen });
  }

  return (
    <React.Fragment>
      <AccordionItem
        key={label}
        isOpen={Boolean(open[label])}
        label={label}
        handleClick={handleClick}
      >
        {children}
      </AccordionItem>
    </React.Fragment>
  )
}

export default Accordion;