(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Calendar</h2>\n\n<div class=\"row\">\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Month </h4>\n    <div class=\"card\">\n      <div id='calendar-month'></div>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Week</h4>\n    <div class=\"card\">\n      <div id='calendar-week'></div>\n    </div>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Calendar Events</h4>\n<div class=\"card\">\n  <div id='calendar'></div>\n</div>\n<p class=\"d-block mt-4 text-muted\">for more information:\n  <a href=\"https://fullcalendar.io/\" target=\"_blank\"> fullcalendar\n    <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i>\n  </a>\n</p>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fullcalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullcalendar */ "./node_modules/fullcalendar/dist/fullcalendar.js");
/* harmony import */ var fullcalendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullcalendar__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.monthCal();
        this.weekCal();
        this.eventCal();
    };
    CalendarComponent.prototype.eventCal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#calendar').fullCalendar({
            themeSystem: 'bootstrap4',
            defaultView: jquery__WEBPACK_IMPORTED_MODULE_1__(window).width() < 765 ? 'listWeek' : 'month',
            height: 650,
            fixedWeekCount: false,
            header: {
                left: ' ',
                center: 'title  ',
                right: 'prev next today'
            },
            footer: {
                center: 'month,agendaWeek,agendaDay,listWeek'
            },
            titleFormat: 'MMM YYYY',
            buttonText: {
                today: ' '
            },
            defaultDate: '2016-08-06',
            editable: true,
            eventLimit: true,
            events: [
                { title: 'All Day Event', start: '2016-08-01' },
                { title: 'Long Event', start: '2016-08-07', end: '2016-08-10' },
                { id: 999, title: 'Repeating Event', start: '2016-08-09T16:00:00' },
                { id: 999, title: 'Repeating Event', start: '2016-08-16T16:00:00' },
                { title: 'Conference', start: '2016-08-05', end: '2016-08-07' },
                { title: 'Meeting', start: '2016-08-06T10:30:00', end: '2016-08-06T12:30:00' },
                { title: 'Lunch', start: '2016-08-06T12:00:00' },
                { title: 'Meeting', start: '2016-08-06T14:30:00' },
                { title: 'Happy Hour', start: '2016-08-06T17:30:00' },
                { title: 'Dinner', start: '2016-08-06T20:00:00' },
                { title: 'Movie', start: '2016-08-07T07:00:00' },
                { title: 'Click for Google', url: 'https://google.com/', start: '2016-08-28' }
            ]
        });
    };
    CalendarComponent.prototype.weekCal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#calendar-week').fullCalendar({
            defaultView: 'basicWeek',
            themeSystem: 'bootstrap4',
            height: 410,
            allDaySlot: false,
            fixedWeekCount: false,
            header: {
                left: '  ',
                center: ' title ',
                right: 'prev next today'
            },
            buttonText: {
                today: ' '
            }
        });
    };
    CalendarComponent.prototype.monthCal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#calendar-month').fullCalendar({
            themeSystem: 'bootstrap4',
            height: 410,
            allDaySlot: false,
            fixedWeekCount: false,
            header: {
                left: '  ',
                center: ' title ',
                right: 'prev next today'
            },
            buttonText: {
                today: ' '
            }
        });
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html")
        })
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"] }
];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map