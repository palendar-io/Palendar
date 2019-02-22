import React, { Component } from "react";
import SideMenu from "../components/DashboardPage/SideMenu";
import Header from "../components/DashboardPage/Header";

export default class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
      </div>
    );
  }
}
