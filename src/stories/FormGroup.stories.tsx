import { Story, Meta } from '@storybook/react/types-6-0';

import FormGroup, { FormGroupProps } from '../components/FormGroup';

export default {
  title: 'Components/Forms',
  component: FormGroup,
} as Meta;

const formConfig = {
  id: 'test-input',
  name: 'test-input',
  type: 'text',
  label: 'Primary Text Input',
  value: '',
  disabled: false,
  placeholder: 'Sample Placeholder',
  onChange: () => {},
};

const Template: Story<FormGroupProps> = (args: any) => <FormGroup {...args} />;

export const PrimaryTextInput = Template.bind({});
PrimaryTextInput.args = {
  error: '',
  formConfig,
};

export const PrimaryTextInputError = Template.bind({});
PrimaryTextInputError.args = {
  error: 'Sample error state',
  formConfig,
};

export const PrimaryTextInputDisabled = Template.bind({});
PrimaryTextInputDisabled.args = {
  error: '',
  formConfig: { ...formConfig, disabled: true },
};

export const PrimaryTextarea = Template.bind({});
PrimaryTextarea.args = {
  error: '',
  formConfig: { ...formConfig, type: 'textarea' },
};

export const PrimaryTextareaError = Template.bind({});
PrimaryTextareaError.args = {
  error: 'Sample error state',
  formConfig: { ...formConfig, type: 'textarea' },
};

export const PrimaryTextareaDisabled = Template.bind({});
PrimaryTextareaDisabled.args = {
  error: '',
  formConfig: { ...formConfig, type: 'textarea', disabled: true },
};
