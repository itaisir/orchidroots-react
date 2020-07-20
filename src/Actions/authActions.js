import * as types from "../actionTypes/authActionTypes";
import api from "../api/api";

export const loginInit = (
  payload,
  history,
  onLoginFail,
  onLoginSuccess
) => async (dispatch) => {
  dispatch({ type: types.LOGIN_INIT });
  api.auth
    .login(payload)
    .then((value) => {
      dispatch(loginSuccess());
      onLoginSuccess();
      localStorage.setItem("auth-token", "Token " + value.token);
      history.push("/");
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data));
      onLoginFail(err.response.data.error);
    });
};

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  error,
});

export const logoutInit = (payload) => ({
  type: types.LOGOUT_INIT,
  payload,
});

export const signupInit = (payload, history, next_action) => async (
  dispatch
) => {
  dispatch({ type: types.SIGNUP_INIT });
  api.auth
    .signup(payload)
    .then((value) => {
      dispatch(signupSuccess(value));
      localStorage.setItem("auth-token", "Token " + value.token);
      history.push("/");
    })
    .catch((err) => {
      //   dispatch(signupFailure(err.response.data));
      debugger;
      next_action(err.response.data);
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
