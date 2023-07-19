import { Story } from '@storybook/react';

import { CopyIcon } from '../../../core/assets';
import { IconButton } from '../../buttons';
import { Tooltip } from '../../tooltip';

import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Data Display/form/TextField',
  component: TextField,
};

const Template: Story<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

const copyButton = (
  <Tooltip content='Copy to clipboard'>
    <IconButton dataTestId='copy-button' onClick={() => console.log('here')}>
      <CopyIcon />
    </IconButton>
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {
  label: 'My Awesome Input',
  initialValue: '',
  hasError: true,
  required: false,
  isDisabled: false,
  isLoading: false,
};

const WithIconTemplate: Story<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};

export const WithIcon = WithIconTemplate.bind({});

WithIcon.args = {
  label: 'With icon Input',
  initialValue: '',
  required: false,
  isDisabled: false,
  icon: copyButton,
};
