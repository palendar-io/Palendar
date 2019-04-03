import React from "react";
import dateFns, { getMonth } from "date-fns";

import * as eventAPI from "./eventAPI";
import event from "./event";

type MyProp = {userid: String, event: event}

export default class AddEvent extends React.Component<MyProp>{
    state = {
        currentDate: new Date(),
        title: "",
        date: new Date(),
        endTime: new Date(),
        location: "",
        description: "",
    }

    componentDidMount(){
        if(this.props.event){
            this.setState({title: this.props.event.title});
            this.setState({date: this.props.event.date});
            this.setState({endTime: this.props.event.endTime});
            this.setState({location: this.props.event.location});
            this.setState({description: this.props.event.description});
        }
    }

    handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        if(this.props.event){
            eventAPI.updateEvent(
                this.props.event.id
                , {title: this.state.title, date: this.state.date, endTime: this.state.endTime, description: this.state.description}
                , this.props.userid);
        }
        else{
            eventAPI.addEvent(
                {title: this.state.title, date: this.state.date, endTime: this.state.endTime, description: this.state.description}
                , this.props.userid);
        }
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: event.currentTarget.name})
    }

    handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({description: event.currentTarget.name});
    }

    handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({location: event.currentTarget.name});
    }

    handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let month = Number(event.currentTarget.value) - 1;
        this.setState({date: dateFns.setMonth(this.state.date, month)});
        this.setState({endTime: dateFns.setMonth(this.state.endTime, month)})
    }

    handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let day = Number(event.currentTarget.value);
        this.setState({date: dateFns.setDate(this.state.date, day)});
        this.setState({endTime: dateFns.setDate(this.state.endTime, day)});
    }

    handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let year = Number(event.currentTarget.value);
        this.setState({date: dateFns.setYear(this.state.date, year)})
        this.setState({endTime: dateFns.setYear(this.state.endTime, year)})
    }

    handleStartHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let hour = Number(event.currentTarget.value);
        this.setState({date: dateFns.setHours(this.state.date, hour)});
    }

    handleEndHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let hour = Number(event.currentTarget.value);
        this.setState({endTime: dateFns.setHours(this.state.endTime, hour)});
    }

    getMonthDays(){       
        let days = [];
        let year = dateFns.getYear(this.state.date);
        let month = dateFns.getMonth(this.state.date);
        let date = this.state.date;
        if(year === dateFns.getYear(this.state.currentDate) && month === dateFns.getMonth(this.state.currentDate)){
            let day = dateFns.getDate(this.state.currentDate);
            while(day <= dateFns.getDate(dateFns.lastDayOfMonth(date))){
                days.push(<option value = {day} key = {day}>{day}</option>);
                day++;
            }
        }
        else{
            let day = dateFns.getDate(dateFns.startOfMonth(date))
            while(day <= dateFns.getDate(dateFns.lastDayOfMonth(date))){
                days.push(<option value = {day} key = {day}>{day}</option>);
                day++;
            }
        }
        return(
            <select name = "day" value = {dateFns.getDate(this.state.date)} onChange = {this.handleDayChange}>{days}</select>
        );
    }

    getMonths(){
        let date = this.state.date
        let year = dateFns.getYear(date);
        let months = [];
        if(year === dateFns.getYear(this.state.currentDate)){
            let month = dateFns.getMonth(this.state.currentDate) + 1;
            while(month < 13){
                months.push(<option value = {month} key = {month}>{month}</option>)
                month++;
            }
        }
        else{
            let month = 1
            while(month < 13){
                months.push(<option value = {month} key = {month}>{month}</option>)
                month++
            }
        }
        
        return(
            <select name = "month" value = {dateFns.getMonth(this.state.date) + 1} onChange = {this.handleMonthChange}>{months}</select>
        )
    }

    getYears(){
        let years = [];
        for(let x = dateFns.getYear(this.state.currentDate); x < dateFns.getYear(this.state.currentDate) + 11; x++){
            years.push(<option value = {x} key = {x}>{x}</option>);
        }

        return(
            <select name = "year" value = {dateFns.getYear(this.state.date)} onChange = {this.handleYearChange}>{years}</select>
        );
    }

    getStartHours(){
        let hours = [];
        let year = dateFns.getYear(this.state.date);
        let month = dateFns.getMonth(this.state.date);
        let day = dateFns.getDate(this.state.date);
        if(year === dateFns.getYear(this.state.currentDate) && month === dateFns.getMonth(this.state.currentDate)
            && day === dateFns.getDate(this.state.currentDate)){
                let hour = dateFns.getHours(this.state.currentDate);
                while(hour <= 24){
                    hours.push(<option value = {hour} key = {hour}>{hour}:00</option>);
                    hour++;
                }
        }
        else{
            let hour = 0;
            while(hour < 24){
                hours.push(<option value = {hour} key = {hour}>{hour}:00</option>);
                hour++;
            }
        }
        return(
            <select name = "startYear" value = {dateFns.getHours(this.state.date)} onChange = {this.handleStartHourChange}>{hours}</select>
        )
    }

    getEndHours(){
        let hours = [];
        let year = dateFns.getYear(this.state.date);
        let month = dateFns.getMonth(this.state.date);
        let day = dateFns.getDate(this.state.date);
        if(year === dateFns.getYear(this.state.currentDate) && month === dateFns.getMonth(this.state.currentDate)
            && day === dateFns.getDate(this.state.currentDate)){
                let hour = dateFns.getHours(this.state.currentDate) + 1;
                while(hour <= 24){
                    hours.push(<option value = {hour} key = {hour}>{hour}:00</option>);
                    hour++;
                }
        }
        else{
            let hour = dateFns.getHours(this.state.date) + 1;
            while(hour < 24){
                hours.push(<option value = {hour} key = {hour}>{hour}:00</option>);
                hour++;
            }
        }
        console.log(dateFns.getHours(this.state.endTime));
        return(
            <select name = "startYear" value = {dateFns.getHours(this.state.endTime)} onChange = {this.handleEndHourChange}>{hours}</select>
        )
    }

    render() {
        return(
            <div className = "addEventMain">
                <div className = "addEventHeader">
                    Add Event
                </div>
                <div className = "addEventForm">
                    <form>
                        <label>
                            Event Name:
                        </label>
                        <input type = "text" value = {this.state.title} onChange = {this.handleNameChange} />
                        <br />
                        Year: {this.getYears()} Month: {this.getMonths()} Day: {this.getMonthDays()}
                        <br />
                        Start Time: {this.getStartHours()}
                        <br />
                        End Time: {this.getEndHours()}
                        <br />
                        <label>
                            Location:
                        </label>
                        <input type = "text" value = {this.state.location} onChange = {this.handleLocationChange} />
                        <br />
                        <label>
                            Description:
                        </label>
                        <input type = "text" value = {this.state.description} onChange = {this.handleDescriptionChange} />
                        <br />
                        <input type = "submit" value = "Submit" onSubmit = {this.handleSubmit} />
                    </form>
                </div>
            </div>
        )
    }
}