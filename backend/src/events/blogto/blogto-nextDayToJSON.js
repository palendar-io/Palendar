"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/**
 * This js file is used to test the puppeteer library for web-scraping
 * It clicks next day 14 times, and grabs the event info for the next 2 weeks, starting from current date
 --------------------------------------------------------------------------------------------------*/
var puppeteer = require("puppeteer");
var fs = require("fs");
var events = [];
var data = { events: events };
function blogtoScraper() {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, numberOfDays, i, year, _a, month, _b, day, _c, nextDayButton, events_2, _i, events_1, event_1, title, description, time, location_1, eventObject;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({ headless: false })];
                case 1:
                    browser = _d.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _d.sent();
                    return [4 /*yield*/, page.goto("https://www.blogto.com/events/")];
                case 3:
                    _d.sent();
                    //Wait elements to load
                    return [4 /*yield*/, page.waitForSelector("tbody tr td")];
                case 4:
                    //Wait elements to load
                    _d.sent();
                    return [4 /*yield*/, page.waitForSelector(".is-selected button")];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.waitForSelector(".event-info-box-viewer-date-next-button-container .fd-button")];
                case 6:
                    _d.sent();
                    numberOfDays = 14;
                    i = 0;
                    _d.label = 7;
                case 7:
                    if (!(i < numberOfDays)) return [3 /*break*/, 21];
                    _a = Number;
                    return [4 /*yield*/, page.$$eval(".is-selected button", function (e) {
                            return e.map(function (el) { return el.getAttribute("data-pika-year"); });
                        })];
                case 8:
                    year = _a.apply(void 0, [_d.sent()]);
                    _b = Number;
                    return [4 /*yield*/, page.$$eval(".is-selected button", function (e) {
                            return e.map(function (el) { return el.getAttribute("data-pika-month"); });
                        })];
                case 9:
                    month = _b.apply(void 0, [_d.sent()]);
                    _c = Number;
                    return [4 /*yield*/, page.$$eval(".is-selected button", function (e) {
                            return e.map(function (el) { return el.getAttribute("data-pika-day"); });
                        })];
                case 10:
                    day = _c.apply(void 0, [_d.sent()]);
                    return [4 /*yield*/, page.$(".event-info-box-viewer-date-next-button-container button.fd-button")];
                case 11:
                    nextDayButton = _d.sent();
                    if (nextDayButton) {
                        nextDayButton.click();
                    }
                    return [4 /*yield*/, page.waitForSelector("#date-events-section")];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.$$("#date-events-section .event-info-box-detail")];
                case 13:
                    events_2 = _d.sent();
                    _i = 0, events_1 = events_2;
                    _d.label = 14;
                case 14:
                    if (!(_i < events_1.length)) return [3 /*break*/, 20];
                    event_1 = events_1[_i];
                    return [4 /*yield*/, event_1.$eval(".event-info-box-title-link", function (title) {
                            if (title instanceof HTMLElement) {
                                title.innerText;
                            }
                        })];
                case 15:
                    title = _d.sent();
                    return [4 /*yield*/, event_1.$eval(".event-info-box-description", function (description) {
                            if (description instanceof HTMLElement) {
                                description.innerText;
                            }
                        })];
                case 16:
                    description = _d.sent();
                    return [4 /*yield*/, event_1.$eval(".event-info-box-date", function (time) {
                            if (time instanceof HTMLElement) {
                                time.innerText;
                            }
                        })];
                case 17:
                    time = _d.sent();
                    return [4 /*yield*/, event_1.$eval(".event-info-box-venue", function (location) {
                            if (location instanceof HTMLElement) {
                                location.innerText;
                            }
                        })];
                case 18:
                    location_1 = _d.sent();
                    eventObject = {
                        year: year,
                        month: month,
                        day: day,
                        title: title,
                        description: description,
                        time: time,
                        location: location_1
                    };
                    data.events.push(eventObject);
                    console.log(eventObject);
                    _d.label = 19;
                case 19:
                    _i++;
                    return [3 /*break*/, 14];
                case 20:
                    i++;
                    return [3 /*break*/, 7];
                case 21: return [2 /*return*/, new Promise(function (resolve, reject) {
                        fs.writeFile("events.json", JSON.stringify(data), function (err) {
                            resolve('complete');
                            if (err)
                                reject(err);
                        });
                    })];
            }
        });
    });
}
;
blogtoScraper()
    .then(function (res) { return console.log(res); })["catch"](function (err) { return console.log(err); });
