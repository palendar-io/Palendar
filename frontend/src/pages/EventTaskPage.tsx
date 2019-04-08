import React, { Component } from "react";

import EventList from "../components/EventComponents/EventList";

export default class SchedulePage extends Component {
  render() {
    return (
      <div className="uk-flex uk-flex-center">
        <EventList userid="" />
      </div>
    );
  }
}
