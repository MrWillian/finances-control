import { all, takeLatest } from "redux-saga/effects";

import { load, remove } from "./accounts/sagas";
import { AccountsTypes } from "./accounts/types";

export default function* rootSaga() {
  return yield all([
    takeLatest(AccountsTypes.LOAD_REQUEST, load),
    takeLatest(AccountsTypes.DELETE_ACCOUNT, remove),
  ]);
}