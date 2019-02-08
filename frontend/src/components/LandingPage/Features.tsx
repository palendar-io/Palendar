import React, { Component } from "react";
import Calendar from "../../images/undraw_calendar.svg";

export default class Features extends Component {
  render() {
    return (
      <section className="uk-section uk-box-shadow-small">
        <div className="uk-flex uk-flex-center">
          <div className="uk-padding-large uk-text-center">
            <br className="uk-visable@m" />
            <h2 className="">Palendars got you covered</h2>
            <h4>Get a hold of your life you animal.</h4>
          </div>
          <div
            className="uk-visible@s"
            data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: img; delay: 500"
          >
            <img src={Calendar} style={{ height: "30em" }} />
          </div>
        </div>
      </section>
    );
  }
}
