/** 
 * This js file scrapes the current listed date on the https://www.blogto.com/events/ website
 --------------------------------------------------------------------------------------------------*/

const puppeteer = require('puppeteer');

(async function main() {
 try {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.blogto.com/events/');

  //date sample output:  'Friday, February 1, 2019'
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
   
 } catch (e) {
  console.log(e);
 }
})();