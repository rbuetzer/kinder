export const pickRandomElement = (getRandomNumber: typeof Math.random) => <T>(
  array: T[]
): T => {
  const index = Math.floor(getRandomNumber() * array.length);
  return array[index];
};
