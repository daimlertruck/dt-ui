import { Button } from '@dt-ui/react-button';
import { Meta, StoryFn } from '@storybook/react';

import { ModalHeaderProps } from './components';
import { useModal } from './hooks';
import { Modal, ModalProps, Overlay } from './Modal';

type ModalStoryProps = {
  hasHeaderBorder: boolean;
  hasHeaderBackgroundColor: boolean;
  hasFooterBorder: boolean;
  hasFooterBackgroundColor: boolean;
  hasClickOutside: boolean;
  actionTitle: string;
  content: string;
} & ModalProps &
  ModalHeaderProps;

const Template: StoryFn<ModalStoryProps> = ({
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

const meta: Meta<ModalStoryProps> = {
  title: 'Data Display/Modal',
  component: Modal,
  render: Template,
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

export const Default = {
  args: {
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
  },
};

export default meta;
