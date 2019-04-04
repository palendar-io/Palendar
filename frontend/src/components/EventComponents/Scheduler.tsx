import React from "react";
import dateFns from "date-fns";

import "./Scheduler.css";
import * as eventAPI from "./eventAPI";
import event from "./event";

type MyProps = {userid: String};

class Calendar extends React.Component<MyProps>{
    state = {
      currentMonth: new Date(),
      selectedDate: new Date(), 
    };

    events: event [] = eventAPI.getEvents(this.props.userid);
    
    componentDidMount(){
      let events: event[] = eventAPI.getEvents(this.props.userid);
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
      let dayKey = day.toString();
      let formattedDate = "";
      let cloneEvents = this.events;
  
      while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = dateFns.format(day, dateFormat);
          const cloneDay = day;
          let dayEvents: any[] = [];
          let x = 0;
          while(x < cloneEvents.length && dateFns.compareAsc(cloneEvents[x].date, cloneDay) <= 0){
              if(dateFns.compareAsc(cloneEvents[x].date, day) === 0 && cloneEvents[x].title !== ""){
                  let eventString = ` ${dateFns.getHours(this.events[x].date)}:00 - ${dateFns.getHours(this.events[x].endTime)}:00 ${this.events[x].title}`;
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
              key={dayKey}
            >
              <span className = "number">{formattedDate}</span>
              <span className = "bg">{formattedDate}</span>
              <span className = "events">{dayEvents}</span>
            </div>
          );
          day = dateFns.addDays(day, 1);
        }
        rows.push(
          <div className = "row" key={dayKey}>
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