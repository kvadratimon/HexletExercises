const reverseInt = (num) => {
  let number = String(num);
  let numOfDig = (number[0] === '-') ? number.length - 1 : number.length;
  let str = (number[0] === '-') ? '-' : '';
  for (let i = number.length - 1; i >= (number.length - numOfDig); i--) {
    str += number[i];
  }

  return str;
};

let numberToReverse = prompt('Type your number and we reverse it!');
alert(reverseInt(numberToReverse));
