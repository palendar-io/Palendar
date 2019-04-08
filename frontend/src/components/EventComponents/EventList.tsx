import React from "react";
import dateFns from "date-fns";
import Modal from "react-modal";
import axios from "axios";

import "./EventList.css";
import * as eventAPI from "./eventAPI";
import event from "./event";
import AddEvent from "./AddEvent";

type MyProps = {userid: String}

class EventList extends React.Component<MyProps>{
    /*events = [{id: "123", title: "Grocery", endTime: "9:00pm", date: new Date(2019, 1, 10), description: "Shopping List"},
    {id: "234", title: "Gym Workout", endTime: "12:00pm", date: new Date(2019, 1, 22), description: "Yoga with Carol"},
    {id: "345", title: "Dinner with Iris van Herpen", endTime: "7:00pm", date: new Date(2019, 1, 15), description: "Getting inspiration from one of the most avant garde designers of this generatino"},
    {id: "345", title: "Lunch with Guo Pei", endTime: "1:00pm", date: new Date(2019, 2, 15), description: "Dinner with Chinese pride desu"},
    {id: "456", title: "Lunch with Guo Pei", endTime: "1:00pm", date: new Date(2019, 2, 20), description: "Dinner with Chinese pride desu"}];
    */
    state = {
        addModalIsOpen: false,
        editModalIsOpen: false,
        events: [{_id: "", title: "", date: new Date(), endTime: new Date(), location: "", description: "", userid: ""}],
    }

    customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };

    componentDidMount(){
        Modal.setAppElement('body');
        eventAPI.getEvents("")
            .then(res => {
                this.setState({events: res.data[0]});
            })
    }

    openAddModal = () => {
        this.setState({addModalIsOpen: true});
    }

    closeAddModal = () => {
        this.setState({addModalIsOpen: false});
        eventAPI.getEvents("")
        .then(res => {
            this.setState({events: res.data[0]});
        })
    }

    openEditModal = () => {
        this.setState({editModalIsOpen: true});
    }

    closeEditModal = () => {
        this.setState({editModalIsOpen: false});
        eventAPI.getEvents("")
        .then(res => {
            this.setState({events: res.data[0]});
        })
    }

    handleDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: String) => {
        event.preventDefault();
        eventAPI.deleteEvent(id, this.props.userid);
        eventAPI.getEvents("")
        .then(res => {
            this.setState({events: res.data[0]});
        })  
    }

    renderList(){
        let x = 0;
        let event: any[] = [];
        let dateFormat = "MMMM D YYYY"
        this.state.events.forEach(element => {
            if(element.title !== ""){
                event.push(
                    <div className = "eventItem" key = {x}> 
                    <div className = "eventHeader">
                        <span className = "eventName"><b>{element.title}</b></span>
                        <span className = "buttons">
                            <button onClick = {this.openEditModal}>Edit</button>
                            <Modal
                                isOpen={this.state.editModalIsOpen}
                                onRequestClose = {this.closeEditModal}
                                style = {this.customStyles}
                                contentLabel = "Edit Event">
                                <AddEvent userid = "" id = {element._id} action = {false} />
                                <button onClick = {this.closeEditModal}>Close</button>

                            </Modal>
                            <button onClick = {(event) => this.handleDelete(event,  element._id)}>Delete</button>
                        </span>
                    </div>
                    <div className = "eventTime">
                        <span className = "startTime">{dateFns.getHours(element.date)}:00 - </span>
                        <span className = "endTime">{dateFns.getHours(element.endTime)}:00</span>
                    </div>
                    <div className = "eventDate">{dateFns.format(element.date, dateFormat)}</div>
                    <div className = "eventLocation">{element.location}</div>
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
                        <button onClick = {this.openAddModal}>Add Event</button>
                        <Modal
                            isOpen={this.state.addModalIsOpen}
                            onRequestClose = {this.closeAddModal}
                            style = {this.customStyles}
                            contentLabel = "Add Event">
                            <AddEvent userid = "" id = "" action = {true} />
                            <button onClick = {this.closeAddModal}>Close</button>
                        </Modal>
                    </span>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

export default EventList;