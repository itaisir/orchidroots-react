export const BASEURL = "http://127.0.0.1:8000";

export const isLoggedIn = () => {
  return localStorage.getItem("auth-token") !== undefined;
};
export const logout = () => {
  localStorage.removeItem("auth-token");
};
