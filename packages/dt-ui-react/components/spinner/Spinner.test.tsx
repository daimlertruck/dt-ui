import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { Spinner } from './Spinner';

describe('<Spinner /> component', () => {
  const ProvidedSpinner = withProviders(Spinner);

  it('should render the default options correctly', () => {
    const { container } = render(<ProvidedSpinner />);

    expect(container).toMatchSnapshot();
  });

  describe('should render the sizes correctly', () => {
    it('should render the small size correctly when the prop is provided', () => {
      const { container } = render(<ProvidedSpinner size='small' />);

      expect(container).toMatchSnapshot();
    });

    it('should render the large size correctly when the prop is provided', () => {
      const { container } = render(<ProvidedSpinner size='large' />);

      expect(container).toMatchSnapshot();
    });

    it('should render the extra large size correctly when the prop is provided', () => {
      const { container } = render(<ProvidedSpinner size='extra-large' />);

      expect(container).toMatchSnapshot();
    });
  });

  it('should render the small size correctly when the prop is provided', () => {
    const { container } = render(<ProvidedSpinner colorScheme='negative' />);

    expect(container).toMatchSnapshot();
  });

  it('should render the text helper when prop is provided', () => {
    const { container } = render(<ProvidedSpinner loadingText='Loading...' />);

    expect(container).toMatchSnapshot();
  });
});
