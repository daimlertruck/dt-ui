import { render, screen } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';

import { HiddenText } from './HiddenText';

describe('<HiddenText /> component', () => {
  const ProvidedHiddenText = withProviders(HiddenText);
  const TEXT = 'text-to-hidden';

  describe('when we want to hide the text', () => {
    it('should render the ellipsis instead of the text', () => {
      render(<ProvidedHiddenText text={TEXT} size={10} isVisible={false} />);

      const text = screen.getByTestId('hidden-text');
      const ellipsis = text.querySelectorAll('span');

      expect(ellipsis.length).toEqual(10);
      expect(text.innerText).toBeUndefined();
    });
  });

  describe('when we want to show the text', () => {
    it('should render the text instead of the ellipsis', () => {
      render(<ProvidedHiddenText text={TEXT} isVisible={true} />);

      const text = screen.getByTestId('hidden-text');
      expect(text.textContent).toEqual(TEXT);
    });
  });

  describe('when we want to show the text partially', () => {
    it('should render the first 10 character of the text and the rest ellipsis', () => {
      render(<ProvidedHiddenText text={TEXT} visibleCharSize={10} />);

      const text = screen.getByTestId('hidden-text');
      const ellipsis = text.querySelectorAll('span');

      expect(ellipsis.length).toEqual(17);
      expect(text.textContent).toEqual(TEXT.substring(0, 10));
    });
  });
});
