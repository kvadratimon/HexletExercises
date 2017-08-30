// Summary all digits in number
const sum = (num) => {
  let result = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }

  return result;
};

export default sum;
