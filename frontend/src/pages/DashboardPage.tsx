import React, { Component } from "react";
import SideMenu from "../components/DashboardPage/SideMenu";
import Header from "../components/DashboardPage/Header";
import Content from "../components/DashboardPage/Content";

export default class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <Content />
      </div>
    );
  }
}
