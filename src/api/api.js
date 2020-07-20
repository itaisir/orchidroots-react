import Axios from "./Axios";

export default {
    auth: {
        login: (loginData) => Axios.post("v1/accounts/login/", loginData),
        signUp: (signUpData) => Axios.post("v1/accounts/signup/", signUpData),
        forgetPassword: (email) => Axios.post("v1/accounts/forget-password/", { email }),
    }
};
