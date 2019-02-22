import React, { Component } from "react";
import Schedule from "../../images/undraw_schedule.svg";

export default class Hero extends Component {
  render() {
    return (
      <section className="uk-section uk-section-large uk-box-shadow-small">
        <div className="uk-flex uk-flex-center">
          <div className="uk-padding-large uk-text-center">
            <br className="uk-visable@m" />
            <h1>Life is short.</h1>
            <h3>Do stuff that matters</h3>
          </div>
          <div className="uk-visible@s">
            <img src={Schedule} style={{ height: "30em" }} />
          </div>
        </div>
      </section>
    );
  }
}
