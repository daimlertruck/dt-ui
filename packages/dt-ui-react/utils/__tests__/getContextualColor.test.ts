import { theme } from '../../themes/default';
import { getContextualColor } from '../theme';

describe('getContextualColor', () => {
  it('should return the correct color for a valid PaletteKeys input', () => {
    const result = getContextualColor('primary.default', theme);
    expect(result).toEqual(theme.palette.primary.default);
  });
});
