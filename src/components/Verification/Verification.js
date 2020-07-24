import React, { Component } from "react";
import ReactCodeInput from "react-verification-code-input";
import { Link } from "react-router-dom";

class Verification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      email: "",
    };
  }

  onCompleteCodeInput = (value) => {
    this.setState({ code: value, isLoading: true });
    this.props.verificationInit(
      { code: value, email: this.props.email },
      this.props.history,
      this.onVerificationFail,
      this.onVerificationSuccess
    );
  };
  onClickResendCode = (value) => {
    //TO DO
  };
  errorObjToList = (errors) =>
  {
    let error_list = [];
    for (const key in errors) {
      const errs = errors[key];
      if (typeof errs === "string") error_list.push(errors.error);
      else if (Array.isArray(errs)) error_list.push(...errs);
      else
      {
        error_list.push(this.errorObjToList(errs))
      }
      return error_list;
    }
  };
  onVerificationFail = (errors) => {
    errors = this.errorObjToList(errors)
    this.setState({ errors: errors, isLoading: false });
  };
  onVerificationSuccess = () => {
    this.setState({ isLoading: false });
  };
  render() {
    return (
      <div className="loginform col-md-6">
        <h3>Sign up Successfully!</h3>
        <h5>
          Please check your email '{this.props.email}' and enter your
          verification code
        </h5>

        <form onSubmit={this.submit}>
          <div className="form-group ">
            <ReactCodeInput
              onComplete={this.onCompleteCodeInput}
              value={this.state.code}
              disabled={this.state.isLoading}
              fields={5}
            />
          </div>
          <div>
            if you didn't recive the code <Link onClick={this.onClickResendCode}>resend</Link>
          </div>
          <div class="error text-danger my-1">{this.state.errors}</div>
        </form>
      </div>
    );
  }
}
export default Verification;
