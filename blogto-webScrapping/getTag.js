const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.blogto.com/events/';

puppeteer
.launch()
.then(function(browser) {
    return browser.newPage();
})
.then(function(page) {
    return page.goto(url).then(function() {
        return page.content();
    })
})
.then(function(html) {
    $('.event-info-box-viewer-title-text', html).each(function() {
        console.log($(this).text());
    })
    $('.event-info-box-title-link', html).each(function() {
        console.log($(this).text());
    })
    $('.event-info-box-venue-link', html).each(function() {
        console.log($(this).text());
    })
    $('.event-info-box-date', html).each(function() {
        console.log($(this).text());
    })
})
.catch(function(err) {
    console.log(err);
})