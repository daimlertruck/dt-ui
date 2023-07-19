import { render } from '@testing-library/react';
import React from 'react';

import { Box } from './Box';

describe('<Box /> component', () => {
  it('should render a span html element with the given content', () => {
    const { container } = render(
      <Box element='span'>
        <p>Some Content</p>
        <p>More Content</p>
      </Box>
    );

    expect(container).toMatchSnapshot();
  });
});
