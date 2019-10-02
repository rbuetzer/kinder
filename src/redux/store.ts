import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { nameListReducer, TNameListState } from "./nameListStore";

export type TState = {
  names: TNameListState;
};

const reducer = combineReducers({
  names: nameListReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducer, enhancer);
