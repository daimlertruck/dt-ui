import { fireEvent, render, screen } from '@testing-library/react';

import { theme } from '../../themes/default';
import { withProviders } from '../../utils';
import { Link } from '../link';

import { Message } from './Message';
import { MessageType } from './types';

describe('<Message /> component', () => {
  const ProvidedMessage = withProviders(Message);
  const title = 'Title here';
  const description = 'Some description here.';

  it.each`
    type
    ${MessageType.Info}
    ${MessageType.Success}
    ${MessageType.Warning}
    ${MessageType.Error}
    ${MessageType.Default}
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
      if (type === MessageType.Default) {
        expect(icon).not.toBeInTheDocument();
      } else {
        expect(icon).toBeInTheDocument();
        const messageIconStyled = icon?.parentElement;
        expect(messageIconStyled).toHaveAttribute('type', type);
      }

      expect(screen.queryByTestId('message')).toHaveStyle(
        `background-color: ${
          type === MessageType.Default
            ? theme.colors.grey_10
            : theme.palette[`${type}Light_100`]
        };`
      );

      expect(container).toMatchSnapshot();
    }
  );

  it('should render a Message without title', () => {
    render(<ProvidedMessage type={MessageType.Success} />);

    const messageTitle = screen.queryByRole('heading');
    expect(messageTitle).toBeNull();
  });

  it('should dismiss the Message', () => {
    render(<ProvidedMessage type={MessageType.Warning} />);

    const messageCloseButton = screen.getByRole('button');
    expect(messageCloseButton).toBeInTheDocument();

    fireEvent.click(messageCloseButton);

    expect(screen.queryByTestId('message')).toBeNull();
  });

  it('should not render close icon when the component is not dismissable', () => {
    render(
      <ProvidedMessage isDismissable={false} type={MessageType.Default} />
    );

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render a Message with an Action', () => {
    const mockOnClick = jest.fn();
    render(
      <ProvidedMessage type={MessageType.Info}>
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
