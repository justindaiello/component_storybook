import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion, { AccordionProps } from '../components/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta

const Template: Story<AccordionProps> = () => (
  <Accordion>
    <div data-label="Section One" className="accordion-child">
      Hi
    </div>
    <div data-label="Section 2">
      Hello
    </div>
    <div data-label="Section 3">
      Sup
    </div>
  </Accordion>
)

export const PrimaryAccordion = Template.bind({})