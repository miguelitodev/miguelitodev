export const convertLetterboxdRatingToNumber = (rating: string): number => {
  let numericRating = 0;
  for (const char of rating) {
    if (char === '★') {
      numericRating += 1;
    } else if (char === '½') {
      numericRating += 0.5;
    }
  }
  return numericRating;
};
