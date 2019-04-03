import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

export default class Content extends Component {
  render() {
    return (
      <div className="uk-flex uk-flex-middle">
        <BrowserRouter>
          <Switch>
            <Route to="/dashboard/calendar" component={Calendar} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
