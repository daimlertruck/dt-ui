import { fireEvent, render, screen } from '@testing-library/react';

import { Link } from '../../../dt-ui-react/components/link';
import { theme } from '../../../dt-ui-react/themes/default';
import { withProviders } from '../../../dt-ui-react/utils';

import { Message } from './Message';
import { MessageType, OMessageType } from './types';

describe('<Message /> component', () => {
  const ProvidedMessage = withProviders(Message);
  const title = 'Title here';
  const description = 'Some description here.';

  it.each`
    type
    ${OMessageType.Info}
    ${OMessageType.Success}
    ${OMessageType.Warning}
    ${OMessageType.Error}
    ${OMessageType.Default}
  `(
    'should render a Message with title & description, when type $type',
    ({ type }: { type: MessageType }) => {
      const { container } = render(
        <ProvidedMessage type={type}>
          <Message.Title>{title}</Message.Title>
          <Message.Description>{description}</Message.Description>
        </ProvidedMessage>
      );

      const icon = screen.queryByTestId('message-icon');
      if (type === OMessageType.Default) {
        expect(icon).not.toBeInTheDocument();
      } else {
        expect(icon).toBeInTheDocument();
        const messageIconStyled = icon?.parentElement;
        expect(messageIconStyled).toHaveAttribute('type', type);
      }

      expect(screen.queryByTestId('message')).toHaveStyle(
        `background-color: ${
          type === OMessageType.Default
            ? theme.palette.base.light
            : theme.palette[type].light
        };`
      );

      expect(container).toMatchSnapshot();
    }
  );

  it('should render a Message without title', () => {
    render(<ProvidedMessage type={OMessageType.Success} />);

    const messageTitle = screen.queryByRole('heading');
    expect(messageTitle).toBeNull();
  });

  it('should dismiss the Message', () => {
    render(<ProvidedMessage type={OMessageType.Warning} />);

    const messageCloseButton = screen.getByRole('button');
    expect(messageCloseButton).toBeInTheDocument();

    fireEvent.click(messageCloseButton);

    expect(screen.queryByTestId('message')).toBeNull();
  });

  it('should not render close icon when the component is not dismissable', () => {
    render(
      <ProvidedMessage isDismissable={false} type={OMessageType.Default} />
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render a Message with an Action', () => {
    const mockOnClick = jest.fn();
    render(
      <ProvidedMessage type={OMessageType.Info}>
        <Message.Action>
          <Link href='#' onClick={mockOnClick}>
            View action
          </Link>
        </Message.Action>
      </ProvidedMessage>
    );

    const messageAction = screen.getByRole('link');
    expect(messageAction).toBeInTheDocument();

    fireEvent.click(messageAction);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
