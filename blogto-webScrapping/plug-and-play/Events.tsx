import React, { Component } from 'react';
import data from './events.json';
/**
 * 1. yarn add @types/puppeteer
 * 2. For JSON file to work, add the following code to 
 *    Compiler options in the tsconfig.json file
 *     "resolveJsonModule": true,
 *     "esModuleInterop": true,
 */
class Events extends Component {
  render() {
    //save json file events to events
    const events = data.events;
    //console.log(events);

    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();
    const yyyy = today.getFullYear();
    //console.log(dd, mm, yyyy);

    //Filter events
    const todayEvents = 
    events.filter(event => event.day == dd && event.month == mm && event.year == yyyy);
    //console.log(todayEvents);

    return (
          <ul>
          <h3>EVENTS LIST</h3>
          <h3>Todays Date: {dd}/{mm+1}/{yyyy}</h3>
            {todayEvents.map(event => 
                <li key={event.title}>
                  <p>Title: {event.title}</p>
                  <p>Time: {event.time}</p>
                  <p>Location: {event.location}</p>
                  <p>Description: {event.description}</p>
                </li>)}
          </ul>
    );
  }
}

export default Events;
