import * as types from "../actionTypes/authActionTypes";
import api from "../api/api";

export const loginInit = (payload, history) => async (dispatch) => {
  dispatch({ type: types.LOGIN_INIT });
  api.auth
    .login(payload)
    .then((value) => {
      dispatch(loginSuccess(value));
      localStorage.setItem("auth-token", "Token " + value.token);
      history.push("/");
    })
    .catch((err) => {
      debugger;
      dispatch(loginFailure(err.response.data));
    });
};

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  error,
});

export const logoutInit = (payload) => ({
  type: types.LOGOUT_INIT,
  payload,
});

export const signupInit = (payload, history) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_INIT });
  api.auth
    .signup(payload)
    .then((value) => {
      dispatch(signupSuccess(value));
      localStorage.setItem("auth-token", "Token " + value.token);
      history.push("/");
    })
    .catch((err) => {
      debugger;
      dispatch(signupFailure(err.response.data));
    });
};

export const signupSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});
export const signupFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  error,
});



export const clearErrors = () => ({
    type: types.CLEAR_ERRORS,
  });