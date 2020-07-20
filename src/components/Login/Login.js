import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  componentWillReceiveProps() {
    debugger
    this.props.clearErrors();
  }
  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  submit = (event) => {
    event.preventDefault();
    this.props.loginInit(this.state, this.props.history);
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
              disabled={this.props.loading}
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
              disabled={this.props.loading}
              required
            />
          </div>
          <div class="error text-danger my-1">{this.props.errors}</div>
          {this.props.loading ? (
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
