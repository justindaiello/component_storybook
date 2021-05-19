import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as Meta

/**
 * Dummy onChange handler
 */
function handleChange(): void { }

const Template: Story = (args: any) => <Checkbox {...args} />

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  label: 'Primary Checkbox',
  handleChange
}

export const PrimaryCheckboxDisabled = Template.bind({});
PrimaryCheckboxDisabled.args = {
  label: 'Disabled Checkbox',
  handleChange,
  disabled: true
}