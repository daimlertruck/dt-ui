import { Story } from '@storybook/react';
import { ToasterProps } from 'react-hot-toast';

import { Button } from '../buttons';

import { ToastType } from './constants';
import Toast, { ToastProps } from './Toast';
import Toaster, { emitToast, EmitToastProps } from './Toaster';

export default {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    type: {
      mapping: ToastType,
      options: Object.values(ToastType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
  },
};

const Template: Story<EmitToastProps & ToastProps & ToasterProps> = ({
  type,
  title,
  message,
  dismissible,
  ...props
}) => {
  return (
    <>
      <button onClick={() => emitToast({ type, title, message, dismissible })}>
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
  dismissible: true,
  message:
    'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
  onClose: () => console.log('clicked'),
};

const WithChildrenTemplate: Story<
  EmitToastProps & ToastProps & Omit<ToasterProps, 'children'>
> = ({ type, title, message, dismissible, children, ...props }) => {
  return (
    <>
      <button
        onClick={() =>
          emitToast({ type, title, message, dismissible, children })
        }
      >
        Click me
      </button>
      <Toaster {...props} />
    </>
  );
};

export const WithChildren = WithChildrenTemplate.bind({});

WithChildren.args = {
  type: ToastType.Error,
  title: 'success',
  message:
    'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
  onClose: () => console.log('clicked'),
  children: (
    <>
      <Button
        variant='text'
        onClick={() => console.log('clicked')}
        style={{ padding: '8px 12px', color: '#4A4A4B' }}
      >
        Action 1
      </Button>
      <Button
        variant='text'
        style={{ padding: '8px 12px', color: '#4A4A4B' }}
        onClick={() => console.log('clicked')}
      >
        Action 2
      </Button>
    </>
  ),
};
