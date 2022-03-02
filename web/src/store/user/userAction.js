import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  USER_DATA_FAILURE,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
} from "./userActionType";

export const loginUserRequest = (userName, password, onSuccessLoginHandler) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { userName, password },
    meta: {
      onSuccess: onSuccessLoginHandler,
    },
  };
};

export const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    error: error,
  };
};

export const getUserDataRequest = (token) => {
  return {
    type: USER_DATA_REQUEST,
    token,
  };
};

export const getUserDataSuccess = (data) => {
  return {
    type: USER_DATA_SUCCESS,
    payload: data,
  };
};

export const getUserDataFailure = (error) => {
  return {
    type: USER_DATA_FAILURE,
    error,
  };
};
