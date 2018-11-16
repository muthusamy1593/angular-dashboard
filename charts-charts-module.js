(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./src/app/charts/charts.component.html":
/*!**********************************************!*\
  !*** ./src/app/charts/charts.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Charts</h2>\n\n<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Bar Chart</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"bar-chart\" ></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Line Chart</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"line-chart\" ></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Doughnut Chart</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"doughnut-chart\"></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Mix Chart (Bar and Line)</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"mixed-chart\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Bubble Chart</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"bubble-chart\"></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-6\">\n    <h4 class=\"mt-4\">Radar Chart</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <canvas id=\"radar-chart\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Example</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"form-group row mb-4\">\n      <div class=\"col-sm-2\">\n        <label for=\"\">Select Type</label>\n      </div>\n      <div class=\"col-sm-4\">\n        <ng-select [items]=\"['line','horizontalBar','bar','radar','polarArea','doughnut','pie']\" (change)=\"updateChartType()\" placeholder=\"Select\"\n          [(ngModel)]=\"exampleChartType\"></ng-select>\n      </div>\n      <div class=\"col-sm-4 mt-3 mt-sm-0\">\n        <button class=\"btn btn-secondary \" (click)=\"randomizeData()\">Randomize !</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"exampleChart\">\n      <canvas id=\"exampleChart\"></canvas>\n    </div>\n  </div>\n</div>\n<p class=\"mt-4 d-block text-muted\">for more info:\n  <a href=\"https://www.chartjs.org/\" target=\"_blank\">Chartjs\n    <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i>\n  </a>\n</p>\n"

/***/ }),

/***/ "./src/app/charts/charts.component.ts":
/*!********************************************!*\
  !*** ./src/app/charts/charts.component.ts ***!
  \********************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartsComponent = /** @class */ (function () {
    function ChartsComponent() {
        this.exampleChartType = 'line';
    }
    ChartsComponent.prototype.ngOnInit = function () {
        // Bar chart
        this.barChart();
        // Line Chart
        this.lineChart();
        // Doughnut Chart
        this.doughnutChart();
        // Mixed Chart
        this.mixedChart();
        // Bubble Chart
        this.bubbleChart();
        // Radar Chart
        this.radarChart();
        // example
        this.setExample();
        // randomize chart data
        this.randomizeData();
    };
    ChartsComponent.prototype.radarChart = function () {
        var radar = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('radar-chart'), {
            type: 'radar',
            data: {
                labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                datasets: [
                    {
                        label: '1950',
                        fill: true,
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        data: [8.77, 55.61, 21.69, 6.62, 6.82]
                    }, {
                        label: '2050',
                        fill: true,
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        data: [25.48, 54.16, 7.61, 8.06, 4.45]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Distribution in % of world population'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.bubbleChart = function () {
        var bubble = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('bubble-chart'), {
            type: 'bubble',
            data: {
                labels: 'Africa',
                datasets: [
                    {
                        label: ['China'],
                        backgroundColor: 'rgba(255,221,50,0.2)',
                        borderColor: 'rgba(255,221,50,1)',
                        data: [{
                                x: 21269017,
                                y: 5.245,
                                r: 15
                            }]
                    }, {
                        label: ['Denmark'],
                        backgroundColor: 'rgba(60,186,159,0.2)',
                        borderColor: 'rgba(60,186,159,1)',
                        data: [{
                                x: 258702,
                                y: 7.526,
                                r: 10
                            }]
                    }, {
                        label: ['Germany'],
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        borderColor: '#000',
                        data: [{
                                x: 3979083,
                                y: 6.994,
                                r: 15
                            }]
                    }, {
                        label: ['Japan'],
                        backgroundColor: 'rgba(193,46,12,0.2)',
                        borderColor: 'rgba(193,46,12,1)',
                        data: [{
                                x: 4931877,
                                y: 5.921,
                                r: 15
                            }]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                },
                scales: {
                    yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Happiness'
                            }
                        }],
                    xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'GDP (PPP)'
                            }
                        }]
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.mixedChart = function () {
        var mixed = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('mixed-chart'), {
            type: 'bar',
            data: {
                labels: ['1900', '1950', '1999', '2050'],
                datasets: [{
                        label: 'Europe',
                        type: 'line',
                        borderColor: '#8e5ea2',
                        data: [408, 547, 675, 734],
                        fill: false
                    }, {
                        label: 'Africa',
                        type: 'line',
                        borderColor: '#3e95cd',
                        data: [133, 221, 783, 2478],
                        fill: false
                    }, {
                        label: 'Europe',
                        type: 'bar',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        data: [408, 547, 675, 734],
                    }, {
                        label: 'Africa',
                        type: 'bar',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        backgroundColorHover: '#3e95cd',
                        data: [133, 221, 783, 2478]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Population growth (millions): Europe & Africa'
                },
                legend: { display: false },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.doughnutChart = function () {
        var doughnut = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('doughnut-chart'), {
            type: 'doughnut',
            data: {
                labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                datasets: [
                    {
                        label: 'Population (millions)',
                        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
                        data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.lineChart = function () {
        var line = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('line-chart'), {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        label: 'Africa',
                        borderColor: '#3e95cd',
                        fill: false
                    }, {
                        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                        label: 'Asia',
                        borderColor: '#8e5ea2',
                        fill: false
                    }, {
                        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                        label: 'Europe',
                        borderColor: '#3cba9f',
                        fill: false
                    }, {
                        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                        label: 'Latin America',
                        borderColor: '#e8c3b9',
                        fill: false
                    }, {
                        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                        label: 'North America',
                        borderColor: '#c45850',
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.barChart = function () {
        var bar = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('bar-chart'), {
            type: 'bar',
            data: {
                labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
                datasets: [
                    {
                        label: 'Population (millions)',
                        backgroundColor: ['#3ebb8c', '#9092a5', '#f36b56', '#39a8d0', '#fed33d'],
                        data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    ChartsComponent.prototype.setExample = function () {
        // Define data set for all charts
        this.exampleDataSet1 = [1, 10, 5, 2, 20, 30, 45];
        this.exampleDataSet2 = [20, 30, 15, 12, 21, 30, 40];
        this.exampleData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'DataSet1!',
                    fill: false,
                    backgroundColor: 'rgba(144,146,165, 0.8)',
                    borderColor: 'rgb(144,146,165)',
                    data: this.exampleDataSet1,
                },
                {
                    label: 'DataSet2!',
                    fill: true,
                    backgroundColor: 'rgb(62,187,140, 0.8)',
                    borderColor: 'rgb(62,187,140)',
                    data: this.exampleDataSet2,
                }
            ]
        };
        // Default chart defined with type: 'line'
        this.exampleChartCanvas = document.getElementById('exampleChart');
        this.exampleChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__(this.exampleChartCanvas, {
            type: this.exampleChartType,
            data: this.exampleData,
            options: {
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    // Function runs on chart type select update
    ChartsComponent.prototype.updateChartType = function () {
        // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
        this.exampleChart.destroy();
        this.exampleChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__(this.exampleChartCanvas, {
            type: this.exampleChartType,
            data: this.exampleData,
            options: {
                maintainAspectRatio: false,
                responsive: true
            }
        });
    };
    // Randomize data button function
    ChartsComponent.prototype.randomizeData = function () {
        var newDataBaby = this.exampleDataSet1.map(function (x) { return Math.floor(Math.random() * 50); });
        var newdataSet2Baby = this.exampleDataSet2.map(function (x) { return Math.floor(Math.random() * 40); });
        this.exampleData.datasets[0].data = newDataBaby;
        this.exampleData.datasets[1].data = newdataSet2Baby;
        this.exampleChart.update();
    };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            styles: ['.card-body,.exampleChart{  position: relative;   min-height:45vh; }'],
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/charts/charts.component.html")
        })
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts.component */ "./src/app/charts/charts.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"] }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"]]
        })
    ], ChartsModule);
    return ChartsModule;
}());



/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map