const getRandomNumber = (min = 0, max = 100) => {
  const lowerBound = Math.ceil(min);
  const upperBound = Math.floor(max);
  return Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
};

export default getRandomNumber;
