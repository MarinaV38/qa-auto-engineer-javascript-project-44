import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const description = 'Find the greatest common divisor of given numbers.'

const calculateGcd = (a, b) => {
  let x = Math.abs(a)
  let y = Math.abs(b)

  while (y !== 0) {
    const remainder = x % y
    x = y
    y = remainder
  }

  return x
}

const generateRound = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const question = `${number1} ${number2}`
  const correctAnswer = calculateGcd(number1, number2).toString()
  return [question, correctAnswer]
}

const startGcdGame = () => runGame(description, generateRound)

export default startGcdGame
