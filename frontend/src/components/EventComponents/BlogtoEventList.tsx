import React from "react";
import axios from "axios";
import dateFNS from "date-fns";
import UIkit from "uikit";

import "./EventList.css";
import { object } from "prop-types";

export default class BlogtoEventList extends React.Component{

    state ={
        events:[]
    }

    //hook into the componentDidMount lifecycle hook and perform a GET request after importing axios
    componentDidMount() {
        axios.get('http://localhost:8080')
        .then(res => {
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }
    //send date event to the frontend
    //when calendar date is selected
    //display events on a per month basis



    render(){
        return(
            <div>
                <p>cat</p>
                {this.state.events}
            <ul>
                {this.state.events.map(person => <li>person</li>)}
            </ul>
            </div>
        )
    }
}

