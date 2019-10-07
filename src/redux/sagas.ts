import { call, put, select, takeEvery } from "redux-saga/effects";
import { TActionType } from "./types";
import { nameListActions } from "./nameListStore";
import { getNameIdsInStack, stackStoreActions } from "./stackStore";
import { pickRandomElement } from "../utils/array";
import { Action } from "redux";
import { appAction } from "./appStore";
import { SubPage } from "../models/SubPage";

const ACTION_IMPORT_FILE = "importFile";
const ACTION_IMPORT_NAMES = "importNames";
const ACTION_UPVOTE = "upvote";
const ACTION_DOWNVOTE = "downvote";
const ACTION_NEXT_CARD = "nextCard";

export const sagaActions = {
  importFile: (fileContent: string) => ({
    type: ACTION_IMPORT_FILE,
    fileContent
  }),
  importNames: (names: string[]) => ({
    type: ACTION_IMPORT_NAMES,
    names
  }),
  upvote: () => ({
    type: ACTION_UPVOTE
  }),
  downvote: () => ({
    type: ACTION_DOWNVOTE
  }),
  nextCard: () => ({
    type: ACTION_NEXT_CARD
  })
};

type TAction = TActionType<typeof sagaActions>;

export function* importFileSaga(
  action: ReturnType<typeof sagaActions.importFile>
) {
  const array = action.fileContent
    .split("\n")
    .map(string => string.replace(/^\s+|\s+$/g, ""))
    .filter(string => string.length > 0);
  yield put(sagaActions.importNames(array));
  yield put(appAction.selectSubPage(SubPage.Voting));
}

export function* importNamesSaga(
  action: ReturnType<typeof sagaActions.importNames>
) {
  yield put(nameListActions.importNames(action.names));
  yield put(stackStoreActions.init(action.names.map((_, i) => i)));
  yield put(sagaActions.nextCard());
}

function* nextCardSaga(action: ReturnType<typeof sagaActions.importNames>) {
  const nameIds = yield select(getNameIdsInStack);
  const pickedCardId = yield call(pickRandomElement(Math.random), nameIds);
  yield put(stackStoreActions.pickCard(pickedCardId));
}

function* voteSaga(voteActionCreator: (id: number) => Action) {
  const id = yield select(state => state.stack.currentNameId);
  yield put(voteActionCreator(id));
  yield put(sagaActions.nextCard());
}

function* upvoteSaga() {
  yield voteSaga(nameListActions.upvote);
}

function* downvoteSaga() {
  yield voteSaga(nameListActions.downvote);
}

export function* sagas() {
  yield takeEvery(ACTION_IMPORT_FILE, importFileSaga);
  yield takeEvery(ACTION_IMPORT_NAMES, importNamesSaga);
  yield takeEvery(ACTION_NEXT_CARD, nextCardSaga);
  yield takeEvery(ACTION_UPVOTE, upvoteSaga);
  yield takeEvery(ACTION_DOWNVOTE, downvoteSaga);
}
