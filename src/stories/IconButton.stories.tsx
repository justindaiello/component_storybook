import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconButton, { ButtonProps } from '../components/IconButton';

function handleClick(): void {
  return console.log('You clicked me, yay')
}

export default {
  title: 'Components/IconButton',
  component: IconButton
} as Meta

const Template: Story<ButtonProps> = (args: any) => <IconButton {...args} />

export const PrimaryIconButton = Template.bind({})
PrimaryIconButton.args = {
  onClick: handleClick,
  icon: 'exclamation-circle',
  label: 'warning'
}

export const DisabledIconButton = Template.bind({})
DisabledIconButton.args = {
  onClick: handleClick,
  icon: 'exclamation-circle',
  label: 'warning',
  disabled: true
}