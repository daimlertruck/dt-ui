import { render } from '@dt-ui/react-core';

import Stepper from './Stepper';

describe('<Stepper /> component', () => {
  describe('render default Stepper', () => {
    it('should render with correct HTML elements', () => {
      const { container } = render(
        <Stepper>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </Stepper>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('render Stepper with prop and correct styles', () => {
    it('should render using flex direction column', () => {
      const { container } = render(
        <Stepper orientation='vertical'>
          <li>Item 1</li>
          <li>Item 2</li>
        </Stepper>
      );

      expect(container.firstChild).toHaveStyle('flex-direction: column');
    });

    it('should render using flex direction row', () => {
      const { container } = render(
        <Stepper orientation='horizontal'>
          <li>Item 1</li>
          <li>Item 2</li>
        </Stepper>
      );

      expect(container.firstChild).toHaveStyle('flex-direction: column');
    });
  });
});
