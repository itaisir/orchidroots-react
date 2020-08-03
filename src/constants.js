export const BASEURL = "http://127.0.0.1:8000";

export const isLoggedIn = () => {
  return localStorage.getItem("auth-token") !== null;
};
export const logout = () => {
  localStorage.removeItem("auth-token");
};

export const errorsToList = function __errorsToList(errors) {
  let error_list = [];
  for (const key in errors) {
    const errs = errors[key];
    if (typeof errs === "string")
      errors.error
        ? error_list.push(errors.error)
        : error_list.push(errors.detail);
    else if (Array.isArray(errs)) error_list.push(...errs);
    else {
      error_list.push(__errorsToList(errs));
    }
    return error_list;
  }
};
