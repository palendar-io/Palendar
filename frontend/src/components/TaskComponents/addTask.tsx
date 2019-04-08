import React from "react";
import dateFns from "date-fns";

import task from "./task";
import * as taskAPI from "./taskAPI";

type MyProps = {userid: String, id: String, action: Boolean}

export default class AddTask extends React.Component<MyProps>{
    state = {
        currentDate: new Date(),
        title: "",
        date: new Date(),
        description: "",
        complete: false,
        failed: false,
        userid: this.props.userid
    }

    componentDidMount(){
        if(this.props.id){
            taskAPI.getTask(this.props.userid, this.props.id)
            .then(res => {
                let task = res.data[0];
                this.setState({title: task.title});
                this.setState({date: task.date});
                this.setState({description: task.description});
                console.log(task);
            })
        }
    }

    handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if(this.props.id !== ""){
            taskAPI.updateTask(
                this.props.id
                , {title: this.state.title, date: this.state.date, description: this.state.description, complete: false, failed: false, userid: this.props.userid}
                , this.props.userid);
        }
        else{
            taskAPI.addTask(
                {title: this.state.title, date: this.state.date,  description: this.state.description, complete: false, failed: false, userid: this.props.userid}
                , this.props.userid);
        }
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({title: event.currentTarget.value});
    }
    
    handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({description: event.currentTarget.value});
    }

    handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let day = Number(event.currentTarget.value);
        this.setState({date: dateFns.setDate(this.state.date, day)});
    }

    handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let month = Number(event.currentTarget.value) - 1;
        this.setState({date: dateFns.setMonth(this.state.date, month)});
    }

    handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let year = Number(event.currentTarget.value);
        this.setState({date: dateFns.setYear(this.state.date, year)})
    }

    handleStartHourChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let hour = Number(event.currentTarget.value);
        this.setState({date: dateFns.setHours(this.state.date, hour)});
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
                let hour = dateFns.getHours(this.state.currentDate) + 1;
                while(hour <= 24){
                    if(hour < 10){
                        hours.push(<option value = {hour} key = {hour}>0{hour}:00</option>);
                        hour++;
                    }
                    else{
                        hours.push(<option value = {hour} key = {hour}>{hour}:00</option>);
                        hour++;
                    }
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

    renderHeader() {
        if(this.props.id){
            return(
                <div className = "addEventHeader">
                    Update Task
                </div>
            )
        }
        return(
            <div className = "addEventHeader">
                    Add Task
            </div>
        )
    }

    render(){
        return(
            <div className = "addTaskMain">
                {this.renderHeader()}
                <form>
                    <label>
                        Name:
                    </label>
                    <input type = "text" value = {this.state.title} onChange = {this.handleNameChange} />
                    <br />
                    Year: {this.getYears()} Month: {this.getMonths()} Day: {this.getMonthDays()}
                    <br />
                    Time Due: {this.getStartHours()}
                    <br />
                    <label>
                        Description:
                    </label>
                    <input type = "text" value = {this.state.description} onChange = {this.handleDescriptionChange} />
                    <br />
                    <button onClick = {this.handleSubmit}>{this.props.action ? "Create Task" : "Update Task"}</button>
                </form>
            </div>
        )
    }
}