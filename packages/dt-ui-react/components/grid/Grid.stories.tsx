import { Card } from '../card';

import { Grid } from './Grid';

export default {
  title: 'Data Display/Grid',
  component: Grid,
};

export const Default = () => (
  <Grid>
    <Card>
      <Card.Title>Card Title</Card.Title>
      <Card.Detail>Card Description</Card.Detail>
    </Card>
    <Card>
      <Card.Title>Card Title</Card.Title>
      <Card.Detail>Card Description</Card.Detail>
    </Card>
    <Card>
      <Card.Title>Card Title</Card.Title>
      <Card.Detail>Card Description</Card.Detail>
    </Card>
  </Grid>
);
