import React from "react";
import dateFns from "date-fns";

import "./Scheduler.css";
import * as eventAPI from "./eventAPI";
import * as taskAPI from "../TaskComponents/taskAPI";
import event from "./event";
import task from "../TaskComponents/task";

type MyProps = {userid: String};

class Calendar extends React.Component<MyProps>{
    state = {
      currentMonth: new Date(),
      selectedDate: new Date(), 
      events: [{_id: "", title: "", date: new Date(), endTime: new Date(), location: "", description: "", userid: ""}],
      tasks: [{_id: "", title: "", date: new Date(), description: "", complete: false, failed: false, userid: ""}],
    };
    componentDidMount(){
      eventAPI.getEvents("")
      .then(res => {
          this.setState({events: res.data[0]});
          this.state.events.sort((a: event, b:event) => {
            return a.date.valueOf() - b.date.valueOf();
          });
          console.log(this.state.events);
      })
      taskAPI.getTasks(this.props.userid)
        .then(res => {
            this.setState({tasks: res.data[0]});
            this.state.tasks.sort((a: task, b: task) => {
              return a.date.valueOf() - b.date.valueOf();
            });
        })
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
      let cloneEvents = this.state.events;
  
      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = dateFns.format(day, dateFormat);
          const cloneDay = day;
          let dayEvents = [];
          let x = 0;
          while(x < cloneEvents.length && dateFns.compareAsc(cloneEvents[x].date, cloneDay) <= 0){
              if(dateFns.compareAsc(cloneEvents[x].date, day) === 0){
                  let eventString = `${this.state.events[x].title} ${this.state.events[x].date} ${this.state.events[x].endTime}`;
                  dayEvents.push(<div className = "event" key = {x}>{eventString}</div>);
                  //{this.renderModal(this.events[x].name, this.events[x].startTime, this.events[x].endTime, this.events[x].date, this.events[x].description)};
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
              key={day.toString()}
            >
              <span className = "number">{formattedDate}</span>
              <span className = "bg">{formattedDate}</span>
              <span className = "events">{dayEvents}</span>
            </div>
          );
          day = dateFns.addDays(day, 1);
        }
        rows.push(
          <div className = "row" key={day.toString()}>
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