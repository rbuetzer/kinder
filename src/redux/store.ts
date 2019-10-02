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

export type TAction = TActionType<typeof nameListActions>;

export const reducer: Reducer<TState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "nameList/importNames":
      return {
        ...state,
        names: action.names.map(name => ({
          value: name,
          upvotes: 0,
          downvotes: 0
        }))
      };
    case "nameList/upvote": {
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
    case "nameList/downvote": {
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
