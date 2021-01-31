import * as React from 'react';

import AccordionItem from './AccordionItem';

type OpenState = { [label: string]: boolean }

type ChildProps = {
  props: {
    label: string,
    children: React.ReactChild | ChildProps | ChildProps[]
  }
}

const Accordion: React.FC = ({ children }) => {
  console.log('[children]', children)
  const [open, setOpen] = React.useState<OpenState>({})

  function handleClick(label: string): void {
    let isOpen: boolean = Boolean(open[label]);

    setOpen({ [label]: !isOpen });
  }

  return (
    <React.Fragment>
      {React.Children.map(children, ({ props }: ChildProps) => (
        <AccordionItem
          key={props.label}
          isOpen={Boolean(open[props.label])}
          label={props.label}
          handleClick={handleClick}
        >
          {props.children}
        </AccordionItem>
      ))}
    </React.Fragment>
  )
}

export default Accordion;