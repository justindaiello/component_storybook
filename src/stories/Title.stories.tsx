import { Story, Meta } from '@storybook/react/types-6-0';

import Title, { TitleProps } from '../components/Title';

export default {
  title: 'Components/Title',
  component: Title
} as Meta;

const Template: Story<TitleProps> = (args: any) => <Title {...args} />

export const XLargeTitle = Template.bind({});
XLargeTitle.args = {
  as: 'h1',
  size: 'xlarge',
  children: 'XLarge h1 Title'
}

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  as: 'h2',
  size: 'large',
  children: 'Large h2 Title'
}

export const MediumTitle = Template.bind({});
MediumTitle.args = {
  as: 'h3',
  size: 'medium',
  children: 'Medium h3 Title'
}

export const SmallTitle = Template.bind({});
SmallTitle.args = {
  as: 'h4',
  size: 'small',
  children: 'Medium h4 Title'
}

export const Default = Template.bind({});
Default.args = {
  children: 'Default Span'
}