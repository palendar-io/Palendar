import React from "react";
import dateFns from "date-fns";
import Modal from "react-modal";

import task from "./task";
import * as taskAPI from "./taskAPI";
import AddTask from "./addTask";
import { format } from "url";
import "./TaskList.css";

type MyProps = {userid: String};

class TaskList extends React.Component<MyProps>{
    state = {
        tasksCompleted: 0,
        tasksFailed: 0,
        modalIsOpen: false,
        tasks: [{_id: "", title: "", date: new Date(), description: "", complete: false, failed: false, userid: ""}],
        dateFormat: "MMMM D YYYY"
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

    /*tasks = [{name: "Groceries", dueDate: new Date(2019, 3, 24), dueTime: new Date(17, 30), description: "Grocery list: eggs, milk, bread, chips",complete: false, failed: true},
        {name: "Groceries", dueDate: new Date(2019, 3, 26), dueTime: new Date(17, 30), description: "Grocery list: eggs, milk, bread, chips", complete: true, failed: false},
        {name: "Project", dueDate: new Date(2019, 3, 28), dueTime: new Date(23, 30), description: "Fullstack socket io project", complete: false, failed: false},
        {name: "Mail", dueDate: new Date(2019, 3, 29), dueTime: new Date(17, 30), description: "Get Mail", complete: true, failed: false},
    ]*/

    componentDidMount(){
        Modal.setAppElement('body');
        taskAPI.getTasks(this.props.userid)
            .then(res => {
                this.setState({tasks: res.data[0]});
            });
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
        taskAPI.getTasks("")
            .then(res => {
                this.setState({tasks: res.data[0]});
            })
    }

    handleDelete(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: String){
        event.preventDefault();
        taskAPI.deleteTask(id, this.props.userid);
        taskAPI.getTasks("")
            .then(res => {
                this.setState({tasks: res.data[0]});
            })
    }

    renderComplete(){
        let completeTasks: any[] = [];
        let x = 0
        this.state.tasks.forEach(task => {
            if(task.complete === true && task.title !== ""){
                completeTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.title}</div>
                        <div className = "task-list-task-date">
                        Date Due: {dateFns.format(task.date, this.state.dateFormat)} {dateFns.format(task.date, "HH")}}
                        </div>
                        <div className = "task-list-task-description">Details: {task.description}</div>
                    </div>
                )
                x++;
            }
        })

        return(
            <div className = "task-list-complete">{completeTasks}</div>
        )
    }

    renderFailed(){
        let failedTasks: any[] = [];
        let x = 0
        this.state.tasks.forEach(task => {
            if(task.failed === true && task.title !== ""){
                failedTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.title}</div>
                        <div className = "task-list-task-date">
                        Date Due: {dateFns.format(task.date, this.state.dateFormat)} {dateFns.format(task.date, "HH")}}
                        </div>
                        <div className = "task-list-task-description">Details: {task.description}</div>
                    </div>
                )
                x++;
            }
        })

        return(
            <div className = "task-list-failed">{failedTasks}</div>
        )
    }

    renderOngoing(){
        let ongoingTasks: any[] = [];
        let x = 0
        this.state.tasks.forEach(task => {
            if(task.failed === false && task.complete === false && task.title !== ""){
                console.log(this.state.tasks);
                ongoingTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.title}</div>
                        <div className = "task-list-buttons">
                            <button>Complete</button>
                            <button onClick = {this.openModal}>Edit</button>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onRequestClose = {this.closeModal}
                                style = {this.customStyles}
                                contentLabel = "Event">
                                <AddTask userid = "" id = {task._id} action = {false} />
                                <button onClick = {this.closeModal}>Close</button>
                            </Modal>
                            <button onClick = {(event) => this.handleDelete(event,  task._id)}>Delete</button>
                        </div>
                        <div className = "task-list-task-date">
                        Date Due: {dateFns.format(task.date, this.state.dateFormat)} {dateFns.format(task.date, "HH")}:00
                        </div>
                        <div className = "task-list-task-description">Details: {task.description}</div>
                    </div>
                )
                x++;
            }
        })

        return(
            <div className = "task-list-ongoing">{ongoingTasks}</div>
        )
    }

    render(){
        return(
            <div className = "task-container">
                <div className = "task-list-header">
                <span>Task List</span>
                <button onClick = {this.openModal}>Create Task</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose = {this.closeModal}
                        style = {this.customStyles}
                        contentLabel = "Event">
                        <AddTask userid = "" id = "" action = {true} />
                    </Modal>
                </div>
                <div className = "task-list-tasks">
                    <div className = "task-list-main">
                        <div className = "task-list-main-header">Ongoing Tasks</div>
                        {this.renderOngoing()}
                    </div>
                    <div className = "task-list-side">
                        <div className = "task-list-side-header">Completed Tasks</div>
                        {this.renderComplete()} 
                        <div className = "task-list-side-header">Failed Tasks</div>
                        {this.renderFailed()}
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;

