import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import { DeleteIcon } from '../../core';
import { IconButton } from '../buttons';

import { TooltipContainerProps } from './components/container';
import { TooltipContentProps } from './components/content';
import { OTooltipBackground, OTooltipDirection } from './constants';
import Tooltip from './Tooltip';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
};

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Template: Story<{
  container: TooltipContainerProps;
  content: TooltipContentProps;
}> = ({
  container: { children, hideDelay },
  content: { children: contentChildren, direction, background },
}) => {
  return (
    <StyledContainer>
      <Tooltip hideDelay={hideDelay}>
        {children}
        <Tooltip.Content direction={direction} background={background}>
          {contentChildren}
        </Tooltip.Content>
      </Tooltip>
    </StyledContainer>
  );
};

export const Default = Template.bind({});

Default.args = {
  container: {
    hideDelay: 0,
    children: (
      <IconButton
        color='error'
        dataTestId={'delete-access-id-button-'}
        onClick={() => console.log('hey')}
        isDisabled={false}
      >
        <DeleteIcon />
      </IconButton>
    ),
  },
  content: {
    direction: OTooltipDirection.Top,
    background: OTooltipBackground.Full,
    children: 'Delete',
  },
};
