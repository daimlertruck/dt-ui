/**
 * @param text String of one or more words
 * @returns {string} of the first letter of each word in uppercase
 */

export const acronymGenerator = (text = ''): string => {
  const textSliced = text.split(' ').slice(0, 2).join(' '); // Get the first two words

  return textSliced
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), '')
    .toUpperCase();
};
