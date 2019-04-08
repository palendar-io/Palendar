import axios, {AxiosPromise} from "axios";
import event from "./event";


export function getEvents(userid: String){
    return axios.get<event[]>(`http://localhost:4000/api/events/${userid}`);
}

export function getEvent(userid: String, id: String){
    return axios.get(`http://localhost:4000/api/events/${userid}/${id}`)
}

export function addEvent(event: object, userid: String){
    axios.post(`http://localhost:4000/api/events/`, event)
        .then(res => console.log(res));
}

export function deleteEvent(id: String, userid: String){
    axios.delete(`http://localhost:4000/api/events/${userid}/${id}`)
        .then(res => console.log(res)); 
}

export function updateEvent(id: String, event: object, userid: String){
    axios.put(`http://localhost:4000/api/events/${userid}/${id}`, event)
        .then(res => console.log(res));   
}

export function setMonth(month: number){
    let date = new Date();
    let date2 = date.setMonth(month);
}

export default function getBlogtoEvents(){
    axios.get(`http://localhost:4000/blogto`)
        .then(res => {
            console.log(res);    
            return res;
        })
        .catch(err =>{
            console.log(err);
        });
    return [{title: "", date: new Date(), endTime: new Date(), location: "", description: ""}];
}