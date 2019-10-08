import { Reducer } from "redux";
import { INameCandidate } from "../models/INameCandidate";
import { TActionType } from "./types";
import { IStoreState } from "./store";

const initialState = {
  currentNameId: undefined as number | undefined,
  remainingNameIds: [] as number[],
  allNameIds: [] as number[]
};

export type TStackState = typeof initialState;

export const stackStoreActions = {
  init: (nameIds: number[]) => ({
    type: "stack/init" as const,
    nameIds
  }),
  pickCard: (id: number) => ({
    type: "stack/pickCard" as const,
    id
  })
};

type TAction = TActionType<typeof stackStoreActions>;

export const stackReducer: Reducer<TStackState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "stack/init":
      return {
        ...state,
        currentNameId: undefined,
        remainingNameIds: action.nameIds,
        allNameIds: action.nameIds
      };
    case "stack/pickCard": {
      const remainingIds = state.remainingNameIds.filter(
        id => id !== action.id
      );
      return {
        ...state,
        currentNameId: action.id,
        remainingNameIds:
          remainingIds.length > 0 ? remainingIds : state.allNameIds
      };
    }
  }
  return state;
};

export const getNameIdsInStack = (state: IStoreState) =>
  state.stack.remainingNameIds;

export const getCurrentName = (state: IStoreState): INameCandidate =>
  state.names[state.stack.currentNameId];
