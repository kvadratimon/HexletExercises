// Function 'substr' substract the substring from string
const substr = (str, begin, numOfSymb) => {
if (numOfSymb > str.length - begin) {
    numOfSymb = str.length - begin;
  }
  result = '';
  for (let i = 0; i < numOfSymb; i++) {
    result += str[begin + i];
  }

  return result;
};

export default substr;
