import { Story } from '@storybook/react';

import { Button } from '../buttons';

import { useModal } from './hooks';
import { Modal, Overlay } from './Modal';

export default {
  title: 'Data Display/Modal',
  component: Modal,
};

const Template: Story = ({ actionTitle, content, title, subtitle }) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      <button onClick={toggleModal}>Click me</button>
      <Overlay isOpen={isModalOpen}>
        <Modal handleClose={toggleModal}>
          <Modal.Header handleClose={toggleModal}>{title}</Modal.Header>
          <Modal.Content>
            <Modal.ContentTitle>{subtitle}</Modal.ContentTitle>
            <p>{content}</p>
          </Modal.Content>
          <Modal.Footer>
            <Button
              variant='outlined'
              color='neutral'
              onClick={toggleModal}
              dataTestId='cancel'
            >
              Cancel
            </Button>
            <Button onClick={() => null} dataTestId='action'>
              {actionTitle}
            </Button>
          </Modal.Footer>
        </Modal>
      </Overlay>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  actionTitle: 'Action',
  content: 'Some content here',
  title: 'Title',
  subtitle: 'Subtitle',
};
