import { Story, Meta } from '@storybook/react/types-6-0';

import Switch from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: Story = () => <Switch />;

export const PrimarySwitch = Template.bind({});
