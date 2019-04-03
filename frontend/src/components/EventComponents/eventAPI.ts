import axios from "axios";
import event from "./event";

export function getEvents(userid: String){
    axios.get(`http://localhost:4000/events/${userid}`)
        .then(res => {
            console.log(res);    
            return res;
        });
    return [{id: "", title: "", date: new Date(), startTime: new Date(), endTime: new Date(), location: "", description: ""}];
}

export function addEvent(event: object, userid: String){
    axios.post(`http://localhost:4000/events/${userid}`, event)
        .then(res => console.log(res));
}

export function deleteEvent(id: String, userid: String){
    axios.delete(`http://localhost:4000/events/${userid}/${id}`)
        .then(res => console.log(res)); 
}

export function updateEvent(id: String, event: object, userid: String){
    axios.put(`http://localhost:4000/events/${userid}/${id}`, event)
        .then(res => console.log(res));   
}

export function setMonth(month: number){
    let date = new Date();
    let date2 = date.setMonth(month);
}