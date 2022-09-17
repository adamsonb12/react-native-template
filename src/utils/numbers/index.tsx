export const isWholeNumber = (number: number) => {
  if (!Number.isFinite(number)) {
    return false;
  }

  if (number % 1 !== 0) {
    return false;
  }

  return true;
};

export const getNumberFromMaskedNumber = (text: string) => {
  const regex = new RegExp(/\D+/);
  return Number(text.replace(regex, ""));
};

export const isValidSSN = (ssn: number) => {
  const regex = new RegExp("^\\d{9}$");
  return regex.test(String(ssn));
};
