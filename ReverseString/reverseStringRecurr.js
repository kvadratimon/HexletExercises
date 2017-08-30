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

// Reversing the string
const reverseString = (str) => {
  if (str.length === 0 || str.length === 1) {
    return str;
  }
  let result = '';

  const recurReverse = (string) => {
    result += string[string.length - 1];
    if (string.length === 1) {
      return result;
    }

    return recurReverse(substr(string, 0, string.length - 1));
  }

  return recurReverse(str);
};

let string = prompt('Insert your string and we reverse it!');
alert(reverseString(string));

// export default reverseString;
