import axios from "axios";

export function getTasks(userid: String){
    axios.get(`http://localhost:4000/api/tasks/${userid}`)
        .then(res => {
            console.log(res);
            return res;
        });

    return [{_id: "", name: "", date: new Date(), description: "", complete: false, failed: false, userid: ""}];
}

export function getTask(userid: String, id: String){
    axios.get(`http://localhost:4000/api/tasks/${userid}/${id}`)
        .then(res => {
            console.log(res);
            return res;
        });

    return {_id: "", name: "", date: new Date(), description: "", complete: false, failed: false, userid: ""}
}

export function addTask(task: object, userid: String){
    axios.post(`http://localhost:4000/api/tasks/${userid}`, task)
        .then(res => console.log(res));
}

export function deleteTask(id:String, userid: String){
    axios.delete(`http://localhost:4000/api/tasks/${userid}/${id}`)
        .then(res => console.log(res));
}

export function updateTask(id: String, task: object, userid: String){
    axios.put(`http://localhost:4000/api/tasks/${userid}/${id}`, task)
        .then(res => console.log(res));
}