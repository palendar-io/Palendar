/** 
 * This js file is used to test the puppeteer library for web-scraping
 * 1. lists the current date, 
 * 2. clicks through all days on the current calendar on https://www.blogto.com/events/
 * and scrapes all events from each day
 --------------------------------------------------------------------------------------------------*/

const puppeteer = require('puppeteer');

(async function main() {
 try {
  //If you want to see what is going on in real-time, set headless to false, otherwise, set to true
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.blogto.com/events/');

  //date sample output:  'Friday, February 1, 2019'
  await page.waitForSelector('tbody tr td');
  const daybuttons = await page.$$('tbody tr td');
  await page.waitForSelector('.event-info-box-viewer-title-text');

  const date = await page.$eval('.event-info-box-viewer-title-text', date => date.innerText);
  const dateparts = date.split(' ');
  const day = () => { let string = dateparts[0];  return string.substr(0, string.length - 1);}
  const month = () => { let string = dateparts[1];  return string.substr(0, string.length);}
  const number = () => { let string = dateparts[2];  return string.substr(0, string.length - 1);}
  const year = () => { let string = dateparts[3];  return string.substr(0, string.length);}

  console.log('day', day());
  console.log('month', month());
  console.log('number', number());
  console.log('year', year());

  //loop through and click on every single button in the events calendar for the current month
  for (let i = 0; i < daybuttons.length; i++) {

   await page.goto('https://www.blogto.com/events/');
   await page.waitForSelector('tbody tr td');
   const daybuttons = await page.$$('tbody tr td');

   const daybutton = daybuttons[i];
   const button = await daybutton.$('button.pika-button');
   button.click();

   await page.waitForSelector('#date-events-section');
   const events = await page.$$('#date-events-section .event-info-box-detail');

   console.log('\n\n\n');
   for (const event of events) {
    const title = await event.$eval('.event-info-box-title-link', title => title.innerText);
    console.log('title: \t', title);

    const description = await event.$eval('.event-info-box-description', description => description.innerText);
    console.log('description: \t', description);

    const time = await event.$eval('.event-info-box-date', time => time.innerText);
    console.log('time: \t', time);

    const location = await event.$eval('.event-info-box-venue', location => location.innerText);
    console.log('location: \t', location);

   }
  }
 } catch (e) {
  console.log(e);
 }
})();