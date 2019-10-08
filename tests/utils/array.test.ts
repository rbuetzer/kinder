import { pickRandomElement } from "../../src/utils/array";

describe("array utils", () => {
  describe("pickRandomElement", () => {
    it("returns the element at the position which corresponds to the random number", () => {
      const randomNumberGenerator = () => 0.4405492806436776;

      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = pickRandomElement(randomNumberGenerator)(array);

      expect(result).toEqual(5);
    });
    it("returns the first element, if the random number is 0", () => {
      const randomNumberGenerator = () => 0;

      const array = [1, 2, 3, 4, 5, 6, 7];

      const result = pickRandomElement(randomNumberGenerator)(array);

      expect(result).toEqual(1);
    });

    it("returns the last element, if the random number is 0.9999999999999999", () => {
      const randomNumberGenerator = () => 0.9999999999999999;

      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

      const result = pickRandomElement(randomNumberGenerator)(array);

      expect(result).toEqual(13);
    });

    it("returns undefined, if the array is empty", () => {
      const randomNumberGenerator = () => 0.8129911556084868;

      const array = [];

      const result = pickRandomElement(randomNumberGenerator)(array);

      expect(result).toBeUndefined();
    });
  });
});
