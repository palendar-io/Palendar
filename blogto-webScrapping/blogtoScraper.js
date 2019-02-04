const puppeteer = require('puppeteer');

(async function main(){
    try {
        //If you want to see what is going on in real-time, set headless to false, otherwise, set to true
        const browser = await puppeteer.launch({headless: false });
        const page = await browser.newPage();

        await page.goto('https://www.blogto.com/events/');
        await page.waitForSelector('tbody tr td');
        const daybuttons = await page.$$('tbody tr td');
        //console.log (daybuttons.length);

        for(let i = 0; i < daybuttons.length; i++){

            await page.goto('https://www.blogto.com/events/');
            await page.waitForSelector('tbody tr td');
            const daybuttons = await page.$$('tbody tr td');

            const daybutton = daybuttons[i];
            const button =  await daybutton.$('button.pika-button');
            button.click();

            await page.waitForSelector('#date-events-section');
            const events = await page.$$('#date-events-section .event-info-box-detail');

            await page.waitForSelector('.event-info-box-viewer-title-text');
            const date = await page.$$('.event-info-box-viewer-title-text');
            console.log(date.innerText);

            console.log('\n\n\n');
            for (const event of events){
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
 
    } catch(e) {
        console.log(e);
    }
})();