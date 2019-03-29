/** 
 * This js file is used to test the puppeteer library for web-scraping
 * It clicks next day 14 times, and grabs the event info for the next 2 weeks, starting from current date
 --------------------------------------------------------------------------------------------------*/
import puppeteer from 'puppeteer';
import * as fs from 'fs';


let events: object[] = [];
var data = {events};

 async function blogtoScraper() {
   
     //If you want to see what is going on in real-time, set headless to false, otherwise, set to true
     const browser = await puppeteer.launch({ headless: false });
     const page = await browser.newPage();
     await page.goto("https://www.blogto.com/events/");
 
     //Wait elements to load
     await page.waitForSelector("tbody tr td");
     await page.waitForSelector(".is-selected button");
     await page.waitForSelector(
       ".event-info-box-viewer-date-next-button-container .fd-button"
     );
 
     //Loop through next 14 days on the calendar
     const numberOfDays = 14;
     for (let i = 0; i < numberOfDays; i++) {
       //Get current selected date button Attributes
       const year = Number(await page.$$eval(".is-selected button", e =>
         e.map(el => el.getAttribute("data-pika-year")))
       );
       const month = Number(await page.$$eval(".is-selected button", e =>
         e.map(el => el.getAttribute("data-pika-month")))
       );
       const day = Number(await page.$$eval(".is-selected button", e =>
         e.map(el => el.getAttribute("data-pika-day")))
       );
 
       //Select the 'next day' button, and click
       const nextDayButton = await page.$(
         ".event-info-box-viewer-date-next-button-container button.fd-button"
       );
       if(nextDayButton){
        nextDayButton.click();
       }
 
       await page.waitForSelector("#date-events-section");
       const events = await page.$$(
         "#date-events-section .event-info-box-detail"
       );
 
       for (const event of events) {

        const titleElement = await event.$(".event-info-box-title-link");
        const title = await page.evaluate(element => element.innerText, titleElement);

        const descriptionElement = await event.$(".event-info-box-description");
        const description = await page.evaluate(element => element.innerText, descriptionElement);

        const timeElement = await event.$(".event-info-box-date");
        const time = await page.evaluate(element => element.innerText, timeElement);

        const locationElement = await event.$(".event-info-box-venue");
        const location = await page.evaluate(element =>  element.innerText, locationElement);

 
         //create event object
         let eventObject = {
           year,
           month,
           day,
           title,
           description,
           time,
           location
         };
         data.events.push(eventObject);
         //console.log(eventObject);
       }
     }

     return new Promise((resolve, reject)=>{
      fs.writeFile ("blogtoEvents.json", JSON.stringify(data), function(err) {
          resolve('Blogto 2 weeks event scraping complete');
          if(err) reject(err);
        })
     })


 };

 blogtoScraper()
 .then(res => console.log(res))
 .catch(err => console.log(err))