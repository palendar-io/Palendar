import React from "react";
import dateFns from "date-fns";

import "./Scheduler.css";

class Calendar extends React.Component {
  state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      modalIsOpen: false,
  };

  events = [{name: "Grocery", startTime: "8:00pm", endTime: "9:00pm", date: new Date(2019, 1, 10), description: "Shopping List"},
    {name: "Gym Workout", startTime: "11:00pm", endTime: "12:00pm", date: new Date(2019, 1, 22), description: "Yoga with Carol"},
    {name: "Dinner with Iris van Herpen", startTime: "6:00pm", endTime: "7:00pm", date: new Date(2019, 1, 15), description: "Getting inspiration from one of the most avant garde designers of this generatino"},
    {name: "Lunch with Guo Pei", startTime: "12:00pm", endTime: "1:00pm", date: new Date(2019, 2, 15), description: "Dinner with Chinese pride desu"},
    {name: "Lunch with Guo Pei", startTime: "12:00pm", endTime: "1:00pm", date: new Date(2019, 2, 20), description: "Dinner with Chinese pride desu"}];

  showModal = () => {
    this.state.setState({modalIsOpen : true});
  } 

  closeModal = () => {
    this.state.setState({modalIsOpen : false});
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className = "header row flex-middle">
        <div className = "col col-start">
          <div className = "icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className = "col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className = "col col-end" onClick={this.nextMonth}>
          <div className = "icon">chevron_right</div>
        </div>
      </div>
    );
 }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for(let i = 0; i < 7; i++){
        days.push(
          <div className = "col col-center" key = {i}>
            {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}      
          </div>
        );
    }

    return <div className = "days row">{days}</div>
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    let cloneEvents = this.events;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        let dayEvents = [];
        let x = 0;
        while(x < cloneEvents.length && dateFns.compareAsc(cloneEvents[x].date, cloneDay) <= 0){
            if(dateFns.compareAsc(cloneEvents[x].date, day) === 0){
                let eventString = ` ${this.events[x].startTime} - ${this.events[x].endTime} ${this.events[x].name}`;
                dayEvents.push(<div className = "event" key = {x}>{eventString}</div>);
            } 
            x++;
        }
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
            key={day}
          >
            <span className = "number">{formattedDate}</span>
            <span className = "bg">{formattedDate}</span>
            <span className = "events">{dayEvents}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className = "row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className = "body">{rows}</div>;
  }



  /*onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };*/

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className = "calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;