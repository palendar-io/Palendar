import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="top-head" className="uk-position-fixed">
        <div className="uk-container uk-container-expand uk-background-primary">
          <nav
            className="uk-navbar uk-light"
            data-uk-navbar="mode:click; duration: 250"
          >
            <div className="uk-navbar-left">
              <div className="uk-navbar-item uk-hidden@m">
                <a className="uk-logo" href="#">
                  <img
                    className="custom-logo"
                    src="img/dashboard-logo-white.svg"
                    alt=""
                  />
                </a>
              </div>
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <a href="#">
                    Settings <span data-uk-icon="icon: triangle-down" />
                  </a>
                  <div className="uk-navbar-dropdown">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li className="uk-nav-header">YOUR ACCOUNT</li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: info" /> Summary
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: refresh" /> Edit
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: settings" /> Configuration
                        </a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: image" /> Your Data
                        </a>
                      </li>
                      <li className="uk-nav-divider" />
                      <li>
                        <a href="#">
                          <span data-uk-icon="icon: sign-out" /> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav">
                <li>
                  <a
                    href="#"
                    data-uk-icon="icon:user"
                    title="Your profile"
                    data-uk-tooltip
                  />
                </li>
                <li>
                  <a
                    href="#"
                    data-uk-icon="icon: settings"
                    title="Settings"
                    data-uk-tooltip
                  />
                </li>
                <li>
                  <a
                    href="#"
                    data-uk-icon="icon:  sign-out"
                    title="Sign Out"
                    data-uk-tooltip
                  />
                </li>
                <li>
                  <a
                    className="uk-navbar-toggle"
                    data-uk-toggle
                    data-uk-navbar-toggle-icon
                    href="#offcanvas-nav"
                    title="Offcanvas"
                    data-uk-tooltip
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
