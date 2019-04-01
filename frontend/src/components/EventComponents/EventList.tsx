import React from "react";
import dateFNS from "date-fns";
import UIkit from "uikit";

import "./EventList.css";
import * as eventAPI from "./eventAPI";
import event from "./event";

type MyProps = {userid: String}

class EventList extends React.Component<MyProps>{
    /*events = [{name: "Grocery", startTime: "8:00pm", endTime: "9:00pm", date: new Date(2019, 1, 10), description: "Shopping List"},
    {name: "Gym Workout", startTime: "11:00pm", endTime: "12:00pm", date: new Date(2019, 1, 22), description: "Yoga with Carol"},
    {name: "Dinner with Iris van Herpen", startTime: "6:00pm", endTime: "7:00pm", date: new Date(2019, 1, 15), description: "Getting inspiration from one of the most avant garde designers of this generatino"},
    {name: "Lunch with Guo Pei", startTime: "12:00pm", endTime: "1:00pm", date: new Date(2019, 2, 15), description: "Dinner with Chinese pride desu"},
    {name: "Lunch with Guo Pei", startTime: "12:00pm", endTime: "1:00pm", date: new Date(2019, 2, 20), description: "Dinner with Chinese pride desu"}];*/

    events: event[] = eventAPI.getEvents(this.props.userid);

    handleDelete(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: String){
        event.preventDefault();
        eventAPI.deleteEvent(id, this.props.userid);
    }

    renderList(){
        let x = 0;
        let event: any[] = [];
        let dateFormat = "MMMM D YYYY"
        this.events.forEach(element => {
            if(element.name !== ""){
                event.push(
                    <div className = "eventItem" key = {x}> 
                    <div className = "eventHeader">
                        <span className = "eventName"><b>{element.name}</b></span>
                        <span className = "buttons">
                            <button>Edit</button>
                            <button onClick = {(event) => this.handleDelete(event,  element.id)}>Delete</button>
                        </span>
                    </div>
                    <div className = "eventTime">
                        <span className = "startTime">{element.startTime} - </span>
                        <span className = "endTime">{element.endTime}</span>
                    </div>
                    <div className = "eventDate">{dateFNS.format(element.date, dateFormat)}</div>
                    <div className = "eventDescription">{element.description} </div>
                </div>
                )
                x++;
            }
        })

        return(
            <div className = "events">{event}</div>
        )
    }

    render(){
        return(
            <div className = "eventList">
                <div className = "eventList-header">
                    <span><b>Event List</b></span>
                    <span className = "buttons">
                        <button uk-toggle="target: #modal-example">Open</button>
                    </span>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

export default EventList;