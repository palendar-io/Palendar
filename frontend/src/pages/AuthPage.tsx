import React, { Component, FormEvent, ChangeEvent } from "react";
import { NavLink } from "react-router-dom";

export default class AuthPage extends Component {
  constructor(props: any) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value, [name]: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    console.log(this.state);
  };

  render() {
    return (
      <section className="uk-height-viewport uk-background-muted uk-flex uk-flex-middle">
        <div className="uk-container uk-container-small">
          <div className="uk-card uk-card-default">
            <div className="uk-card-header ">
              <h3 className="uk-card-title">Login</h3>
            </div>
            <div className="uk-card-body">
              <form onSubmit={this.handleSubmit}>
                <fieldset className="uk-fieldset">
                  {/* Email */}
                  <legend className="uk-legend-small">Email:</legend>
                  <div className="uk-margin">
                    <div className="uk-inline">
                      <a
                        className="uk-form-icon"
                        href="#"
                        uk-icon="icon: mail"
                      />
                      <input
                        className="uk-input"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  {/* Password */}
                  <legend className="uk-legend-small">Password:</legend>
                  <div className="uk-margin">
                    <div className="uk-inline">
                      <a
                        className="uk-form-icon"
                        href="#"
                        uk-icon="icon: lock"
                      />
                      <input
                        className="uk-input"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="uk-text-center uk-margin">
                    <NavLink to="/dashboard/calendar">
                      <button className="uk-button uk-button-primary ">
                        Submit
                      </button>
                    </NavLink>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
