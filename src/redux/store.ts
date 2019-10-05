import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { nameListReducer, TNameListState } from "./nameListStore";
import { stackReducer, TStackState } from "./stackStore";
import { sagas } from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface IStoreState {
  names: TNameListState;
  stack: TStackState;
}

const reducer = combineReducers({
  names: nameListReducer,
  stack: stackReducer
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
sagaMiddleware.run(sagas);
