import { connect } from "react-redux";
import {
  getCountries,
  getPhotographers,
  signupInit,
} from "../../Actions/authActions";
import Signup from "./Signup";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";

const mapDispatchToProps = {
  getCountries,
  getPhotographers,
  signupInit,
};

const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  errors: state.authReducer.signupErrors,
  countries: state.authReducer.countries,
  photographers: state.authReducer.photographers,
});

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Please enter your password";
  }
  return errors;
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    reduxForm({
      form: "signupForm",
      validate,
    })(Signup)
  )
);
