import { CopyIcon, IconButton } from '@dt-ui/react';
import { TextField, TextFieldProps } from '@dt-ui/react-text-field';
import { Tooltip } from '@dt-ui/react-tooltip';
import { type Meta, type StoryObj } from '@storybook/react';

const CopyButton = (
  <Tooltip>
    <IconButton dataTestId='copy-button' onClick={() => console.log('here')}>
      <CopyIcon />
    </IconButton>
    <Tooltip.Content>Copy to clipboard</Tooltip.Content>
  </Tooltip>
);

const TextFieldTypeOptions = {
  Text: 'text',
  Radio: 'radio',
  Checkbox: 'checkbox',
  Button: 'button',
  Date: 'date',
  DatetimeLocal: 'datetime-local',
  Email: 'email',
  File: 'file',
  Hidden: 'hidden',
  Image: 'image',
  Month: 'month',
  Number: 'number',
  Password: 'password',
  Reset: 'reset',
  Search: 'search',
  Submit: 'submit',
  Tel: 'tel',
  Time: 'time',
  Url: 'url',
  Week: 'week',
};

const meta: Meta<TextFieldProps> = {
  component: TextField,
  title: 'Data Display/TextField',
  argTypes: {
    onChange: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onChange',
          undefined: 'Does not have onChange',
        },
      },
    },
    maxLength: { control: { type: 'number', min: 1 } },
    icon: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'With copy button example',
          undefined: 'Without copy button example',
        },
      },
    },
    type: {
      options: TextFieldTypeOptions,
      control: { type: 'select' },
    },
  },
  render: ({ onChange, icon, ...props }) => (
    <TextField
      {...props}
      {...(onChange &&
        ({
          onChange: (data: string) => console.log('data changed: ', data),
        } as unknown as TextFieldProps['onChange']))}
      {...(icon && { icon: CopyButton })}
    />
  ),
};

export default meta;

export const Default: StoryObj<TextFieldProps> = {
  args: {
    type: TextFieldTypeOptions.Text,
    name: 'field-name',
    label: 'My label',
    message: 'Additional info',
    initialValue: '',
    maxLength: undefined,
    required: true,
    requiredMessage: '',
    onChange: undefined,
    icon: undefined,
    hasError: false,
    isLoading: false,
    isDisabled: false,
  },
};
