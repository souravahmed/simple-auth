import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_USER_REQUEST, USER_DATA_REQUEST } from "./userActionType";
import UserService from "../../services/UserService";
import {
  getUserDataSuccess,
  loginUserFailure,
  loginUserSuccess,
} from "./userAction";

function* loginSaga(action) {
  try {
    const { userName, password } = action.payload;
    const { onSuccess } = action.meta;
    const data = yield call(UserService.login, userName, password);
    yield put(loginUserSuccess(data));
    onSuccess(); // call back to login page;
  } catch (error) {
    yield put(loginUserFailure(error.response?.data.message));
  }
}

function* getUserDataSaga(action) {
  const data = yield call(UserService.getUserData, action.token);
  yield put(getUserDataSuccess(data));
}

export function* userWatcherSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, loginSaga);
  yield takeLatest(USER_DATA_REQUEST, getUserDataSaga);
}
