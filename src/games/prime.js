import runGame from '../index.js'
import getRandomNumber from '../utils.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  const limit = Math.sqrt(number)

  for (let divisor = 2; divisor <= limit; divisor += 1) {
    if (number % divisor === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return [question.toString(), correctAnswer]
}

const startPrimeGame = () => runGame(description, generateRound)

export default startPrimeGame
