import { connect } from "react-redux";
import { loginInit,clearErrors } from "../../Actions/authActions";
import Login from "./Login"
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";


const mapDispatchToProps = {
    loginInit,
    clearErrors
};

const mapStateToProps = (state) => {
    debugger
    return {
    loading: state.authReducer.loading,
    errors: state.authReducer.loginErrors
}}

const validate = (values) => {
    const errors= {}
    if (!values.email) {
        errors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Please enter your password'
    }
    return errors;
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm({
        form: 'loginForm',
        validate,
    })(Login)
));
