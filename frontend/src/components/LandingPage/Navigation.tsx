import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

export default class Navigation extends Component {
  render() {
    return (
      <header className="uk-box-shadow-small">
        <div className="uk-container uk-container-expand">
          <nav className="uk-navbar" data-uk-navbar>
            <div className="uk-navbar-left ">
              <a className="uk-navbar-item uk-logo">
                <img src={logo} style={{ height: "1.5em" }} />
                Palendar
              </a>
            </div>
            <div className="uk-navbar-right uk-visible@m">
              <ul className="uk-navbar-nav">
                <li className="uk-navbar-item">
                  <a>Features</a>
                </li>
                <li className="uk-navbar-item">
                  <a>Pricing</a>
                </li>
                <li className="uk-navbar-item">
                  <a>About</a>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <NavLink to="/auth">
                  <button
                    className="uk-button uk-button-primary"
                    style={{ borderRadius: "25px" }}
                  >
                    Login
                  </button>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
