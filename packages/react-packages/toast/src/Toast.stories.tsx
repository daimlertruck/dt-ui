import type { Meta, StoryObj } from '@storybook/react';
import { ToasterProps } from 'react-hot-toast';

import { Button } from '../../../dt-ui-react';

import { ToastType } from './constants';
import Toast from './Toast';

import { emitToast, Toaster } from './';

type Story = StoryObj<typeof Toast>;

const meta: Meta<typeof Toast> = {
  title: 'Data Display/Toast',
  component: Toast,
  argTypes: {
    type: {
      mapping: ToastType,
      options: Object.values(ToastType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
  },
  render: ({ children, type, title, message, dismissible, ...props }) => (
    <>
      <button
        onClick={() =>
          emitToast({ type, title, message, dismissible, children })
        }
        type='button'
      >
        Click me
      </button>
      <Toaster {...(props as ToasterProps)} />
    </>
  ),
};

export default meta;

export const Default: Story = {
  args: {
    type: ToastType.Success,
    title: 'success',
    dismissible: true,
    message: 'This is a success message showed in the Toast.',
    onClose: () => console.log('clicked'),
  },
};

export const WithChildren: Story = {
  args: {
    type: ToastType.Error,
    title: 'error',
    message: 'This is an error message showed in the Toast.',
    onClose: () => console.log('clicked'),
    children: (
      <>
        <Button
          color='secondary'
          onClick={() => console.log('clicked')}
          style={{ padding: '8px 12px' }}
          variant='text'
        >
          Action 1
        </Button>
        <Button
          color='secondary'
          onClick={() => console.log('clicked')}
          style={{ padding: '8px 12px' }}
          variant='text'
        >
          Action 2
        </Button>
      </>
    ),
  },
};
