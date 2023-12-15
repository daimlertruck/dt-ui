import { Story } from '@storybook/react';
import { useState } from 'react';

import { Backdrop, BackdropProps } from './Backdrop';
import { BackdropType } from './constants';

export default {
  title: 'Data Display/Backdrop',
  component: Backdrop,
  argTypes: {
    type: {
      mapping: BackdropType,
      options: Object.values(BackdropType).filter((x) => typeof x === 'string'),
      control: { type: 'inline-radio' },
    },
  },
};

const Template: Story<BackdropProps> = ({ ...props }) => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(props.isOpen);

  const toggleBackdrop = () => {
    setIsBackdropOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleBackdrop}>Open Backdrop</button>
      <Backdrop {...props} isOpen={isBackdropOpen}>
        <>{props.children}</>
        <button onClick={toggleBackdrop}>Close Backdrop</button>
      </Backdrop>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOpen: false,
  type: BackdropType.Dark,
  children: <div>Example content.</div>,
};
