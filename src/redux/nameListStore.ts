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
import { IStoreState } from "./store";

const initialState = [] as INameCandidate[];

export type TNameListState = typeof initialState;

export const nameListActions = {
  importNames: (names: string[]) => ({
    type: "nameList/importNames" as const,
    names
  }),
  upvote: (id: number) => ({
    type: "nameList/upvote" as const,
    id
  }),
  downvote: (id: number) => ({
    type: "nameList/downvote" as const,
    id
  })
};

type TAction = TActionType<typeof nameListActions>;

export const nameListReducer: Reducer<TNameListState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "nameList/importNames":
      return action.names.map(name => ({
        value: name,
        upvotes: 0,
        downvotes: 0
      }));
    case "nameList/upvote": {
      const name = state[action.id];
      return state.map((name, id) => ({
        ...name,
        upvotes: id === action.id ? name.upvotes + 1 : name.upvotes
      }));
    }
    case "nameList/downvote": {
      const name = state[action.id];
      return state.map((name, id) => ({
        ...name,
        downvotes: id === action.id ? name.downvotes + 1 : name.downvotes
      }));
    }
  }
  return state;
};

export const isLoaded = (state: IStoreState) => state.names.length > 0;
