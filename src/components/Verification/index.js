import { connect } from "react-redux";
import { verificationInit } from "../../Actions/authActions";
import Login from "./Verification"
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";


const mapDispatchToProps = {
    verificationInit
};

const mapStateToProps = (state) => {
    return {
    loading: state.authReducer.loading,
    email: state.authReducer.signUpEmail
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
