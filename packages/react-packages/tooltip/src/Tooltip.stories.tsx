import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import { IconButton } from '../../../dt-ui-react/components/buttons';
import { DeleteIcon } from '../../../dt-ui-react/core';

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
        <Tooltip.Content background={background} direction={direction}>
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
        dataTestId='delete-access-id-button-'
        isDisabled={false}
        onClick={() => console.log('hey')}
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
