export const isWholeNumber = (number: number) => {
  if (!Number.isFinite(number)) {
    return false;
  }

  if (number % 1 !== 0) {
    return false;
  }

  return true;
};
