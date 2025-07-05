import { convertLetterboxdRatingToNumber } from '../utils';

describe('convertLetterboxdRatingToNumber', () => {
  it('should convert full stars correctly', () => {
    expect(convertLetterboxdRatingToNumber('★★★★★')).toBe(5);
  });

  it('should convert half stars correctly', () => {
    expect(convertLetterboxdRatingToNumber('★★★★½')).toBe(4.5);
  });

  it('should convert mixed stars correctly', () => {
    expect(convertLetterboxdRatingToNumber('★★★½')).toBe(3.5);
  });

  it('should return 0 for empty string', () => {
    expect(convertLetterboxdRatingToNumber('')).toBe(0);
  });

  it('should handle invalid characters by ignoring them', () => {
    expect(convertLetterboxdRatingToNumber('★☆★')).toBe(2);
  });
});