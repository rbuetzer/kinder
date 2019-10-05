import {
  appAction,
  appReducer,
  getSubPage,
  TAppState
} from "../../src/redux/appStore";
import { SubPage } from "../../src/models/SubPage";
import { IStoreState } from "../../src/redux/store";

describe("appStore", () => {
  describe("setSubPage", () => {
    it("sets the subPage", () => {
      const initialState: TAppState = {
        subPage: SubPage.Voting
      };

      const action = appAction.selectSubPage(SubPage.Results);

      const result = [action].reduce(appReducer, initialState);

      expect(result).toEqual({
        subPage: SubPage.Results
      });
    });
  });
  describe("getSubPage", () => {
    it("returns the subPage", () => {
      const state = {
        app: {
          subPage: SubPage.Results
        }
      } as IStoreState;

      const result = getSubPage(state);

      expect(result).toEqual(SubPage.Results);
    });
  });
});
