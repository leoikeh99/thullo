import {
  AUTH,
  AUTH_FAIL,
  CLEAR_ERROR,
  GET_USER,
  GET_USER_FAIL,
  SET_LOADER,
  SET_LOADER2,
} from "../actions/types";

const initialState = {
  loader: false,
  loader2: true,
  status: null,
  token: localStorage.getItem("token"),
  user: null,
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loader: false,
        authError: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case AUTH_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loader: false,
        user: null,
        token: null,
        authError: action.payload,
      };

    case GET_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        loader2: false,
        user: null,
        token: null,
      };

    case SET_LOADER:
      return {
        ...state,
        loader: true,
      };

    case SET_LOADER2:
      return {
        ...state,
        loader2: true,
      };

    case CLEAR_ERROR:
      console.log("yes");
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
};

export default authReducer;
