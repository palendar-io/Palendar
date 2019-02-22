import React, { Component } from "react";

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
                <a href="#">
                  <span
                    data-uk-icon="icon: home"
                    className="uk-margin-small-right"
                  />
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span
                    data-uk-icon="icon: calendar"
                    className="uk-margin-small-right"
                  />
                  Calendar
                </a>
              </li>
              <li className="uk-parent">
                <a href="#">
                  <span
                    data-uk-icon="icon: comments"
                    className="uk-margin-small-right"
                  />
                  Messages
                </a>
                <ul className="uk-nav-sub">
                  <li>
                    <a
                      title="Article"
                      href="https://zzseba78.github.io/Kick-Off/article.html"
                    >
                      Article
                    </a>
                  </li>
                  <li>
                    <a
                      title="Album"
                      href="https://zzseba78.github.io/Kick-Off/album.html"
                    >
                      Album
                    </a>
                  </li>
                  <li>
                    <a
                      title="Cover"
                      href="https://zzseba78.github.io/Kick-Off/cover.html"
                    >
                      Cover
                    </a>
                  </li>
                  <li>
                    <a
                      title="Cards"
                      href="https://zzseba78.github.io/Kick-Off/cards.html"
                    >
                      Cards
                    </a>
                  </li>
                  <li>
                    <a
                      title="News Blog"
                      href="https://zzseba78.github.io/Kick-Off/newsBlog.html"
                    >
                      News Blog
                    </a>
                  </li>
                  <li>
                    <a
                      title="Price"
                      href="https://zzseba78.github.io/Kick-Off/price.html"
                    >
                      Price
                    </a>
                  </li>
                  <li>
                    <a
                      title="Login"
                      href="https://zzseba78.github.io/Kick-Off/login.html"
                    >
                      Login
                    </a>
                  </li>
                  <li>
                    <a
                      title="Login-Dark"
                      href="https://zzseba78.github.io/Kick-Off/login-dark.html"
                    >
                      Login - Dark
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span
                    data-uk-icon="icon: list"
                    className="uk-margin-small-right"
                  />
                  Tasks & Events
                </a>
              </li>
              <li>
                <a href="#">
                  <span
                    data-uk-icon="icon: thumbnails"
                    className="uk-margin-small-right"
                  />
                  Featured Content
                </a>
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
