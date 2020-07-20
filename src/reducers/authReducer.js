import produce from "immer";
import * as types from "../actionTypes/authActionTypes";

const initialState = {
  loading: false,
  isLoggedIn: false,
  loginErrors: [],
  signUpErrors: [],
  forgetPasswordErrors: [],
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CLEAR_ERRORS:
        debugger
        draft.loginErrors = [];
        draft.loading = false;
        return;
        case types.LOGIN_INIT:
          debugger
          draft.loginErrors = [];
          draft.loading = true;
          return;
      case types.LOGIN_SUCCESS:
        draft.loading = false;
        draft.isLoggedIn = true;
        return;
      case types.LOGIN_FAILURE:
        debugger
        draft.loginErrors.push(action.error.error);
        draft.loading = false;
        draft.isLoggedIn = false;
        return;

      case types.LOGOUT_INIT:
        draft.isLoggedIn = false;
        return;

      case types.SIGNUP_INIT:
        draft.signUpErrors = [];
        draft.loading = true;
        return;
      case types.SIGNUP_SUCCESS:
        draft.loading = false;
        return;
      case types.SIGNUP_FAILURE:
        for (const key in action.error) {
          const errs = action.error[key];
          if (typeof errs == "string")
            draft.signUpErrors.push(action.error.error);
          else if (Array.isArray(errs)) draft.signUpErrors.push(...errs);
        }
        draft.loading = false;
        return;

      case types.FORGET_PASSWORD_INIT:
        draft.forgetPasswordErrors = [];
        draft.loading = true;
        return;
      case types.FORGET_PASSWORD_SUCCESS:
        draft.loading = false;
        return;
      case types.FORGET_PASSWORD_FAILURE:
        draft.forgetPasswordErrors.push(action.error.details);
        draft.loading = false;
        return;
    }
  });

export default authReducer;
