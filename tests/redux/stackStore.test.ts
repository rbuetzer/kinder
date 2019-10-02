import {
  nameListActions,
  nameListReducer,
  TNameListState
} from "../../src/redux/nameListStore";
import {
  stackStoreActions,
  stackReducer,
  TStackState
} from "../../src/redux/stackStore";

describe("stackStore", () => {
  describe("init", () => {
    it("initializes allNameIds and remainingNameIds", () => {
      const initialState: TStackState = {
        currentNameId: 2,
        remainingNameIds: [1],
        allNameIds: [1, 2]
      };

      const action = stackStoreActions.init([1, 2, 3, 4]);

      const result = [action].reduce(stackReducer, initialState);

      expect(result).toEqual({
        currentNameId: undefined,
        remainingNameIds: [1, 2, 3, 4],
        allNameIds: [1, 2, 3, 4]
      });
    });
  });

  describe("pickCard", () => {
    it("sets the card as current and removes it from the remaining cards", () => {
      const initialState: TStackState = {
        currentNameId: 7,
        remainingNameIds: [1, 4, 5, 8],
        allNameIds: [1, 2, 3, 4, 5, 6, 7, 8]
      };

      const action = stackStoreActions.pickCard(4);

      const result = [action].reduce(stackReducer, initialState);

      expect(result).toEqual({
        currentNameId: 4,
        remainingNameIds: [1, 5, 8],
        allNameIds: [1, 2, 3, 4, 5, 6, 7, 8]
      });
    });
  });
});
