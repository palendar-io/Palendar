import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <section className="uk-section uk-section-muted">
        <div className="uk-container uk-container-small">
          <header className="uk-text-center">
            <h1 className="uk-heading-primary">Price</h1>
            <p className="uk-width-3-5 uk-margin-auto">
              Our Product is the easiest way for teams to track their works
              progress. Our advance plans give you more tools to get the job
              done.
            </p>
          </header>
        </div>
        <div
          className="uk-grid uk-grid-small uk-child-width-1-3@m uk-margin-medium-top uk-grid-match uk-flex uk-flex-center"
          data-uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div > .uk-card; delay: 400"
          uk-grid="true"
        >
          {/* PRICE */}
          <div className="uk-width-medium uk-margin-bottom">
            <div className="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
              <div className="uk-card-header uk-text-center">
                <h4 className="uk-text-bold">Personal</h4>
              </div>
              <div className="uk-card-body uk-flex-1">
                <div className="uk-flex uk-flex-middle uk-flex-center">
                  <span
                    style={{
                      fontSize: "4em",
                      fontWeight: 200,
                      lineHeight: "1em"
                    }}
                  >
                    <span style={{ fontSize: "0.5em" }}>$</span>0
                  </span>
                </div>
                <div className="uk-text-small uk-text-center uk-text-muted">
                  <ul>
                    <li>10 Friends Included</li>
                    <li>1GB of Storage</li>
                    <li>10 Created Events</li>
                  </ul>
                </div>
                {/* Card Footer */}
                <div className="uk-card-footer uk-text-center">
                  <button className="uk-button uk-button-primary">
                    Sign-up
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* PRICE */}
          <div className="uk-width-medium uk-margin-bottom">
            <div className="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
              <div className="uk-card-header uk-text-center">
                <h4 className="uk-text-bold">Professional</h4>
              </div>
              <div className="uk-card-body uk-flex-1">
                <div className="uk-flex uk-flex-middle uk-flex-center">
                  <span
                    style={{
                      fontSize: "4em",
                      fontWeight: 200,
                      lineHeight: "1em"
                    }}
                  >
                    <span style={{ fontSize: "0.5em" }}>$</span>19.99
                  </span>
                </div>
                <div className="uk-text-small uk-text-center uk-text-muted">
                  <ul>
                    <li>10 Friends Included</li>
                    <li>1GB of Storage</li>
                    <li>10 Created Events</li>
                  </ul>
                </div>
                {/* Card Footer */}
                <div className="uk-card-footer uk-text-center">
                  <button className="uk-button uk-button-primary">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* PRICE */}
          <div className="uk-width-medium uk-margin-bottom">
            <div className="uk-card uk-card-default uk-card-hover uk-flex uk-flex-column">
              <div className="uk-card-header uk-text-center">
                <h4 className="uk-text-bold">Business</h4>
              </div>
              <div className="uk-card-body uk-flex-1">
                <div className="uk-flex uk-flex-middle uk-flex-center">
                  <span
                    style={{
                      fontSize: "4em",
                      fontWeight: 200,
                      lineHeight: "1em"
                    }}
                  >
                    <span style={{ fontSize: "0.5em" }}>$</span>499.99
                  </span>
                </div>
                <div className="uk-text-small uk-text-center uk-text-muted">
                  <ul>
                    <li>Unlimited Events</li>
                    <li>Unlimted Users</li>
                    <li>Email Support</li>
                  </ul>
                </div>
                {/* Card Footer */}
                <div className="uk-card-footer uk-text-center">
                  <button className="uk-button uk-button-primary">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
