import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SchedulePage from "../../pages/SchedulePage";
import EventTaskPage from "../../pages/EventTaskPage";
import DashboardHome from "../../pages/DashboardHome";
import BlogtoEventList from '../../components/EventComponents/BlogtoEventList';

export default class Content extends Component {
  render() {
    return (
      <div className="uk-margin-xlarge-left uk-margin-top">
        <Switch>
          <Route path="/dashboard/home" component={DashboardHome} />
          <Route path="/dashboard/calendar" component={SchedulePage} />
          <Route path="/dashboard/events" component={BlogtoEventList} />
          <Route path="/dashboard/tasks" component={EventTaskPage} />
        </Switch>
      </div>
    );
  }
}
