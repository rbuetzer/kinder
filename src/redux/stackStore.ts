import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer
} from "redux";
import createSagaMiddleware from "redux-saga";
import { INameCandidate } from "../models/INameCandidate";
import { TActionType } from "./types";

const initialState = {
  currentNameId: undefined as number | undefined,
  remainingNameIds: [] as number[]
};

export type TStackState = typeof initialState;

export const stackStoreActions = {
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
    case "stack/pickCard": {
      return {
        ...state,
        currentNameId: action.id,
        remainingNameIds: state.remainingNameIds.filter(id => id !== action.id)
      };
    }
  }
  return state;
};
