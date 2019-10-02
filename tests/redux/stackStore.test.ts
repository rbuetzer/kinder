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
  describe("pickCard", () => {
    it("sets the card as current and removes it from the remaining cards", () => {
      const initialState: TStackState = {
        currentNameId: 7,
        remainingNameIds: [1, 4, 5, 8]
      };

      const action = stackStoreActions.pickCard(4);

      const result = [action].reduce(stackReducer, initialState);

      expect(result).toEqual({
        currentNameId: 4,
        remainingNameIds: [1, 5, 8]
      });
    });
  });
});
