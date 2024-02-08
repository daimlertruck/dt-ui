import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../../../dt-ui-react/components/buttons';
import { DeleteIcon } from '../../../dt-ui-react/core';

import { TooltipContainerProps } from './components/container';
import { TooltipContentProps } from './components/content';
import { OTooltipBackground, OTooltipDirection } from './constants';
import Tooltip from './Tooltip';

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

type TooltipProps = TooltipContainerProps &
  TooltipContentProps & { message?: string };

const meta: Meta<TooltipProps> = {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  argTypes: {
    background: {
      options: OTooltipBackground,
      control: { type: 'radio' },
    },
    direction: {
      options: OTooltipDirection,
      control: { type: 'select' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ children, hideDelay, background, direction, message }) => {
    return (
      <StyledContainer>
        <Tooltip hideDelay={hideDelay}>
          {children}
          <Tooltip.Content background={background} direction={direction}>
            {message}
          </Tooltip.Content>
        </Tooltip>
      </StyledContainer>
    );
  },
};

export default meta;

export const Default: StoryObj<TooltipProps> = {
  args: {
    hideDelay: 0,
    children: (
      <IconButton
        color='error'
        dataTestId='delete-id-button-'
        isDisabled={false}
        onClick={() => console.log('log')}
      >
        <DeleteIcon />
      </IconButton>
    ),
    direction: OTooltipDirection.Top,
    background: OTooltipBackground.Full,
    message: 'Delete',
  },
};
