const reverseString = (str) => {
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  let inverseString = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    inverseString += str[i];
  }

  return inverseString;
};

// export default reverseString;
