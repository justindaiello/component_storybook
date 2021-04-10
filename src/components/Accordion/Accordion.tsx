import * as React from 'react';

import AccordionItem from './AccordionItem';

type OpenState = { [label: string]: boolean }

export type AccordionProps = {
  children: JSX.Element[]
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [open, setOpen] = React.useState<OpenState>({})

  function handleClick(label: string): void {
    let isOpen: boolean = Boolean(open[label]);

    setOpen({ [label]: !isOpen });
  }

  return (
    <React.Fragment>
      {React.Children.map(children, child => (
        <AccordionItem
          key={child.props["data-label"]}
          isOpen={Boolean(open[child.props["data-label"]])}
          label={child.props["data-label"]}
          handleClick={handleClick}
        >
          {child.props.children}
        </AccordionItem>
      ))
      }
    </React.Fragment >
  )
}

export default Accordion;