import Axios from "./Axios";

export default {
  auth: {
    login: (loginData) => Axios.post("v1/accounts/login/", loginData),
    signUp: (signUpData) => Axios.post("v1/accounts/signup/", signUpData),
    verifyCode: (verificationData) => Axios.post("v1/accounts/verify-code/", verificationData),
    getCountries: () => Axios.get("v1/accounts/countries/"),
    getPhotographers: () => Axios.get("v1/accounts/photographers/"),
    forgetPassword: (email) =>
      Axios.post("v1/accounts/forget-password/", { email }),
  },
};
