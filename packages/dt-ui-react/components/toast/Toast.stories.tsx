import { Story } from '@storybook/react';
import { ToasterProps } from 'react-hot-toast';

import { Typography } from '../typography';

import { ToastPosition, ToastType } from './constants';
import Toast, { ToastProps } from './Toast';
import Toaster, { emitToast, EmitToastProps } from './Toaster';

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    smallPosition: {
      mapping: ToastPosition,
      options: Object.values(ToastPosition).filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'select' },
    },
    defaultPosition: {
      mapping: ToastPosition,
      options: Object.values(ToastPosition).filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'select' },
    },
    type: {
      mapping: ToastType,
      options: Object.values(ToastType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
    duration: {
      control: { type: 'number' },
    },
  },
};

const Template: Story<EmitToastProps & ToastProps & ToasterProps> = ({
  type,
  title,
  message,
  duration,
  ...props
}) => {
  return (
    <>
      <button onClick={() => emitToast({ type, title, message, duration })}>
        Click me
      </button>
      <Toaster {...props} />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  type: ToastType.Success,
  title: 'success',
  message:
    'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
  onClose: () => console.log('clicked'),
};

const WithChildrenTemplate: Story<
  EmitToastProps & ToastProps & Omit<ToasterProps, 'children'>
> = ({ type, title, message, duration, children, ...props }) => {
  return (
    <>
      <button
        onClick={() => emitToast({ type, title, message, duration, children })}
      >
        Click me
      </button>
      <Toaster {...props} />
    </>
  );
};

export const WithChildren = WithChildrenTemplate.bind({});

WithChildren.args = {
  type: ToastType.Success,
  title: 'success',
  message:
    'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
  onClose: () => console.log('clicked'),
  children: (
    <Typography
      fontStyles='pXXSmall'
      color='primary'
      style={{ marginTop: '8px' }}
    >
      Text
    </Typography>
  ),
};
