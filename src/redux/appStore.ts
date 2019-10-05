import { Reducer } from "redux";
import { TActionType } from "./types";
import { IStoreState } from "./store";
import { SubPage } from "../models/SubPage";

const initialState = { subPage: SubPage.Voting };

export type TAppState = typeof initialState;

export const appAction = {
  selectSubPage: (subPage: SubPage) => ({
    type: "subPage/selectSubPage" as const,
    subPage
  })
};

type TAction = TActionType<typeof appAction>;

export const appReducer: Reducer<TAppState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "subPage/selectSubPage":
      return {
        ...state,
        subPage: action.subPage
      };
  }
  return state;
};

export const getSubPage = (state: IStoreState) => state.app.subPage;
