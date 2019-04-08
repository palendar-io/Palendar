import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./dashboard.css";
import ProfileImage from "../../images/avatar.svg";
import Logo from "../../logo.svg";

export default class SideMenu extends Component {
  render() {
    return (
      <div>
        <aside id="left-col" className="uk-light uk-visable@m">
          <div className="left-logo uk-flex uk-flex-middle">
            <img className="custom-logo" src={Logo} alt="" />
          </div>
          <div className="left-content-box  content-box-dark">
            <img
              src={ProfileImage}
              alt=""
              className="uk-border-circle profile-img"
            />
            <h4 className="uk-text-center uk-margin-remove-vertical text-light">
              Palendar
            </h4>

            <div className="uk-position-relative uk-text-center uk-display-block">
              <a
                href="#"
                className="uk-text-small uk-text-muted uk-display-block uk-text-center"
                data-uk-icon="icon: triangle-down; ratio: 0.7"
              >
                Admin
              </a>
              {/* <!-- user dropdown --> */}
              <div
                className="uk-dropdown user-drop"
                data-uk-dropdown="mode: click; pos: bottom-center; animation: uk-animation-slide-bottom-small; duration: 150"
              >
                <ul className="uk-nav uk-dropdown-nav uk-text-left">
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
                      <span data-uk-icon="icon: sign-out" /> Sign Out
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /user dropdown --> */}
            </div>
          </div>

          <div className="left-nav-wrap">
            <ul
              className="uk-nav uk-nav-default uk-nav-parent-icon"
              data-uk-nav
            >
              <li className="uk-nav-header">ACTIONS</li>

              <li>
                <NavLink to="/dashboard/home">
                  <a href="#">
                    <span
                      data-uk-icon="icon: home"
                      className="uk-margin-small-right"
                    />
                    Home
                  </a>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/calendar">
                  <a href="#">
                    <span
                      data-uk-icon="icon: calendar"
                      className="uk-margin-small-right"
                    />
                    Calendar
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/messages">
                  <a href="#">
                    <span
                      data-uk-icon="icon: comments"
                      className="uk-margin-small-right"
                    />
                    Messages
                  </a>
                </NavLink>
              </li>
              <li>
                <Link to="events">
                  <a href="#">
                    <span
                      data-uk-icon="icon: list"
                      className="uk-margin-small-right"
                    />
                    Tasks & Events
                  </a>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span
                    data-uk-icon="icon: lifesaver"
                    className="uk-margin-small-right"
                  />
                  Tips
                </a>
              </li>
            </ul>
            <div className="left-content-box uk-margin-top">
              <h5>Completed Tasks</h5>
              <div>
                <span className="uk-text-small">
                  Personal <small>(+50)</small>
                </span>
                <progress className="uk-progress" value="50" max="100" />
              </div>
              <div>
                <span className="uk-text-small">
                  Work <small>(+78)</small>
                </span>
                <progress
                  className="uk-progress success"
                  value="78"
                  max="100"
                />
              </div>
              <div>
                <span className="uk-text-small">
                  Missed <small>(-12)</small>
                </span>
                <progress
                  className="uk-progress warning"
                  value="12"
                  max="100"
                />
              </div>
            </div>
          </div>

          <div className="bar-bottom">
            <ul
              className="uk-subnav uk-flex uk-flex-center uk-child-width-1-5"
              data-uk-grid
            >
              <li>
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-icon="icon: home"
                  title="Home"
                  data-uk-tooltip
                />
              </li>
              <li>
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-icon="icon: settings"
                  title="Settings"
                  data-uk-tooltip
                />
              </li>
              <li>
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-icon="icon: social"
                  title="Social"
                  data-uk-tooltip
                />
              </li>

              <li>
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-tooltip="Sign out"
                  data-uk-icon="icon: sign-out"
                />
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}
