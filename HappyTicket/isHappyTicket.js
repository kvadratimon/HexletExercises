// The function that sum all digits in number
const sum = (num) => {
  let result = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }

  return result;
};

// The function that substract the substring from string
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

// The function that check happy ticket
const isHappyTicket  = (ticketNumber) => {
  const ticketStr = String(ticketNumber);
  if ( ticketStr.length !== 6 || Number(ticketNumber) !== Number(ticketNumber) ) {
    return 'It is not the ticket number!';
  }
  const leftNum = sum(Number(substr(ticketStr, 0, 3)));
  console.log(leftNum);
  const rightNum = sum(Number(substr(ticketStr, 3, 3)));
  console.log(rightNum);
  return leftNum === rightNum;
};
