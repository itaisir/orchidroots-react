import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: [],
      isLoading: false,
    };
  }
  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  onLoginFail = (errors) => {
    this.setState({ errors: errors, isLoading: false });
  };
  onLoginSuccess = () => {
    this.setState({ isLoading: false });
  };
  submit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    let { username, password } = this.state;
    this.props.loginInit(
      { username, password },
      this.props.history,
      this.onLoginFail,
      this.onLoginSuccess
    );
  };
  render() {
    return (
      <div className="loginform col-md-6">
        <h3>Login</h3>

        <form onSubmit={this.submit}>
          <div className="form-group ">
            <label className="col-form-label  requiredField">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              onChange={this.changeUsername}
              value={this.state.username}
              placeholder="Enter username"
              disabled={this.state.isLoading}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              name="password"
              type="password"
              onChange={this.changePassword}
              value={this.state.password}
              className="form-control"
              placeholder="Password"
              disabled={this.state.isLoading}
              required
            />
          </div>
          <div class="error text-danger my-1">{this.state.errors}</div>
          {this.state.isLoading ? (
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          ) : (
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          )}
          <div class="login_message row d-flex justify-content-between align-items-center">
            <div>
              Don’t have an account ? <a href="/signup"> Sign up </a>
            </div>
            <div class="">
              <a href="#" class="btn btn-primary facebook">
                <span>Login with Facebook</span> <i class="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
