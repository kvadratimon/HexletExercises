// Счастливые числа - это те числа, которые в результате ряда преобразований вида
// "сумма квадратов входящих цифр" превратятся в единицу. Например:
// 7 => 7^2 = 49, 49 => 4^2 + 9^2 = 16 + 81 = 97, 97 =>
// 9^2 + 7^2 = 81 + 49 = 130, 130 =>
// 1^2 + 3^2 + 0^2 = 10, 10 => 1^2 + 0^2 = 1.
// Следовательно число 7 - счастливое.
//

// Функция sumSquareOfDigits возвращает сумму квадратов входящих в число цифр
const sumSquareOfDigits = (num) => {
  let str = String(num);
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** 2;
  }

  return sum;
}

// Функция isHappyNumber проверяет счастливое число или нет
const isHappyNumber = (num) => {

  const recur = (count, number) => {
    if (number === 1) {
      return true;
    } else if (count === 10) {
      return false;
    }

    return recur(count + 1, sumSquareOfDigits(number));
  }

  return recur(0, num);
}

// adding this functions to html page "HappyNumberPage.html"
let button = document.getElementById('button'),
    textBox = document.getElementById('textBox');

const getAnsver = () => {
  ansverContainer = document.getElementById('ansverContainer');
  let ansver = isHappyNumber(textBox.value) ? "Your Number is Happy =)" : "Your number is not Happy =(";
  ansverContainer.innerHTML = "<h1>" + ansver + "</h1>";
}

button.addEventListener('click', getAnsver);
