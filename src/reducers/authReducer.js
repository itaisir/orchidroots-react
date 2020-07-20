import produce from "immer";
import * as types from "../actionTypes/authActionTypes";

const initialState = {
  isLoggedIn: false,
  signUpErrors: [],
  forgetPasswordErrors: [],
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_INIT:
        draft.isLoggedIn = false;
        return;
      case types.LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        return;
      case types.LOGIN_FAILURE:
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
