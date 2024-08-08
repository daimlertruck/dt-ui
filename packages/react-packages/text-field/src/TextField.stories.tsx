import { Icon } from '@dt-ui/react-icon';
import { TextField, TextFieldProps } from '@dt-ui/react-text-field';
import { type Meta, type StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

const TextFieldTypeOptions = {
  Text: 'text',
  Date: 'date',
  DatetimeLocal: 'datetime-local',
  Email: 'email',
  Month: 'month',
  Number: 'number',
  Password: 'password',
  Search: 'search',
  Tel: 'tel',
  Time: 'time',
  Url: 'url',
  Week: 'week',
};

type TextFieldPropsWithExtrasProp = TextFieldProps & {
  extras: 'suffix' | 'prefix' | 'both' | 'none';
};

const getExtraElements = (
  extras: 'suffix' | 'prefix' | 'both' | 'none'
): { extraPrefix?: ReactNode; extraSuffix?: ReactNode } => {
  switch (extras) {
    case 'prefix':
      return { extraPrefix: <Icon code='home_work' /> };
    case 'suffix':
      return { extraSuffix: <Icon code='home_work' /> };
    case 'both':
      return {
        extraPrefix: <Icon code='home_work' />,
        extraSuffix: <Icon code='home_work' />,
      };
    default:
      return {};
  }
};

const meta: Meta<TextFieldPropsWithExtrasProp> = {
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
    extras: {
      options: ['suffix', 'prefix', 'both', 'none'],
      control: {
        type: 'select',
      },
    },
    type: {
      options: TextFieldTypeOptions,
      control: { type: 'select' },
    },
    variant: {
      options: {
        outlined: 'outlined',
        bottomLine: 'bottomLine',
      },
      control: { type: 'select' },
    },
  },
  render: ({ onChange, extras, ...props }) => (
    <TextField
      {...props}
      {...(onChange &&
        ({
          onChange: (data: string) => console.log('data changed: ', data),
        } as unknown as TextFieldProps['onChange']))}
      {...getExtraElements(extras)}
    />
  ),
};

export default meta;

export const Default: StoryObj<TextFieldPropsWithExtrasProp> = {
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
    hasError: false,
    disabled: false,
    isFloatingLabel: true,
    readOnly: false,
    placeholder: 'My field placeholder',
    variant: 'outlined',
    extras: 'none',
  },
};
