import { acronymGenerator } from '../acronymGenerator';

describe('acronymGenerator', () => {
  it('should return an empty string when no text is provided', () => {
    const result = acronymGenerator();
    expect(result).toBe('');
  });

  it('should return the acronym of a single word', () => {
    const result = acronymGenerator('apple');
    expect(result).toBe('A');
  });

  it('should return the acronym of two words', () => {
    const result = acronymGenerator('hello world');
    expect(result).toBe('HW');
  });
});
