import { useState } from 'react';

import { Drawer } from '.';

export default {
  title: 'Data Display/Drawer',
  component: Drawer,
};

interface DrawerStoryProps {
  isVisible: boolean;
}

export const Default = ({ ...props }: DrawerStoryProps) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(props.isVisible);

  const toggleDrawer = () => {
    setIsDrawerVisible((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} type='button'>
        Open Drawer
      </button>

      <Drawer
        {...props}
        isVisible={isDrawerVisible}
        setIsVisible={setIsDrawerVisible}
      >
        <Drawer.Header>
          <Drawer.Title title='Drawer title' />
          <div>Drawer header content here.</div>
        </Drawer.Header>
        <Drawer.ScrollEffectContainer />
        <Drawer.Body>
          <div>Drawer body content here.</div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};

Default.args = {
  isVisible: false,
};
