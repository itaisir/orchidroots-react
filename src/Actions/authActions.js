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

export const getCountries = () => async (dispatch) => {
  dispatch({ type: types.GET_COUNTRIES });
  api.auth
    .getCountries()
    .then((value) => {
      dispatch(getCountriesSuccess(value));
    })
    .catch((err) => {
      dispatch(getCountriesSuccess([]));
    });
};

export const getCountriesSuccess = (data) => ({
  type: types.GET_COUNTRIES_SUCCESS,
  countries: data,
});

export const getPhotographers = () => async (dispatch) => {
  dispatch({ type: types.GET_PHOTOGRAPHERS });
  api.auth
    .getPhotographers()
    .then((value) => {
      dispatch(getPhotographersSuccess(value));
    })
    .catch((err) => {
      dispatch(getPhotographersSuccess([]));
    });
};

export const getPhotographersSuccess = (data) => ({
  type: types.GET_PHOTOGRAPHERS_SUCCESS,
  photographers: data,
});

export const logoutInit = (payload) => ({
  type: types.LOGOUT_INIT,
  payload,
});

export const signupInit = (
  payload,
  history,
  onSignupFail,
  onSignupSuccess
) => async (dispatch) => {
  dispatch({ type: types.SIGNUP_INIT });
  api.auth
    .signUp(payload)
    .then((value) => {
      dispatch(signupSuccess(payload.email));
      onSignupSuccess();
      history.push("/verification");
    })
    .catch((err) => {
      dispatch(signupFailure());
      onSignupFail(err.response.data);
    });
};

export const signupSuccess = (email) => ({
  type: types.SIGNUP_SUCCESS,
  email,
});
export const signupFailure = (error) => ({
  type: types.SIGNUP_FAILURE,
  error,
});

export const verificationInit = (
  payload,
  history,
  onVerificationFail,
  onVerificationSuccess
) => async (dispatch) => {
  dispatch({ type: types.VERIFICATION_INIT });
  api.auth
    .verifyCode(payload)
    .then(() => {
      dispatch(verificationSuccess());
      onVerificationSuccess();
      history.push("/login");
    })
    .catch((err) => {
      dispatch(verificationFailure());
      onVerificationFail(err.response.data);
    });
};

export const verificationSuccess = () => ({
  type: types.VERIFICATION_SUCCESS,
});

export const verificationFailure = (error) => ({
  type: types.VERIFICATION_FAILURE,
  error,
});
