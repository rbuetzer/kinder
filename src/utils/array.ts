export const pickRandomElement = (getRandomNumber = Math.random) => <T>(
  array: T[]
): T => {
  const index = Math.floor(getRandomNumber() * array.length);
  return array[index];
};
