import React, { Component } from "react";
import "./signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      isLoading: false,
      username: "",
      password: "",
      confirm_password: "",
      fullname: "",
      email: "",
      profile: {
        photo_credit_name: "",
        specialty: "",
        current_credit_name_id: "",
        country: "",
      },
    };
  }

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


  onSignupFail = (errors) => {
    let error_list = this.errorObjToList(errors);
    this.setState({ errors: error_list, isLoading: false });
  };
  onSignupSuccess = () => {
    this.setState({ isLoading: false });
  };
  componentDidMount() {
    if (this.props.countries.length === 0) this.props.getCountries();
    if (this.props.photographers.length === 0) this.props.getPhotographers();
  }
  onChangeControlText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onChangeProfileControlText = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        ...prevState,
        profile: {
          ...prevState.profile,
          [event.target.name]: event.target.value,
        },
      };
    });
  };
  submit = (event) => {
    event.preventDefault();
    this.props.signupInit(
      this.state,
      this.props.history,
      this.onSignupFail,
      this.onSignupSuccess
    );
  };
  render() {
    return (
      <div className="signupform col-md-6">
        <h3>signup</h3>

        <form onSubmit={this.submit}>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="validationCustomUsername">Username</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  name="username"
                  class="form-control"
                  id="validationCustomUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  onChange={this.onChangeControlText}
                  value={this.state.username}
                  disabled={this.state.isLoading}
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={this.onChangeControlText}
                value={this.state.password}
                className="form-control"
                placeholder="Password"
                disabled={this.state.isLoading}
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="confirm_password">Confirm Password</label>
              <input
                name="confirm_password"
                type="password"
                onChange={this.onChangeControlText}
                value={this.state.confirm_password}
                className="form-control"
                placeholder="Confirm Password"
                disabled={this.state.isLoading}
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label for="fullname">Full name</label>
              <input
                name="fullname"
                type="text"
                onChange={this.onChangeControlText}
                value={this.state.fullname}
                className="form-control"
                placeholder="Full name"
                disabled={this.state.isLoading}
                required
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="email">Email</label>
              <input
                name="email"
                type="text"
                onChange={this.onChangeControlText}
                value={this.state.email}
                className="form-control"
                placeholder="Email"
                disabled={this.state.isLoading}
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="photo_credit_name">
                The name you prefer to use for credit attribution
              </label>
              <input
                name="photo_credit_name"
                type="text"
                onChange={this.onChangeProfileControlText}
                value={this.state.profile.photo_credit_name}
                className="form-control"
                placeholder="Photo Credit Name"
                disabled={this.state.isLoading}
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="current_credit_name_id">
                The name currently used for credit attribution in OrchidRoots.
                Leave blank if you do not see your name iin the list. WARNING:
                your account will be removed if you selected name that is not
                yours.
              </label>
              <select
                className=" form-control"
                name="current_credit_name_id"
                onChange={this.onChangeProfileControlText}
                value={this.state.profile.current_credit_name_id}
              >
                <option value="-1" selected>
                  --- Select your credit attribution ---
                </option>
                {this.props.photographers.map((photographer) => {
                  return (
                    <option value={photographer.author_id}>
                      {photographer.displayname}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="specialty">
                Orchid related Interest. List genera or alliances of your
                interest
              </label>
              <input
                name="specialty"
                type="text"
                onChange={this.onChangeProfileControlText}
                value={this.state.profile.specialty}
                className="form-control"
                placeholder="Specialty"
                disabled={this.state.isLoading}
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-12 mb-3">
              <label for="country">Select a country:</label>
              <select
                className=" form-control"
                name="country"
                onChange={this.onChangeProfileControlText}
                value={this.state.profile.country}
              >
                <option value="-1" selected>
                  --- Select Country ---
                </option>
                {this.props.countries.map((country) => {
                  return <option value={country.pk}>{country.country}</option>;
                })}
              </select>
            </div>
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
              Have an account ? <a href="/login"> Login </a>
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
export default Signup;
