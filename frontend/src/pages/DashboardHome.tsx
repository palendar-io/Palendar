import React, { Component } from "react";
import Chart from "chart.js";

export default class DashboardHome extends Component {
  render() {
    return (
      <div className="uk-margin-xlarge-left uk-margin-top">
        <div className="uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl">
          <div className="uk-card uk-card-default uk-card-small uk-card-hover">
            <div className="uk-card-header">
              <div className="uk-grid uk-grid-small">
                <div className="uk-width-auto">
                  <h4>Population Chart</h4>
                </div>
                <div className="uk-width-expand uk-text-right panel-icons">
                  <a
                    href="#"
                    className="uk-icon-link"
                    title="Move"
                    data-uk-tooltip
                    data-uk-icon="icon: move"
                  />
                  <a
                    href="#"
                    className="uk-icon-link"
                    title="Configuration"
                    data-uk-tooltip
                    data-uk-icon="icon: cog"
                  />
                  <a
                    href="#"
                    className="uk-icon-link"
                    title="Close"
                    data-uk-tooltip
                    data-uk-icon="icon: close"
                  />
                </div>
              </div>
            </div>
            <div className="uk-card-body">
              <div className="chart-container">
                <canvas id="chart5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
