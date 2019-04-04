import React from "react";
import dateFns from "date-fns";

import task from "./task";
import * as taskAPI from "./taskAPI"

type MyProps = {userid: String};

class TaskList extends React.Component<MyProps>{
    state = {
        tasksCompleted: 0,
        tasksFailed: 0
    }

    /*tasks = [{name: "Groceries", dueDate: new Date(2019, 3, 24), dueTime: new Date(17, 30), description: "Grocery list: eggs, milk, bread, chips",complete: false, failed: true},
        {name: "Groceries", dueDate: new Date(2019, 3, 26), dueTime: new Date(17, 30), description: "Grocery list: eggs, milk, bread, chips", complete: true, failed: false},
        {name: "Project", dueDate: new Date(2019, 3, 28), dueTime: new Date(23, 30), description: "Fullstack socket io project", complete: false, failed: false},
        {name: "Mail", dueDate: new Date(2019, 3, 29), dueTime: new Date(17, 30), description: "Get Mail", complete: true, failed: false},
    ]*/

    tasks : task[] = taskAPI.getTasks(this.props.userid);

    renderComplete(){
        let completeTasks: any[] = [];
        let x = 0
        this.tasks.forEach(task => {
            if(task.complete === true && task.name !== ""){
                completeTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.name}</div>
                        <div className = "task-list-task-date">
                        Date Due: {task.date.toLocaleDateString()} {dateFns.getHours(task.date)}}
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
        this.tasks.forEach(task => {
            if(task.failed === true && task.name !== ""){
                failedTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.name}</div>
                        <div className = "task-list-task-date">
                        Date Due: {task.date.toLocaleDateString()} {dateFns.getHours(task.date)}
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
        this.tasks.forEach(task => {
            if(task.failed === false && task.complete === false && task.name !== ""){
                ongoingTasks.push(
                    <div className = "task-list-task" key = {x}>
                        <div className = "task-list-task-header">{task.name}</div>
                        <div className = "task-list-task-date">
                        Date Due: {task.date.toLocaleDateString()} {dateFns.getHours(task.date)}
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
            <div className = "task-list-tasks">
                <div className = "task-list-main">{this.renderOngoing()}</div>
                <div className = "task-list-side">{this.renderComplete()} {this.renderFailed()}</div>
            </div>
        )
    }
}

export default TaskList;

