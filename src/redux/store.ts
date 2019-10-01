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
  names: [] as INameCandidate[]
};

export type TState = typeof initialState;

export const actions = {
  importNames: (names: string[]) => ({
    type: "importNames" as const,
    names
  }),
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
    case "importNames":
      return {
        ...state,
        names: action.names.map(name => ({
          value: name,
          upvotes: 0,
          downvotes: 0
        }))
      };
    case "upvote": {
      const { names } = state;
      const name = names[action.id];
      return {
        ...state,
        names: names.map((name, id) => ({
          ...name,
          upvotes: id === action.id ? name.upvotes + 1 : name.upvotes
        }))
      };
    }
    case "downvote": {
      const { names } = state;
      const name = names[action.id];
      return {
        ...state,
        names: names.map((name, id) => ({
          ...name,
          downvotes: id === action.id ? name.downvotes + 1 : name.downvotes
        }))
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
