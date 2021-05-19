import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps, ButtonEnums } from '../components/Button';

/**
 * Placeholder click handler
 */
function handleClick(): void {
  return console.log('You clicked me, yay')
}

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args: any) => <Button {...args} />

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: 'Primary Button',
  variant: ButtonEnums.PRIMARY,
  onClick: handleClick
}

export const PrimaryButtonSmall = Template.bind({});
PrimaryButtonSmall.args = {
  children: 'Primary Small',
  variant: ButtonEnums.PRIMARY,
  onClick: handleClick,
  small: true
}

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  children: 'Primary Disabled',
  variant: ButtonEnums.PRIMARY,
  onClick: handleClick,
  disabled: true
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary Button',
  variant: ButtonEnums.SECONDARY,
  onClick: handleClick
}

export const SecondaryButtonSmall = Template.bind({});
SecondaryButtonSmall.args = {
  children: 'Secondary Small',
  variant: ButtonEnums.SECONDARY,
  onClick: handleClick,
  small: true
}

export const SecondaryButtonDisabled = Template.bind({});
SecondaryButtonDisabled.args = {
  children: 'Secondary Disabled',
  variant: ButtonEnums.SECONDARY,
  onClick: handleClick,
  disabled: true
}

export const WarningButton = Template.bind({});
WarningButton.args = {
  children: 'Warning Button',
  variant: ButtonEnums.WARNING,
  onClick: handleClick
}

export const WarningButtonSmall = Template.bind({});
WarningButtonSmall.args = {
  children: 'Warning Small',
  variant: ButtonEnums.WARNING,
  onClick: handleClick,
  small: true
}

export const WarningButtonDisabled = Template.bind({});
WarningButtonDisabled.args = {
  children: 'Warning Disabled',
  variant: ButtonEnums.WARNING,
  onClick: handleClick,
  disabled: true
}

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger Button',
  variant: ButtonEnums.DANGER,
  onClick: handleClick
}

export const DangerButtonSmall = Template.bind({});
DangerButtonSmall.args = {
  children: 'Danger Small',
  variant: ButtonEnums.DANGER,
  onClick: handleClick,
  small: true
}

export const DangerButtonDisabled = Template.bind({});
DangerButtonDisabled.args = {
  children: 'Danger Disabled',
  variant: ButtonEnums.DANGER,
  onClick: handleClick,
  disabled: true
}