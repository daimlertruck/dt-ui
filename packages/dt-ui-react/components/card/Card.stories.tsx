import { Typography } from '@dt-ui/react-typography';
import { Story } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Data Display/Card',
  component: Card,
};

const Template: Story = ({ title, description }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Detail>
        <Typography color='grey_100'>{description}</Typography>
      </Card.Detail>
    </Card>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Card Title',
  description: 'This is a short description',
};
