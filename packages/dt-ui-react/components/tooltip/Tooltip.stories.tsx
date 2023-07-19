import styled from '@emotion/styled';
import { Story } from '@storybook/react';

import { TooltipDirection } from './constants';
import { Tooltip, TooltipProps } from './Tooltip';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    direction: {
      mapping: TooltipDirection,
      options: Object.values(TooltipDirection).filter(
        (x) => typeof x === 'string'
      ),
      control: { type: 'select' },
    },
  },
};

const StyledContainer = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const Template: Story<TooltipProps> = ({ ...props }) => {
  return (
    <StyledContainer>
      <Tooltip {...props}>Hover over me</Tooltip>
    </StyledContainer>
  );
};

export const Default = Template.bind({});

Default.args = {
  content: 'Some content here',
  direction: TooltipDirection.Bottom,
};
