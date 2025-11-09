import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

const startCalcGame = () => runGame(description, generateRound);

export default startCalcGame;
