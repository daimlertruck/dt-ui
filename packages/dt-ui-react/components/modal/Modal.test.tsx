import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';
import { Button } from '../buttons';

import { Modal, Overlay } from './Modal';

describe('<Modal/> Component', () => {
  const ProvidedOverlay = withProviders(Overlay);

  const handleClick = jest.fn();

  describe('handle modal actions', () => {
    beforeEach(() => {
      render(
        <ProvidedOverlay isOpen={true} dataTestId='modal-overlay'>
          <Modal handleClose={handleClick}>
            <Modal.Header handleClose={handleClick}>Title</Modal.Header>
            <Modal.Content>
              <Modal.ContentTitle>Subtitle</Modal.ContentTitle>
              Some text here
            </Modal.Content>
            <Modal.Footer>
              <Button
                variant='outlined'
                color='neutral'
                onClick={handleClick}
                dataTestId='cancel'
              >
                Cancel
              </Button>
              <Button onClick={handleClick} dataTestId='action'>
                Action
              </Button>
            </Modal.Footer>
          </Modal>
        </ProvidedOverlay>
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('renders modal correctly', () => {
      expect(screen.getByTestId('modal-overlay')).toMatchSnapshot();
    });

    it('fires the mock close function when clicking on the x', () => {
      const closeBtn = within(screen.getByTestId('modal-header')).getByRole(
        'button'
      );
      fireEvent.mouseDown(closeBtn);

      expect(handleClick).toBeCalledTimes(1);
    });

    it('fires the mock close function when clicking on cancel', () => {
      const cancelBtn = screen.getByTestId('cancel-button');
      fireEvent.click(cancelBtn);

      expect(handleClick).toBeCalledTimes(1);
    });

    it('fires the mock action function when clicking on action', () => {
      const actionBtn = screen.getByTestId('action-button');
      fireEvent.click(actionBtn);

      expect(handleClick).toBeCalledTimes(1);
    });
  });

  describe('handle close outside modal', () => {
    beforeEach(() => {
      jest
        .spyOn(React, 'useRef')
        .mockReturnValueOnce({ current: document.createElement('button') });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should fire handle close function when clicking outside', () => {
      render(
        <>
          <ProvidedOverlay isOpen={true} dataTestId='modal-overlay'>
            <Modal hasClickOutside={true} handleClose={handleClick}>
              Content
            </Modal>
          </ProvidedOverlay>
          <div>outside</div>
        </>
      );

      fireEvent.mouseDown(screen.getAllByText('outside')[0]);

      expect(handleClick).toBeCalledTimes(1);
    });

    it('should not fire handle close function when clicking outside', () => {
      render(
        <>
          <ProvidedOverlay isOpen={true} dataTestId='modal-overlay'>
            <Modal hasClickOutside={false} handleClose={handleClick}>
              Content
            </Modal>
          </ProvidedOverlay>
          <div>outside</div>
        </>
      );

      fireEvent.mouseDown(screen.getAllByText('outside')[0]);

      expect(handleClick).toBeCalledTimes(0);
    });
  });

  describe('handle disabled prop', () => {
    beforeEach(() => {
      render(
        <ProvidedOverlay isOpen={true} dataTestId='modal-overlay'>
          <Modal handleClose={handleClick}>
            <Modal.Header handleClose={handleClick} isDisabled={true}>
              Title
            </Modal.Header>
            <Modal.Content>Some text here</Modal.Content>
          </Modal>
        </ProvidedOverlay>
      );
    });

    it('should not be possible to click on the Close icon', () => {
      const closeBtn = within(screen.getByTestId('modal-header')).getByRole(
        'button'
      );

      expect(closeBtn).toBeDisabled();
    });
  });
});
