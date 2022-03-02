import { all, fork } from "redux-saga/effects";
import { userWatcherSaga } from "./user/userSaga";

export default function* rootSaga() {
  yield all([fork(userWatcherSaga)]);
}
