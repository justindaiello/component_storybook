import { Story, Meta } from '@storybook/react/types-6-0';

import RadioButtonGroup, {
  RadioGroupProps,
} from '../components/RadioButtonGroup';

export default {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
} as Meta;

const radioOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
  { label: 'Yearly', value: 'yearly' },
];

const Template: Story<RadioGroupProps> = (args: any) => (
  <RadioButtonGroup {...args} />
);

export const PrimaryRadioButtonGroup = Template.bind({});
PrimaryRadioButtonGroup.args = {
  options: radioOptions,
  preselectedOption: radioOptions[0].value,
};
