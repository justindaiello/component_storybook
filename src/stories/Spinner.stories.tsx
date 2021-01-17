import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Spinner, { SpinnerProps } from '../components/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as Meta;

const Template: Story<SpinnerProps> = (args: any) => <Spinner {...args} />;

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
  large: true,
};

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
  large: false,
};