import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import SchedulePage from "./pages/SchedulePage";
import EventTaskPage from "./pages/EventTaskPage";
import TaskListPage from "./pages/TaskListPage";
import AddEvent from "./components/EventComponents/AddEvent";
import BlogtoEventList from "./components/EventComponents/BlogtoEventList";

import UIkit from "uikit";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path = "/tasks" component = {TaskListPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
