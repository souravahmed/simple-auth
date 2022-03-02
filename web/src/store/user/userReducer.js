import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  USER_DATA_FAILURE,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
} from "./userActionType";

const initialState = {
  loading: false,
  user: {},
  userDetails: {},
  error: "",
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case LOGIN_USER_FAILURE:
    case USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        user: {},
        userDetails: {},
      };

    default:
      return state;
  }
};
