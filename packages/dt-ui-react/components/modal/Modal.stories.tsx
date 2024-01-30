import { Story } from '@storybook/react';

import { Button } from '../buttons';

import { useModal } from './hooks';
import { Modal, Overlay } from './Modal';

export default {
  title: 'Data Display/Modal',
  component: Modal,
  argTypes: {
    hasHeaderBorder: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add bottom border to Header',
    },
    hasHeaderBackgroundColor: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add background color to Header',
    },
    hasFooterBorder: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add top border to footer',
    },
    hasFooterBackgroundColor: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Add background color to Footer',
    },
    hasClickOutside: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Enables click outside to trigger close action',
    },
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      description: 'Adds loading spinner and overlay',
    },
  },
};

const Template: Story = ({
  actionTitle,
  content,
  title,
  subTitle,
  hasClickOutside,
  hasHeaderBorder,
  hasHeaderBackgroundColor,
  hasFooterBorder,
  hasFooterBackgroundColor,
  isLoading,
}) => {
  const { isModalOpen, toggleModal } = useModal();

  return (
    <>
      <button onClick={toggleModal} type='button'>
        Click me
      </button>
      <Overlay isOpen={isModalOpen}>
        <Modal
          handleClose={toggleModal}
          hasClickOutside={hasClickOutside}
          isLoading={isLoading}
        >
          <Modal.Header
            handleClose={toggleModal}
            hasBackgroundColor={hasHeaderBackgroundColor}
            hasBorder={hasHeaderBorder}
            subTitle={subTitle}
            title={title}
          />
          {content ? (
            <Modal.Content>
              <p>{content}</p>
            </Modal.Content>
          ) : null}
          <Modal.Footer
            hasBackgroundColor={hasFooterBackgroundColor}
            hasBorder={hasFooterBorder}
          >
            <Button
              color='secondary'
              dataTestId='cancel'
              onClick={toggleModal}
              variant='outlined'
            >
              Cancel
            </Button>
            <Button dataTestId='action' onClick={() => null}>
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
  subTitle: 'Some random Subtitle here',
  hasHeaderBorder: false,
  hasHeaderBackgroundColor: false,
  hasFooterBorder: false,
  hasFooterBackgroundColor: false,
  hasClickOutside: false,
  isLoading: false,
};
