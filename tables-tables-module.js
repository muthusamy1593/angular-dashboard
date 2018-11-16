(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/tables/basic/basic.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/basic/basic.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Tables</h2>\n\n<div class=\"row\">\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Default Table</h4>\n    <div class=\"card\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Dark Table</h4>\n    <div class=\"card\">\n      <table class=\"table table-dark\">\n        <thead>\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"w-100\"></div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Default Colored Heading</h4>\n    <div class=\"card\">\n      <table class=\"table\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Dark Colored Heading</h4>\n    <div class=\"card\">\n      <table class=\"table\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"w-100\"></div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Stripped Table</h4>\n    <div class=\"card\">\n      <table class=\"table table-stripped\">\n        <thead>\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"col-lg\">\n    <h4 class=\"mt-4\">Bordered Table</h4>\n    <div class=\"card\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\" *ngFor=\"let head of defaultTable.head\">{{head}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let body of defaultTable.body;let i = index;\">\n            <th scope=\"row\">{{i}}</th>\n            <td *ngFor=\"let data of body\">{{data}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tables/basic/basic.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/basic/basic.component.ts ***!
  \*************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
        this.defaultTable = {
            head: ['#', 'First', 'Last', 'Handle'],
            body: [
                ['Mark', 'Otto', '@mdo'],
                ['Jacob', 'Thornton', '@fat'],
                ['Larry', 'the Bird', '@twitter']
            ]
        };
    }
    BasicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/tables/basic/basic.component.html"),
            styles: ['.table{margin: 0;}']
        })
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/tables/smart/smart.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/smart/smart.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Smart Table</h2>\n\n<h5 class=\"mt-4\">Smart Table</h5>\n<div class=\"card\">\n  <div class=\"card-body\">\n      <table id=\"data_table\"  datatable [dtOptions]=\"dtOptions\" class=\"display table responsive no-wrap\"></table>\n  </div>\n</div>\n<p class=\"d-block text-right text-muted\"> for more info:\n  <a href=\"http://l-lin.github.io/angular-datatables/\" target=\"_blank\">Angular Datatables\n    <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i>\n  </a>\n</p>"

/***/ }),

/***/ "./src/app/tables/smart/smart.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/smart/smart.component.ts ***!
  \*************************************************/
/*! exports provided: SmartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartComponent", function() { return SmartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartComponent = /** @class */ (function () {
    function SmartComponent() {
        this.dtOptions = {};
        this.data = [
            ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
            ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
            ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
            ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
            ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
            ['Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000'],
            ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500'],
            ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900'],
            ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500'],
            ['Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600'],
            ['Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560'],
            ['Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000'],
            ['Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600'],
            ['Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500'],
            ['Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750'],
            ['Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500'],
            ['Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000'],
            ['Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500'],
            ['Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000'],
            ['Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500'],
            ['Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000'],
            ['Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000'],
            ['Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450'],
            ['Doris Wilder', 'Sales Assistant', 'Sidney', '3023', '2010/09/20', '$85,600'],
            ['Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000'],
            ['Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575'],
            ['Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650'],
            ['Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850'],
            ['Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000'],
            ['Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000'],
            ['Michelle House', 'Integration Specialist', 'Sidney', '2769', '2011/06/02', '$95,400'],
            ['Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500'],
            ['Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000'],
            ['Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500'],
            ['Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050'],
            ['Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675'],
            ['Howard Hatfield', 'Office Manager', 'San Francisco', '7031', '2008/12/16', '$164,500'],
            ['Hope Fuentes', 'Secretary', 'San Francisco', '6318', '2010/02/12', '$109,850'],
            ['Vivian Harrell', 'Financial Controller', 'San Francisco', '9422', '2009/02/14', '$452,500'],
            ['Timothy Mooney', 'Office Manager', 'London', '7580', '2008/12/11', '$136,200'],
            ['Jackson Bradshaw', 'Director', 'New York', '1042', '2008/09/26', '$645,750'],
            ['Olivia Liang', 'Support Engineer', 'Singapore', '2120', '2011/02/03', '$234,500'],
            ['Bruno Nash', 'Software Engineer', 'London', '6222', '2011/05/03', '$163,500'],
            ['Sakura Yamamoto', 'Support Engineer', 'Tokyo', '9383', '2009/08/19', '$139,575'],
            ['Thor Walton', 'Developer', 'New York', '8327', '2013/08/11', '$98,540'],
            ['Finn Camacho', 'Support Engineer', 'San Francisco', '2927', '2009/07/07', '$87,500'],
            ['Serge Baldwin', 'Data Coordinator', 'Singapore', '8352', '2012/04/09', '$138,575'],
            ['Zenaida Frank', 'Software Engineer', 'New York', '7439', '2010/01/04', '$125,250'],
            ['Zorita Serrano', 'Software Engineer', 'San Francisco', '4389', '2012/06/01', '$115,000'],
            ['Jennifer Acosta', 'Junior Javascript Developer', 'Edinburgh', '3431', '2013/02/01', '$75,650'],
            ['Cara Stevens', 'Sales Assistant', 'New York', '3990', '2011/12/06', '$145,600'],
            ['Hermione Butler', 'Regional Director', 'London', '1016', '2011/03/21', '$356,250'],
            ['Lael Greer', 'Systems Administrator', 'London', '6733', '2009/02/27', '$103,500'],
            ['Jonas Alexander', 'Developer', 'San Francisco', '8196', '2010/07/14', '$86,500'],
            ['Shad Decker', 'Regional Director', 'Edinburgh', '6373', '2008/11/13', '$183,000'],
            ['Michael Bruce', 'Javascript Developer', 'Singapore', '5384', '2011/06/27', '$183,000'],
            ['Donna Snider', 'Customer Support', 'New York', '4226', '2011/01/25', '$112,000']
        ];
    }
    SmartComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            data: this.data,
            columns: [
                { title: 'Name' },
                { title: 'Position' },
                { title: 'Office' },
                { title: 'Extn' },
                { title: 'Start Date' },
                { title: 'Salary' },
                {
                    title: 'action', render: function (data, type, full) {
                        return '<button class="btn  btn-just-icon btn-round btn-light"><i class="material-icons">edit</i></button>';
                    }
                }
            ]
        };
    };
    SmartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smart',
            template: __webpack_require__(/*! ./smart.component.html */ "./src/app/tables/smart/smart.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SmartComponent);
    return SmartComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/tables/basic/basic.component.ts");
/* harmony import */ var _smart_smart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./smart/smart.component */ "./src/app/tables/smart/smart.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'basic', component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"] },
    { path: 'smart', component: _smart_smart_component__WEBPACK_IMPORTED_MODULE_4__["SmartComponent"] }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"], _smart_smart_component__WEBPACK_IMPORTED_MODULE_4__["SmartComponent"]]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map