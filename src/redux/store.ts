import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer
} from "redux";
import createSagaMiddleware from "redux-saga";
import { IName } from "../models/IName";
import { TActionType } from "./types";

const initialState = {
  names: {} as { [id: number]: IName }
};

export type TState = typeof initialState;

export const actions = {
  upvote: (id: number) => ({
    type: "upvote" as const,
    id
  }),
  downvote: (id: number) => ({
    type: "downvote" as const,
    id
  })
};

export type TAction = TActionType<typeof actions>;

export const reducer: Reducer<TState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "upvote": {
      const { names } = state;
      const name = names[action.id];
      return {
        ...state,
        names: {
          ...names,
          [action.id]: {
            ...name,
            upvotes: name.upvotes + 1
          }
        }
      };
    }
    case "downvote": {
      const { names } = state;
      const name = names[action.id];
      return {
        ...state,
        names: {
          ...names,
          [action.id]: {
            ...name,
            downvotes: name.downvotes + 1
          }
        }
      };
    }
  }
  return state;
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducer, enhancer);
