import axios from "axios";

export function getTasks(userid: String){
    axios.get(`http://localhost:4000/tasks/${userid}`)
        .then(res => {
            console.log(res);
            return res;
        });
    return [{name: "", dueDate: new Date(), dueTime: new Date(), description: "", complete: false, failed: false}];
}

let addTask = (task: object, userid: String) => {
    axios.post(`http://localhost:4000/tasks/${userid}`, task)
        .then(res => console.log(res));
}

let deleteTask = (id:String, userid: String) => {
    axios.delete(`http://localhost:4000/${userid}/${id}`)
        .then(res => console.log(res));
}

let updateTask = (id: String, task: object, userid: String) => {
    axios.put(`http://localhost:4000/tasks/${userid}/${id}`, task)
        .then(res => console.log(res));
}