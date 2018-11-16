(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./src/app/components/alerts/alerts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Alerts</h2>\n\n<h4 class=\"mt-4\">Default</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-primary\" role=\"alert\">\n      This is a primary alert—check it out!\n    </div>\n    <div class=\"alert alert-secondary\" role=\"alert\">\n      This is a secondary alert—check it out!\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      This is a success alert—check it out!\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      This is a warning alert—check it out!\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      This is a info alert—check it out!\n    </div>\n    <div class=\"alert alert-light\" role=\"alert\">\n      This is a light alert—check it out!\n    </div>\n    <div class=\"alert alert-dark\" role=\"alert\">\n      This is a dark alert—check it out!\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Link</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-primary\" role=\"alert\">\n      This is a primary alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-secondary\" role=\"alert\">\n      This is a secondary alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      This is a success alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      This is a danger alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      This is a warning alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      This is a info alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-light\" role=\"alert\">\n      This is a light alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-dark\" role=\"alert\">\n      This is a dark alert with\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Additional content</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-success\" role=\"alert\">\n      <h4 class=\"alert-heading\">Well done!</h4>\n      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that\n        you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Dismissing</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n      <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\n      This is a primary alert—check it out!\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"alert alert-secondary alert-dismissible fade show\" role=\"alert\">\n      This is a secondary alert—check it out!\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n      This is a success alert—check it out!\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      </div>\n  </div>\n</div>\n\n<h6 class=\"mt-5\">For complete information on Bootstrap 4 Alerts :\n    <a href=\"https://getbootstrap.com/docs/4.1/components/alerts/\" target=\"_blank\">Bootstrap 4 Alerts  <i class=\"material-icons\">launch</i></a>\n  </h6>\n"

/***/ }),

/***/ "./src/app/components/alerts/alerts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
    }
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/components/alerts/alerts.component.html")
        })
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/buttons/buttons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Buttons</h2>\n\n<div class=\"row mt-4\">\n  <div class=\"col-lg\">\n    <h4>Colored</h4>\n    <div class=\"card\">\n      <div class=\"card-body \">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn w-25 m-3 btn-primary\">Primary</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-secondary\">Secondary</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-success\">Success</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-danger\">Danger</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-warning\">Warning</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-info\">Info</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-light\">Light</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-dark\">Dark</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-link\">Link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg mt-4 mt-md-0\">\n    <h4>Outline</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-primary\">Primary</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-secondary\">Secondary</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-success\">Success</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-danger\">Danger</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-warning\">Warning</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-info\">Info</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-light\">Light</button>\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-dark\">Dark</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h4 class=\"mt-4\"> Sizes </h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn w-13 m-3 btn-primary btn-lg\">Large</button>\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-primary btn-lg\">Large</button>\n    <button type=\"button\" class=\"btn w-13 m-3 btn-success\">Default</button>\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-success\">Default</button>\n    <button type=\"button\" class=\"btn w-13 m-3 btn-warning btn-sm\">Small</button>\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-warning btn-sm\">Small</button>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Types</h4>\n<div class=\"row\">\n  <div class=\"col-md \">\n    <h6>Default Border</h6>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">\n        <button type=\"button\" class=\"btn w-30  m-3 btn-secondary\">Default</button>\n        <button type=\"button\" class=\"btn w-30  m-3 btn-outline-secondary\">Default</button>\n        <div class=\"w-100\"></div>\n        <button type=\"button\" class=\"btn w-30 w-sm-80 m-3 btn-dark\"><i class=\"material-icons\">volume_up</i> With Icon</button>\n        <button type=\"button\" class=\"btn w-30 w-sm-80 m-3 btn-outline-dark\"><i class=\"material-icons\">mic</i> With Icon</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md mt-3 mt-md-0\">\n    <h6>Rounded Border</h6>\n    <div class=\"card\">\n      <div class=\"card-body text-center\">      \n        <button type=\"button\" class=\"btn  w-30 m-3 btn-round btn-info\">Round</button>\n        <button type=\"button\" class=\"btn  w-30 m-3 btn-round btn-outline-info\">Round</button>\n        <div class=\"w-100\"></div>\n        <button type=\"button\" class=\"btn  w-30 w-sm-80 m-3 btn-round btn-warning\"><i class=\"material-icons\">check</i> With Icon</button>\n        <button type=\"button\" class=\"btn  w-30 w-sm-80 m-3 btn-round btn-outline-warning\"><i class=\"material-icons\">warning</i> With Icon</button>\n      </div>\n    </div>\n  </div>\n</div>\n  \n<h6 class=\"mt-3\">Only Icons</h6>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn m-3 btn-primary btn-just-icon\"><i class=\"material-icons\">send</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-outline-primary btn-just-icon\"><i class=\"material-icons\">chat</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-light btn-just-icon\"><i class=\"material-icons\">volume_up</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-outline-light btn-just-icon\"><i class=\"material-icons\">videocam</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-success rounded-circle btn-just-icon\"><i class=\"material-icons\">edit</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-outline-success rounded-circle btn-just-icon\"><i class=\"material-icons\">add</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-danger rounded-circle btn-just-icon\"><i class=\"material-icons\">favorite</i></button>\n    <button type=\"button\" class=\"btn m-3 btn-outline-danger rounded-circle btn-just-icon\"><i class=\"material-icons\">close</i></button>\n  </div>\n</div>\n\n<h6 class=\"mt-3\">Block Level</h6>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <button type=\"button\" class=\"btn my-3 btn-primary btn-md btn-block\">Block level button</button>\n    <button type=\"button\" class=\"btn btn-round my-3 btn-outline-primary btn-md btn-block\">Block level button</button>\n  </div>\n</div>\n\n<h4 class=\"mt-4\">Groups</h4>\n<h6>Horizontal Group</h6>\n<div class=\"card\">\n  <div class=\"card-body text-center\">\n    <div class=\"btn-group m-3\">\n      <button type=\"button\" class=\"btn btn-primary\">Left</button>\n      <button type=\"button\" class=\"btn btn-primary\">Middle</button>\n      <button type=\"button\" class=\"btn btn-primary\">Right</button>\n    </div>\n    <div class=\"btn-group m-3\">\n      <button type=\"button\" class=\"btn btn-outline-primary\">Left</button>\n      <button type=\"button\" class=\"btn btn-outline-primary\">Midddle</button>\n      <button type=\"button\" class=\"btn btn-outline-primary\">Right</button>\n    </div>\n    <div class=\"btn-group-round m-3\">\n      <button type=\"button\" class=\"btn btn-secondary\">First</button>\n      <button type=\"button\" class=\"btn btn-secondary\">Second</button>\n      <button type=\"button\" class=\"btn btn-secondary\">Third</button>\n    </div>\n    <div class=\"btn-group-round m-3\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\">First</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Second</button>\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Third</button>\n    </div>\n  </div>\n</div>\n\n<h6 class=\"mt-3\">Vertical Group</h6>\n<div class=\"card\">\n  <div class=\"card-body text-center\">\n    <div class=\"btn-group btn-group-vertical m-3\">\n      <button type=\"button\" class=\"btn text-left btn-info\"> ALL </button>\n      <button type=\"button\" class=\"btn text-left btn-info\"> Published </button>\n      <button type=\"button\" class=\"btn text-left btn-info\"> Unpublished </button>\n      <button type=\"button\" class=\"btn text-left btn-info\"> Draft </button>\n    </div>\n    <div class=\"btn-group btn-group-vertical m-3\">\n      <button type=\"button\" class=\"btn btn-outline-info\"> One  </button>\n      <button type=\"button\" class=\"btn btn-outline-info\"> Two </button>\n      <button type=\"button\" class=\"btn btn-outline-info\"> Three </button>\n      <button type=\"button\" class=\"btn btn-outline-info\"> Four </button>\n    </div>\n    <div class=\"w-100 show-sm\"></div>\n    <!-- <div class=\"btn-group-round btn-group-vertical m-3\">\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> ALL </button>\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Published </button>\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Unpublished </button>\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Draft </button>\n    </div> -->\n    <div class=\"btn-group-round btn-group-vertical m-3\">\n      <button type=\"button\" class=\"btn btn-outline-light\"> One </button>\n      <button type=\"button\" class=\"btn btn-outline-light\"> Two </button>\n      <button type=\"button\" class=\"btn btn-outline-light\"> Three </button>\n      <button type=\"button\" class=\"btn btn-outline-light\"> Four </button>\n    </div>\n    <div class=\"btn-group btn-group-vertical m-3\">\n      <button type=\"button\" class=\"btn btn-dark\" disabled> GROUP </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\"> A </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\"> B </button>\n      <button type=\"button\" class=\"btn btn-outline-dark\"> C </button>\n    </div>\n  </div>\n</div>\n\n<h6 class=\"mt-3\">Group with Icons</h6>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-8 text-center\">\n        <div class=\"btn-group m-3\">\n          <button type=\"button\" class=\"btn btn-success hide-sm\"> <i class=\"fa fa-fw fa-mail-forward\"></i> Forward</button>\n          <button type=\"button\" class=\"btn btn-success\"> <i class=\"fa fa-fw fa-archive\"></i> Archive</button>\n          <button type=\"button\" class=\"btn btn-success\"> <i class=\"fa fa-fw fa-folder\"></i> Move</button>\n        </div>\n        <!-- <div class=\"btn-group m-3\">\n          <button type=\"button\" class=\"btn btn-outline-success \"> <i class=\"fa fa-fw fa-pencil\"></i>Create</button>\n          <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-book\"></i>Read</button>\n          <button type=\"button\" class=\"btn btn-outline-success hide-sm\"> <i class=\"fa fa-fw fa-upload\"></i>upload</button>\n        </div> -->\n        <div class=\"btn-group m-3\">\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-caret-left\"></i>Left</button>\n          <button type=\"button\" class=\"btn btn-dark\" disabled>Middle</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> Right <i class=\"fa fa-fw fa-caret-right\"></i></button>\n        </div>\n        <!-- <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-danger\"> <i class=\"fa fa-fw fa-mail-forward\"></i> Forward</button>\n          <button type=\"button\" class=\"btn btn-danger hide-sm\"> <i class=\"fa fa-fw fa-archive\"></i> Archive</button>\n          <button type=\"button\" class=\"btn btn-danger \"> <i class=\"fa fa-fw fa-folder\"></i> Move</button>\n        </div> -->\n        <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-outline-danger\"> <i class=\"fa fa-fw fa-pencil\"></i>Create</button>\n          <button type=\"button\" class=\"btn btn-outline-danger hide-sm\"> <i class=\"fa fa-fw fa-book\"></i>Read</button>\n          <button type=\"button\" class=\"btn btn-outline-danger\"> <i class=\"fa fa-fw fa-upload\"></i>upload</button>\n        </div>\n        <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-caret-left\"></i>Left</button>\n          <button type=\"button\" class=\"btn btn-dark\" disabled>Middle</button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> Right <i class=\"fa fa-fw fa-caret-right\"></i></button>\n        </div>\n      </div>\n      <div class=\"col text-center\">\n        <div class=\"btn-group btn-group-vertical m-3\">\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-euro\"></i>EUR </button>\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-gbp\"></i> GBP </button>\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-dollar\"></i> USD </button>\n        </div>\n        <div class=\"btn-group btn-group-vertical m-3\">\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-euro\"></i>EUR </button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-gbp\"></i> GBP </button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-dollar\"></i> USD </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n    \n<h6 class=\"mt-3\">Group only Icons</h6>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-8 text-center\">\n        <div class=\"btn-group m-3\">\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-left\"></i> </button>\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-justify\"></i> </button>\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-right\"></i> </button>\n        </div>\n        <div class=\"btn-group m-3\">\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-left\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-justify\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-right\"></i> </button>\n        </div>\n        <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-bold\"></i> </button>\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-italic\"></i> </button>\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-underline\"></i> </button>\n        </div>\n        <div class=\"btn-group-round m-3\">\n        <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-bold\"></i> </button>\n        <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-italic\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-underline\"></i> </button>\n        </div>\n        <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-warning\"> <i class=\"fa fa-fw fa-plus\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-warning\"> <i class=\"fa fa-fw fa-minus\"></i> </button>\n        </div>\n        <div class=\"btn-group-round m-3\">\n          <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-fw fa-backward\"></i> </button>\n          <button type=\"button\" class=\"btn btn-light\"> <i class=\"fa fa-fw fa-play\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-fw fa-forward\"></i> </button>\n        </div>\n      </div>\n      <div class=\"col text-center\">\n        <div class=\"btn-group btn-group-vertical m-3\">\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-bar-chart\"></i> </button>\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-pie-chart\"></i>  </button>\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-line-chart\"></i> </button>\n        </div>\n        <div class=\"btn-group-round btn-group-vertical m-3\">\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-bar-chart\"></i> </button>\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-pie-chart\"></i>  </button>\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-line-chart\"></i> </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Pagination</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\" p-4 bg-primary\"> <h4 class=\"text-white\"> Current Page no : <span class=\"text-white\">{{ paginationPage }}</span>  </h4>  </div>\n    <div class=\"row p-md-3\">\n      <div class=\"col-md\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\">  <a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage === 5 \"><a class=\"page-link\"  (click)=\"goToPage(5)\">5</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\n        </ul>\n        <ul class=\"pagination-round\">\n          <li class=\"page-item\">  <a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \" ><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \" ><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \" ><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \" ><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\n          <li class=\"page-item hide-sm\"  [class.active]=\"paginationPage === 5 \"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\n        </ul>\n      </div>\n      <div class=\"col-md\">\n        <ul class=\"pagination-shwd\">\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage ===  5\"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\n        </ul>\n        <ul class=\"pagination-round-shwd\">\n          <li class=\"page-item\"><a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage === 5 \"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.w-13 {\n  width: 13%; }\n.w-30 {\n  width: 30%; }\n.show-sm {\n  display: none; }\n@media (max-width: 1199.98px) {\n  .m-3 {\n    margin: .3rem !important; }\n  .w-25 {\n    width: 30% !important; }\n  .w-30 {\n    width: 45% !important; }\n  .w-13 {\n    width: 15% !important; } }\n@media (max-width: 991.98px) {\n  .w-25 {\n    width: 20% !important; } }\n@media (max-width: 767.98px) {\n  .w-13, .w-25, .w-30 {\n    width: 45% !important; }\n  .w-sm-80 {\n    width: 80% !important; }\n  .m-3 {\n    margin: .3rem !important; }\n  .hide-sm {\n    display: none; }\n  .show-sm {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.paginationPage = 1;
    }
    ButtonsComponent.prototype.incPage = function () {
        if (this.paginationPage < 5) {
            this.paginationPage++;
        }
    };
    ButtonsComponent.prototype.decPage = function () {
        if (this.paginationPage > 1) {
            this.paginationPage--;
        }
    };
    ButtonsComponent.prototype.goToPage = function (number) {
        this.paginationPage = number;
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/components/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/components-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/components-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/components/grids/grids.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'alerts', component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"] },
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"] },
    { path: 'grids', component: _grids_grids_component__WEBPACK_IMPORTED_MODULE_4__["GridsComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'panels', component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"] }
];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/components/grids/grids.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components-routing.module */ "./src/app/components/components-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"], _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__["GridsComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"], _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/grids/grids.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/grids/grids.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Grid System</h2>\n\n<div class=\"grid-system mt-4\">\n  <h4>Always Horizontal</h4>\n  <h6 class=\"mt-2\">Equally distributed across all devices automatiaclly</h6>\n  <div class=\"row\">\n    <div class=\"col px-2 py-0\" *ngFor=\"let n of [0,1,2,3,4,5,7,8,9,10,11]\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col</div>\n      </div>\n    </div>\n  </div>\n\n  <h6 class=\"mt-2\">Four columns across all devices</h6>\n  <div class=\"row\">\n    <div class=\"col-3 px-2 py-0\" *ngFor=\"let n of [0,1,2,3]\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-3</div>\n      </div>\n    </div>\n  </div>\n\n  <h6 class=\"mt-2\">Three columns across all devices</h6>\n  <div class=\"row\">\n    <div class=\"col-4 px-2 py-0\" *ngFor=\"let n of [0,1,2]\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-4</div>\n      </div>\n    </div>\n  </div>\n\n  <h6 class=\"mt-2\">Two columns across all devices</h6>\n  <div class=\"row\">\n    <div class=\"col-6 px-2 py-0\" *ngFor=\"let n of [0,1]\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-6</div>\n      </div>\n    </div>\n  </div>\n\n  <h6 class=\"mt-2\">Single columns across all devices</h6>\n  <div class=\"row\">\n    <div class=\"col-12 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-12</div>\n      </div>\n    </div>\n  </div>\n\n  <h4 class=\"mt-4\">Mixed Columns</h4> \n  <!-- <h6 class=\"mt-2\">Showing different sizes on different screens</h6> -->\n  <div class=\"row\">\n    <div class=\"col-md-6 col-lg-4\" *ngFor=\"let n of [0,1,2,3,4,5]\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-6 .col-lg-4</div>\n      </div>\n    </div>\n  </div>\n\n  <h4 class=\"mt-4\">Column wrapping</h4>\n  <div class=\"row\">\n    <div class=\"col-9 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-9</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-4\n          <br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>\n      </div>\n    </div>\n    <div class=\"col-6 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-6\n          <br>Subsequent columns continue along the new line.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <h4 class=\"mt-4\">Offsetting columns</h4>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4</div>\n      </div>\n    </div>\n    <div class=\"col-md-4 offset-md-4\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 offset-md-3\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\n      </div>\n    </div>\n    <div class=\"col-md-3 offset-md-3\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">.col-md-6 .offset-md-3</div>\n      </div>\n    </div>\n  </div>\n\n  \n  <h4 class=\"mt-4\">Vertical alignment</h4>\n  <div class=\"row alignment\">\n    <div class=\"col px-2 py-0 align-self-start\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\n      </div>\n    </div>\n    <div class=\"col px-2 py-0 align-self-center\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\n      </div>\n    </div>\n    <div class=\"col px-2 py-0 align-self-end\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\n      </div>\n    </div>\n  </div>\n\n  \n  <h4 class=\"mt-4\">Horizontal alignment</h4>\n  <div class=\"row justify-content-start\">\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-end\">\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-around\">\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row justify-content-between\">\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n    <div class=\"col-4 px-2 py-0\">\n      <div class=\"card m-1 p-1\">\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\n      </div>\n    </div>\n  </div>\n\n  <h4 class=\"mt-4\">Example</h4>\n  <div class=\"card\">\n    <div class=\"card-body m-1\">\n      <div class=\"row\">\n        <div class=\"col-md-9\">\n          <div class=\"row\">\n            <div class=\"col-md\">\n              <h5>Column 1</h5>\n             <p> Lorem ipsum dolor sit amet orem ipsum dolor sit amet consectetur, adipisicing elit.</p>\n            </div>\n            <div class=\"col-md\">\n              <h5>Column 2</h5>\n             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> \n            </div>\n            <div class=\"w-100\"></div>\n            <div class=\"col-md\">\n              <h5>Column 3</h5>\n             <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt maxime voluptate molestiae placeat minima facilis, natus\n              corporis fugit voluptates </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md\">\n          <h5>Column 4</h5>\n         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt maxime voluptate molestiae placeat minima facilis, natus\n          corporis fugit voluptates </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <p class=\"mt-4 text-muted d-block\">For complete information on Bootstrap 4 Grid system :\n    <a href=\"https://getbootstrap.com/docs/4.1/layout/grid/\" target=\"_blank\">Bootstrap 4 Docs  <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a>\n  </p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/grids/grids.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/grids/grids.component.ts ***!
  \*****************************************************/
/*! exports provided: GridsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsComponent", function() { return GridsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridsComponent = /** @class */ (function () {
    function GridsComponent() {
    }
    GridsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grids',
            template: __webpack_require__(/*! ./grids.component.html */ "./src/app/components/grids/grids.component.html"),
            styles: ['.alignment{height:200px;}']
        })
    ], GridsComponent);
    return GridsComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/icons/icons.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Icons</h2>\n\n<div class=\"icons\">\n  <h4 class=\"mt-4\">Material Icons</h4>\n  <div class=\"card\">\n    <div class=\"card-body px-5 py-4\">\n      <div class=\"row\">\n        <div class=\"col ex-md-icons p-3\" *ngFor=\"let icon of materialIcons\">\n          <i class=\"material-icons\">{{icon}}</i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"d-block text-muted text-right\">See All Material Icons : <a href=\"https://material.io/tools/icons/\" target=\"_blank\"> Matrial.io <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a> </p>\n\n  <br>\n  <h4 class=\"mt-4\">Font Awesome Icons</h4>\n  <div class=\"card\">\n    <div class=\"card-body px-5 py-4\">\n      <div class=\"row\">\n        <div class=\"col ex-fa-icons p-4\" *ngFor=\"let icon of fontAwesome\">\n          <i class=\"fa fa-{{icon}}\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"d-block text-muted text-right\">See All Font Awesome Icons : <a href=\"https://fontawesome.com/v4.7.0/icons/\" target=\"_blank\"> Font Awsome <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a></p>\n</div>"

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.materialIcons = ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'keyboard_backspace', 'power',
            'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'keyboard_arrow_right', 'cake',
            'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'videogame_asset', 'people',
            'all_out', 'android', 'announcement', 'done', 'done_all', 'done_outline', 'folder', 'computer', 'smartphone', 'mood',
            'donut_large', 'fingerprint', 'grade', 'group_work', 'help_outline', 'info', 'language', 'watch', 'tv', 'details',
            'launch', 'line_style', 'maximize', 'minimize', 'motorcycle', 'note_add', 'open_in_new', 'camera', 'dehaze', 'close',
            'payment', 'room', 'pets', 'search', 'reorder', 'settings', 'shop', 'star', 'subject', 'stores', 'crop_original', 'wc',
            'toc', 'today', 'toll', 'update', 'zoom_in', 'zoom_out', 'work', 'work_off', 'work_outline', 'control_point', 'menu',
            'error', 'warning', 'airplay', 'album', 'av_timer', 'equalizer', 'hd', 'games', 'mic', 'mic_none', 'crop', 'filter',
            'pause', 'note', 'play_arrow', 'videocam', 'videocam_off', 'volume_up', 'volume_mute', 'music_note', 'slideshow',
            'call', 'call_end', 'chat', 'forum', 'email', 'add', 'clear', 'create', 'block', 'ballot', 'drafts', 'navigate_before',
            'forward', 'reply', 'cloud', 'send', 'undo', 'bluetooth', 'style', 'timer', 'hotel', 'flight', 'layers', 'map', 'check'
        ];
        this.fontAwesome = ['address-book', 'address-card', 'adjust', 'anchor', 'archive', 'area-chart', 'arrows', 'arrows-h', 'arrows-v',
            'asterisk', 'at', 'automobile', 'balance-scale', 'ban', 'bar-chart', 'bath', 'battery-0', 'battery-1', 'battery-2', 'battery-3',
            'beer', 'bell', 'bicycle', 'binoculars', 'blind', 'bolt', 'bomb', 'book', 'bookmark', 'braille', 'bug', 'bus', 'cab', 'camera',
            'child', 'cloud', 'code', 'coffee', 'cog', 'cogs', 'credit-card', 'cube', 'cutlery', 'desktop', 'edit', 'envelope', 'eraser',
            'external-link', 'fighter-jet', 'file-photo-o', 'filter', 'fire', 'flash', 'flask', 'folder', 'gamepad', 'group', 'heart',
            'handshake-o', 'hourglass', 'i-cursor', 'industry', 'info', 'key', 'location-arrow', 'magic', 'male', 'map', 'map-signs',
            'motorcycle', 'paint-brush', 'paper-plane', 'percent', 'phone', 'power-off', 'refresh', 'reply', 'server', 'sign-in', 'sign-out',
            'sliders', 'snowflake-o', 'soccer-ball-o', 'sort', 'sort-asc', 'spinner', 'spoon', 'star-half-empty', 'sticky-note', 'street-view',
            'suitcase', 'sun-o', 'tachometer', 'tag', 'tags', 'television', 'terminal', 'thermometer', 'thumb-tack', 'thumbs-down', 'thumbs-o-up',
            'ticket', 'times', 'times-circle', 'tint', 'toggle-off', 'toggle-on', 'tree', 'umbrella', 'university', 'unlock', 'user', 'user-secret',
            'vcard', 'video-camera', 'volume-control-phone', 'volume-down', 'volume-off', 'volume-up', 'warning', 'wheelchair', 'window-close-o',
            'wifi', 'wrench', 'btc', 'money', 'ils', 'eur', 'inr', 'usd'
        ];
    }
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/components/icons/icons.component.html"),
            styles: ['.ex-md-icons i{font-size: 40px;} .ex-fa-icons i{font-size: 35px;}']
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h2 class=\"heading text-center\">Notifications</h2>\n<!--\n<br>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"form\">\n      <div class=\"form-group\">\n        <label for=\"type\">Type select</label>\n        <select id=\"type\" class=\"form-control\" name=\"type\" formControlName=\"type\">\n          <option *ngFor=\"let t of types\" [value]=\"t\">{{t}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input class=\"form-control\" id=\"title\" name=\"title\" type=\"text\" formControlName=\"title\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"content\">Content</label>\n        <input class=\"form-control\" id=\"content\" name=\"content\" type=\"text\" formControlName=\"content\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"timeOut\">Time Out</label>\n        <input class=\"form-control\" id=\"timeOut\" name=\"timeOut\" type=\"number\" formControlName=\"timeOut\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"animate\">Animation</label>\n        <select class=\"form-control\" id=\"animate\" name=\"animate\" formControlName=\"animate\">\n          <option *ngFor=\"let t of animationTypes\" [value]=\"t\">{{t}}</option>\n        </select>\n      </div>\n      <div class=\"form-inline\">\n        <label class=\"field-label\">Show progress bar?</label>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"showProgressBar\" id=\"showProgressBar-yes\" [value]=\"true\" formControlName=\"showProgressBar\">\n          <label class=\"form-check-label\" for=\"showProgressBar-yes\">Yes</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"showProgressBar\" id=\"showProgressBar-no\" [value]=\"false\" formControlName=\"showProgressBar\">\n          <label class=\"form-check-label\" for=\"showProgressBar-no\">No</label>\n        </div>\n      </div>\n      <div class=\"form-inline\">\n        <label class=\"field-label\">Prevent Duplicates?</label>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventDuplicates\" id=\"preventDuplicates-yes\" [value]=\"true\" formControlName=\"preventDuplicates\">\n          <label class=\"form-check-label\" for=\"preventDuplicates-yes\">Yes</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventDuplicates\" id=\"preventDuplicates-no\" [value]=\"false\" formControlName=\"preventDuplicates\">\n          <label class=\"form-check-label\" for=\"preventDuplicates-no\">No</label>\n        </div>\n      </div>\n      <div class=\"form-inline\">\n        <label class=\"field-label\">Prevent Last Duplicates?</label>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventLastDuplicates\" id=\"preventLastDuplicates-yes\" [value]=\"true\" formControlName=\"preventLastDuplicates\">\n          <label class=\"form-check-label\" for=\"preventLastDuplicates-yes\">Yes</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventLastDuplicates\" id=\"preventLastDuplicates-no\" [value]=\"false\" formControlName=\"preventLastDuplicates\">\n          <label class=\"form-check-label\" for=\"preventLastDuplicates-no\">No</label>\n        </div>\n      </div>\n      <div class=\"form-inline\">\n        <label class=\"field-label\">Pause on hover?</label>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"pauseOnHover\" id=\"pauseOnHover-yes\" [value]=\"true\" formControlName=\"pauseOnHover\">\n          <label class=\"form-check-label\" for=\"pauseOnHover-yes\">Yes</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"pauseOnHover\" id=\"pauseOnHover-no\" [value]=\"false\" formControlName=\"pauseOnHover\">\n          <label class=\"form-check-label\" for=\"pauseOnHover-no\">No</label>\n        </div>\n      </div>\n      <div class=\"form-inline\">\n        <label class=\"field-label\">Click to close?</label>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"clickToClose\" id=\"clickToClose-yes\" [value]=\"true\" formControlName=\"clickToClose\">\n          <label class=\"form-check-label\" for=\"clickToClose-yes\">Yes</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"clickToClose\" id=\"clickToClose-no\" [value]=\"false\" formControlName=\"clickToClose\">\n          <label class=\"form-check-label\" for=\"clickToClose-no\">No</label>\n        </div>\n      </div>\n      <button type=\"submit\" (click)=\"create()\" class=\"btn btn-primary mb-2\">Confirm identity</button>\n    </form>\n  </div>\n</div>\n<h6 class=\"text-right\">get detailed information at : <a href=\"https://github.com/flauc/angular2-notifications\"> angular2-notifications <i _ngcontent-c7=\"\" class=\"material-icons\">launch</i> </a></h6> -->\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
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

// import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { NotificationsService } from 'angular2-notifications';
// import { NotificationsService } from 'projects/angular6-notifications/src/public_api';
var NotificationsComponent = /** @class */ (function () {
    /*
        form: FormGroup;
      types = ['alert', 'error', 'info', 'warn', 'success'];
        animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
        // options= {}
    
        logs: any[] = [];
    
      options: any = {
        progress: true,
        timeout: 1000 * 3,
        pauseOnHover: true,
        clickToClose: true,
        theme: 'default',
        rtl: false,
        className: 'my-notify',
        animate_in: 'notify-fade-in',
        animate_out: 'notify-fade-out',
        onCreate: item => {
          this.logs.push(item);
        },
        onDestroy: item => {
          this.logs.push(item);
        },
      };
    
      setting: any = {
        position: ['right', 'bottom'],
        offset: [20, 20],
        lastOnBottom: true,
        zIndex: 1031,
        minWidth: 300,
        maxWidth: 300,
      };
    
    */
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        /*	this.form = this.fb.group({
                type: 'success',
                title: 'This is just a title',
                content: 'This is just some content',
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                preventDuplicates: true,
                preventLastDuplicates: true,
                clickToClose: true,
                maxStack : 5,
                animate: 'fromRight'
            });*/
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html"),
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/panels/panels.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/panels/panels.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Panels</h2>\n\n<h4 class=\"mt-4\">Horizontal Tabs</h4>\n<div class=\"row\">\n  <div class=\"col-xl\">\n    <h6>Default</h6>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"p-3 mb-4\">\n          <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab1\" data-toggle=\"tab\" href=\"#home1\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile-tab1\" data-toggle=\"tab\" href=\"#profile1\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"contact-tab1\" data-toggle=\"tab\" href=\"#contact1\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n            </li>\n          </ul>\n          <div class=\"tab-content pt-2\" id=\"myTabContent1\">\n            <div class=\"tab-pane fade show active\" id=\"home1\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\n              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>\n            <div class=\"tab-pane fade\" id=\"profile1\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore\n              velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.\n              Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.\n              Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero\n              magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts\n              beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint\n              qui sapiente accusamus tattooed echo park.</div>\n            <div class=\"tab-pane fade\" id=\"contact1\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack\n              lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore\n              carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred\n              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice\n              blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable\n              tofu synth chambray yr.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl mt-4 mt-xl-0\">\n    <h6>With Icons</h6>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"p-3 mb-4\">\n          <ul class=\"nav nav-tabs\" id=\"myTab2\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home2-tab\" data-toggle=\"tab\" href=\"#home2\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">\n                <i class=\"material-icons pr-2\"> home </i>Home</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile2-tab\" data-toggle=\"tab\" href=\"#profile2\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">\n                <i class=\"material-icons pr-2\"> person </i>Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"contact2-tab\" data-toggle=\"tab\" href=\"#contact2\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">\n                <i class=\"material-icons pr-2\"> contacts </i>Contact</a>\n            </li>\n          </ul>\n          <div class=\"tab-content pt-2\" id=\"myTabContent2\">\n            <div class=\"tab-pane fade show active\" id=\"home2\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\n              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\n              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip2 placeat salvia\n              cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>\n            <div class=\"tab-pane fade\" id=\"profile2\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation2 +1 labore\n              velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.\n              Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.\n              Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero\n              magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts\n              beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint\n              qui sapiente accusamus tattooed echo park.</div>\n            <div class=\"tab-pane fade\" id=\"contact2\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack\n              lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore\n              carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred\n              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice\n              blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable\n              tofu synth chambray yr.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Vertical Tabs</h4>\n<h6>Default</h6>  \n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row p-3\">\n      <div class=\"col-md-3\">\n        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n          <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\"\n            aria-selected=\"true\">Home</a>\n          <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\"\n            aria-selected=\"false\">Profile</a>\n          <a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\"\n            aria-selected=\"false\">Messages</a>\n          <a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\"\n            aria-selected=\"false\">Settings</a>\n        </div>\n      </div>\n      <div class=\"col-md\">\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt\n            do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit\n            excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit\n            mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna\n            pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id\n            veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu.\n            Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris\n            ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident\n            Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in\n            cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit\n            consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing\n            labore officia magna elit nisi in aute tempor commodo eiusmod.div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h6 class=\"mt-4\">With Icons</h6>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row p-3\">\n      <div class=\"col-md-3\">\n        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab1\" role=\"tablist\" aria-orientation=\"vertical\">\n          <a class=\"nav-link active\" id=\"v-pills-home1-tab\" data-toggle=\"pill\" href=\"#v-pills-home1\" role=\"tab\" aria-controls=\"v-pills-home1\"\n            aria-selected=\"true\"><i class=\"material-icons pr-2\">home</i> Home</a>\n          <a class=\"nav-link\" id=\"v-pills-profile2-tab\" data-toggle=\"pill\" href=\"#v-pills-profile2\" role=\"tab\" aria-controls=\"v-pills-profile2\"\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">person</i>Profile</a>\n          <a class=\"nav-link\" id=\"v-pills-messages2-tab\" data-toggle=\"pill\" href=\"#v-pills-messages2\" role=\"tab\" aria-controls=\"v-pills-messages2\"\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">message</i>Messages</a>\n          <a class=\"nav-link\" id=\"v-pills-settings2-tab\" data-toggle=\"pill\" href=\"#v-pills-settings2\" role=\"tab\" aria-controls=\"v-pills-settings2\"\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">settings</i>Settings</a>\n        </div>\n      </div>\n      <div class=\"col-md\">\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"v-pills-home1\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt\n            do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit\n            excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit\n            mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-profile2\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna\n            pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id\n            veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu.\n            Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-messages2\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages2-tab\">Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris\n            ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident\n            Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</div>\n          <div class=\"tab-pane fade\" id=\"v-pills-settings2\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings2-tab\">Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in\n            cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit\n            consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing\n            labore officia magna elit nisi in aute tempor commodo eiusmod.div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<h4 class=\"mt-4\">Accordion</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"accordion mb-5 mt-3\" id=\"accordion\">\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingOne\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link \" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n              Collapsible Group Item #1\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseOne\" class=\"collapse show px-3\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingTwo\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link  collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n              Collapsible Group Item #2\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseTwo\" class=\"collapse px-3\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\" id=\"headingThree\">\n          <h5 class=\"mb-0\">\n            <button class=\"btn btn-link  collapsed \" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n              Collapsible Group Item #3\n            </button>\n          </h5>\n        </div>\n        <div id=\"collapseThree\" class=\"collapse px-3\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n          <div class=\"card-body\">\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<h4 class=\"mt-4\">Custom Tab</h4>\n<div class=\"custom-tab\">\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.\n      Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.\n      Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip\n      quis cardigan american apparel, butcher voluptate nisi qui.</div>\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,\n      blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth\n      letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\n      assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore\n      stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry\n      richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo\n      park.</div>\n    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi\n      farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy\n      salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg\n      banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably\n      haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/panels/panels.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/panels/panels.component.ts ***!
  \*******************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/components/panels/panels.component.html")
        })
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Typography</h2>\n<br>\n<div class=\"row \">\n  <div class=\"col-xl\">\n    <h4>Headings</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1>h1. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 2.50rem</span>\n        </h1>\n        <br>\n        <h2>h2. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 2.00rem</span>\n        </h2>\n        <br>\n        <h3>h3. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 1.75rem</span>\n        </h3>\n        <br>\n        <h4>h4. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 1.50rem</span>\n        </h4>\n        <br>\n        <h5>h5. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 1.25rem</span>\n        </h5>\n        <br>\n        <h6>h6. Heading\n          <span class=\"float-right note text-muted\">font-size:\n            <br> 1.00rem</span>\n        </h6>\n      </div>\n    </div>\n    <p class=\"float-right note\">* 1rem = 16px</p>\n  </div>\n  <div class=\"col-xl\">\n    <h4>Paragraph</h4>\n    <div class=\"card pb-3\">\n      <div class=\"card-body\">\n        <p>You can use the mark tag to\n          <mark>highlight</mark> text.</p>\n        <p>\n          <del>This line of text is meant to be treated as deleted text.</del>\n        </p>\n        <p>\n          <s>This line of text is meant to be treated as no longer accurate.</s>\n        </p>\n        <p>\n          <ins>This line of text is meant to be treated as an addition to the document.</ins>\n        </p>\n        <p>\n          <u>This line of text will render as underlined</u>\n        </p>\n        <p>\n          <small>This line of text is meant to be treated as fine print.</small>\n        </p>\n        <p>\n          <strong>This line rendered as bold text.</strong>\n        </p>\n        <p>\n          <em>This line rendered as italicized text.</em>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-xl\">\n    <h3>Font Color</h3>\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <p class=\"text-primary\">.text-primary</p>\n          <p class=\"text-secondary\">.text-secondary</p>\n          <p class=\"text-success\">.text-success</p>\n          <p class=\"text-danger\">.text-danger</p>\n          <p class=\"text-warning\">.text-warning</p>\n          <p class=\"text-info\">.text-info</p>\n          <p class=\"text-light bg-dark\">.text-light</p>\n          <p class=\"text-dark\">.text-dark</p>\n          <p class=\"text-muted\">.text-muted</p>\n          <p class=\"text-white bg-dark\">.text-white</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl\">\n    <h3>Link Color</h3>\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <p><a href=\"#\" class=\"text-primary\">Primary link</a></p>\n          <p><a href=\"#\" class=\"text-secondary\">Secondary link</a></p>\n          <p><a href=\"#\" class=\"text-success\">Success link</a></p>\n          <p><a href=\"#\" class=\"text-danger\">Danger link</a></p>\n          <p><a href=\"#\" class=\"text-warning\">Warning link</a></p>\n          <p><a href=\"#\" class=\"text-info\">Info link</a></p>\n          <p><a href=\"#\" class=\"text-light bg-dark\">Light link</a></p>\n          <p><a href=\"#\" class=\"text-dark\">Dark link</a></p>\n          <p><a href=\"#\" class=\"text-muted\">Muted link</a></p>\n          <p><a href=\"#\" class=\"text-white bg-dark\">White link</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<div class=\"row\">\n  <div class=\"col-xl\">\n    <h4>Blockquote</h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n        </blockquote>\n        <blockquote class=\"blockquote\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">Someone famous in\n            <cite title=\"Source Title\">Source Title</cite>\n          </footer>\n        </blockquote>\n        <blockquote class=\"blockquote text-center\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">Someone famous in\n            <cite title=\"Source Title\">Source Title</cite>\n          </footer>\n        </blockquote>\n        <blockquote class=\"blockquote text-right\">\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n          <footer class=\"blockquote-footer\">Someone famous in\n            <cite title=\"Source Title\">Source Title</cite>\n          </footer>\n        </blockquote>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<h4>List</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-xl\">\n        <strong>Unordered List</strong>\n        <ul >\n          <li>Lorem ipsum dolor sit amet</li>\n          <li>Integer molestie lorem at massa</li>\n          <li>Nulla volutpat aliquam velit\n            <ul>\n              <li>Purus sodales ultricies</li>\n              <li>Vestibulum laoreet porttitor sem</li>\n              <li>Ac tristique libero volutpat at</li>\n            </ul>\n          </li>\n          <li>Faucibus porta lacus fringilla vel</li>\n          <li>Eget porttitor lorem</li>\n        </ul>\n      </div>\n      <div class=\"col-xl\">\n        <strong>Ordered List</strong>\n        <ol>\n            <li>Lorem ipsum dolor sit amet</li>\n            <li>Integer molestie lorem at massa</li>\n            <li>Nulla volutpat aliquam velit\n              <ol>\n                <li>Purus sodales ultricies</li>\n                <li>Vestibulum laoreet porttitor sem</li>\n                <li>Ac tristique libero volutpat at</li>\n              </ol>\n            </li>\n            <li>Faucibus porta lacus fringilla vel</li>\n            <li>Eget porttitor lorem</li>\n          </ol>\n      </div>\n    </div>\n    <div>\n      <strong>Inline List</strong>\n      <ul class=\"list-inline\">\n        <li class=\"list-inline-item\">Lorem ipsum</li>\n        <li class=\"list-inline-item\">Phasellus iaculis</li>\n        <li class=\"list-inline-item\">Nulla volutpat</li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<br>\n<h4>Description list alignment</h4>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <dl class=\"row\">\n      <dt class=\"col-sm-3\">Description lists</dt>\n      <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\n\n      <dt class=\"col-sm-3\">Euismod</dt>\n      <dd class=\"col-sm-9\">\n        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\n        <p>Donec id elit non mi porta gravida at eget metus.</p>\n      </dd>\n\n      <dt class=\"col-sm-3\">Malesuada porta</dt>\n      <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\n\n      <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\n      <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n\n      <dt class=\"col-sm-3\">Nesting</dt>\n      <dd class=\"col-sm-9\">\n        <dl class=\"row\">\n          <dt class=\"col-sm-4\">Nested definition list</dt>\n          <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n        </dl>\n      </dd>\n    </dl>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: ['.note{font-size: .75rem;}']
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map