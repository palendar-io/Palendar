/** 
 * This js file is used to test the puppeteer library for web-scraping
 * It clicks next day 14 times, and grabs the event info for the next 2 weeks, starting from current date
 --------------------------------------------------------------------------------------------------*/
 const puppeteer = require("puppeteer");

 (async function main() {
   try {
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
       const year: Number = Number(await page.$$eval(".is-selected button", (e: { map: (arg0: (el: { getAttribute: (arg0: string) => void; }) => void) => void; }) =>
         e.map((el: { getAttribute: (arg0: string) => void; }) => el.getAttribute("data-pika-year")))
       );
       const month: Number = Number(await page.$$eval(".is-selected button", (e: { map: (arg0: (el: { getAttribute: (arg0: string) => void; }) => void) => void; }) =>
         e.map((el: { getAttribute: (arg0: string) => void; }) => el.getAttribute("data-pika-month")))
       );
       const day: Number = Number(await page.$$eval(".is-selected button", (e: { map: (arg0: (el: any) => any) => void; }) =>
         e.map((el: { getAttribute: (arg0: string) => void; }) => el.getAttribute("data-pika-day")))
       );
 
       //Select the 'next day' button, and click
       const nextDayButton = await page.$(
         ".event-info-box-viewer-date-next-button-container button.fd-button"
       );
       nextDayButton.click();
 
       await page.waitForSelector("#date-events-section");
       const events = await page.$$(
         "#date-events-section .event-info-box-detail"
       );
 
       for (const event of events) {
         const title = await event.$eval(
           ".event-info-box-title-link",
           (           title: { innerText: string; }) => title.innerText
         );
         const description = await event.$eval(
           ".event-info-box-description",
           (           description: { innerText: string; }) => description.innerText
         );
         const time = await event.$eval(
           ".event-info-box-date",
           (           time: { innerText: string; }) => time.innerText
         );
         const location = await event.$eval(
           ".event-info-box-venue",
           (           location: { innerText: string; }) => location.innerText
         );
 
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
         console.log(eventObject);
       }
     }
   } catch (e) {
     console.log(e);
   }
 })();
 