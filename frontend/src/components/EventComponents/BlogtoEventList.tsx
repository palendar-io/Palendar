import React from "react";
import axios from "axios";
import dateFns from "date-fns";
import "./EventList.css";
import data from './blogtoEvents.json';
import * as eventAPI from "./eventAPI";
import "./EventList.css";
import _ from 'underscore';

type MyProp = {userid: String, id: String}

export default class BlogtoEventList extends React.Component{

    // state ={
    //     events:[],
    // }
    //hook into the componentDidMount lifecycle hook and perform a GET request after importing axios
    // componentDidMount() {
    //     axios.get('http://localhost:3500')
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
    // }


    render(){
        const today = new Date();
        const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        const dateFormat = "MMMM D YYYY"
        const events = data.events;

        //Create an array of dates on current week, for drop down list later on
        let thisWeekDates: Date[] = [];
        const numberOfSelectionDays = 7;
        for(let i = 0 ; i < numberOfSelectionDays; i++){
            thisWeekDates.push(new Date(today.getFullYear(), today.getMonth(), today.getDate()+i));
        }

        //console.log(thisWeekDates);
        


        //Checks of today and eventDate are the same day
        const isSameDay = (today:Date, eventDate:Date) =>{
            return(
            today.getDate() === eventDate.getDate() 
            && today.getMonth() === eventDate.getMonth()
            && today.getFullYear() === eventDate.getFullYear()
        )}

        const isSameMonth = (today:Date, eventDate:Date) =>{
            return(
            today.getDate() <= eventDate.getDate()
            && today.getMonth() === eventDate.getMonth()
            && today.getFullYear() === eventDate.getFullYear()
        )}

        //Filters events and returns events matching today's date
        let todayEvents = events.filter(event => {
            let eventDate = new Date(event.date);
            if(isSameDay(today, eventDate)){
                return event;
            }
        })

        let thisMonthEvents = events.filter(event => {
            let eventDate = new Date(event.date);
            if(isSameMonth(today, eventDate)){
                return event;
            }
        })

        todayEvents = _.sortBy(todayEvents, 'date');
        thisMonthEvents = _.sortBy(thisMonthEvents, 'date');

            return(
                <div>
                
 
                <ul>
                    <h1>Events today</h1>
                    {todayEvents.map(event =>           
                        <div className = "blogtoEventItem">
                            <div className = "eventHeader">
                                <span className = "eventName"><b>{event.title}</b></span>
                                <span className = "buttons">
                                    <button>Add to Calendar</button>
                                </span>
                            </div>
                            <div className = "eventTime">
                                <span className = "startTime"><b>Time: </b>{dateFns.getHours(event.date)}:00 - </span>
                                <span className = "endTime">{dateFns.getHours(event.endTime)}:00</span>
                            </div>
                            <div className = "eventLocation"><b>Location: </b>{event.location}</div>
                            <div className = "eventDate"><b>Date: </b>{dateFns.format(event.date, dateFormat)}</div>
                            <div className = "eventDescription"><b>Description: </b>{event.description} </div>
                        </div>

                    )}
                </ul>
                </div>
            )
    }
}