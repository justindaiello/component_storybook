import { Story, Meta } from '@storybook/react/types-6-0';

import Pill, { PillProps, PillEnums } from '../components/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
} as Meta;

const Template: Story<PillProps> = (args: any) => <Pill {...args} />

export const PrimaryPill = Template.bind({});
PrimaryPill.args = {
  children: 'Primary Pill',
  variant: PillEnums.PRIMARY,
  outline: false,
}

export const PrimaryPillOutline = Template.bind({});
PrimaryPillOutline.args = {
  children: 'Primary Outline',
  variant: PillEnums.PRIMARY,
  outline: true,
}

export const SecondaryPill = Template.bind({});
SecondaryPill.args = {
  children: 'Secondary Pill',
  variant: PillEnums.SECONDARY,
  outline: false,
}

export const SecondaryPillOutline = Template.bind({});
SecondaryPillOutline.args = {
  children: 'Secondary Outline',
  variant: PillEnums.SECONDARY,
  outline: true,
}

export const WarningPill = Template.bind({});
WarningPill.args = {
  children: 'Warning Pill',
  variant: PillEnums.WARNING,
  outline: false,
}

export const WarningPillOutline = Template.bind({});
WarningPillOutline.args = {
  children: 'Warning Outline',
  variant: PillEnums.WARNING,
  outline: true,
}

export const DangerPill = Template.bind({});
DangerPill.args = {
  children: 'Danger Pill',
  variant: PillEnums.DANGER,
  outline: false,
}

export const DangerPillOutline = Template.bind({});
DangerPillOutline.args = {
  children: 'Danger Outline',
  variant: PillEnums.DANGER,
  outline: true,
}