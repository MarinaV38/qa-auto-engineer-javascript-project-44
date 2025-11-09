import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) =>
  Array.from({ length }, (_, index) => start + index * step);

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  const question = progression
    .map((number, index) => (index === hiddenIndex ? '..' : number))
    .join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => runGame(description, generateRound);

export default startProgressionGame;
