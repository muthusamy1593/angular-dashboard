(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Stats : </h4>\n<app-stats></app-stats>\n\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <h4 class=\"mt-4\">Task : </h4>\n    <app-tasks></app-tasks>\n    <h4 class=\"mt-4\"> Events : </h4>\n    <div class=\"card\">\n      <div class=\"card-body sm-p-0\">\n        <div id=\"cal\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <h4 class=\"mt-4\">Activity : </h4>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"activity\">\n          <div *ngFor=\"let data of activitys\"  class=\"activity-block\">\n            <div class=\"activity-icon\"><i class=\"material-icons\">{{data.icon}}</i></div>\n            <div class=\"activity-content card\">\n              <div class=\"activity-content-head card-header\">{{data.head}}</div>\n              <div class=\"activity-content-body card-body\">{{data.body}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n@media (max-width: 767.98px) {\n  .card-body.sm-p-0 {\n    padding: 0; } }\n.activity {\n  position: relative; }\n.activity:before {\n    content: '';\n    top: 0;\n    height: 100%;\n    width: 4px;\n    border-radius: 1rem;\n    position: absolute;\n    background: rgba(144, 146, 165, 0.5);\n    left: 16px; }\n.activity-block {\n    display: flex;\n    margin: 1rem 0; }\n.activity-icon {\n    border-radius: 50%;\n    top: 5px;\n    position: relative;\n    color: #fff;\n    width: 36px;\n    height: 36px;\n    background-color: #3ebb8c;\n    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); }\n.activity-icon i {\n      font-size: 1.3rem;\n      margin: calc((36px / 2) - 1.3rem / 2); }\n.activity-content {\n    width: calc(100% - 36px - 36px / 2);\n    margin-left: 18px; }\n.activity-content:before {\n      content: '';\n      position: absolute;\n      top: 1rem;\n      right: 100%;\n      height: 0;\n      width: 0;\n      border: .5rem solid transparent;\n      border-right: 0.5rem solid #3ebb8c; }\n.activity-content-head {\n      background-color: #3ebb8c;\n      color: #fff; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent() {
        this.activitys = [
            { icon: 'edit', head: 'heading', body: 'body' },
            { icon: 'map', head: 'heading', body: 'body' },
            { icon: 'edit', head: 'heading', body: 'body' },
            { icon: 'edit', head: 'heading', body: 'body' },
            { icon: 'map', head: 'heading', body: 'body' },
            { icon: 'map', head: 'heading', body: 'body' }
        ];
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
        this.calendar();
    };
    DashboardHomeComponent.prototype.calendar = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#cal').fullCalendar({
            themeSystem: 'bootstrap4',
            fixedWeekCount: false,
            height: 400,
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
    DashboardHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-home',
            template: __webpack_require__(/*! ./dashboard-home.component.html */ "./src/app/dashboard/dashboard-home/dashboard-home.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-home.component.scss */ "./src/app/dashboard/dashboard-home/dashboard-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            { path: '', component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"] },
            { path: 'components', loadChildren: '../components/components.module#ComponentsModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormsLocalModule' },
            { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'editors', loadChildren: '../editors/editors.module#EditorsModule' },
            { path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarModule' }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.sidebar-mini]=\"cmnSrv.dashboardState.sidebarMiniToggle\">\n  <div class=\"sidebar-panel\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <div class=\"panel-content\">\n      <router-outlet></router-outlet>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.wrapper {\n  display: flex; }\n.main-panel {\n  transition: all 0.2s ease-in-out; }\n.main-panel .panel-content {\n    margin: 50px;\n    margin-top: 100px; }\n@media (max-width: 1199.98px) {\n  .sidebar-panel {\n    width: 220px; }\n  .main-panel {\n    width: calc(100% - 220px); }\n    .main-panel .panel-content {\n      margin: 25px;\n      margin-top: 70px; } }\n@media (max-width: 991.98px) {\n  .sidebar-panel {\n    width: 62px; }\n  .main-panel {\n    width: calc(100% - 62px); } }\n@media (max-width: 767.98px) {\n  .sidebar-panel {\n    width: 0; }\n  .main-panel {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, cmnSrv, renderer) {
        this.router = router;
        this.cmnSrv = cmnSrv;
        this.renderer = renderer;
        nprogress__WEBPACK_IMPORTED_MODULE_3__["configure"]({ showSpinner: false });
        /**
         * to add preload class before loading the APP
         * to prevent transition effection on many element on app startup
         */
        this.renderer.addClass(document.body, 'preload');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * for progres bar (loading) on top; after route chages
         */
        this.router.events.subscribe(function (obj) {
            if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"]) {
                nprogress__WEBPACK_IMPORTED_MODULE_3__["start"]();
                nprogress__WEBPACK_IMPORTED_MODULE_3__["set"](0.4);
            }
            else if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"]) {
                nprogress__WEBPACK_IMPORTED_MODULE_3__["set"](0.9);
                setTimeout(function () {
                    nprogress__WEBPACK_IMPORTED_MODULE_3__["done"]();
                    nprogress__WEBPACK_IMPORTED_MODULE_3__["remove"]();
                }, 500);
            }
            else if (obj instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.cmnSrv.dashboardState.navbarToggle = false;
                _this.cmnSrv.dashboardState.sidebarToggle = true;
                window.scrollTo(0, 0);
            }
        });
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        /**
         * for removing transition effection on load of the page
         */
        setTimeout(function () {
            _this.renderer.removeClass(document.body, 'preload');
        }, 300);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/dashboard/tasks/tasks.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/dashboard/stats/stats.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"]
            ],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_6__["DashboardHomeComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_10__["StatsComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <!-- moth and day chart -->\n      <div class=\"row col-md-8 no-gutters\">\n        <!-- month chart -->\n        <div class=\"row col-md no-gutters\">\n          <div class=\"col-md-11\">\n            <h3 class=\" text-muted m-0 font-weight-bold\">35,000</h3>\n            <small class=\"text-muted m-0\">Sales in current month</small>\n            <div class=\"chart\">\n              <canvas id=\"month-sales-chart\"></canvas>\n            </div>\n          </div>\n          <div class=\"w-100 \"></div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">236 321.80</small> \n          </div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">236 321.80</small> \n          </div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">236 321.80</small> \n          </div>\n        </div>\n        <!-- day chart -->\n        <div class=\"row col-md no-gutters\">\n          <div class=\"col-md-11 mt-4 mt-md-0\">\n            <h3 class=\" text-muted m-0 font-weight-bold\">5,000</h3>\n            <small class=\"text-muted m-0\">Today Sales</small>\n            <div class=\"chart\">\n              <canvas id=\"day-sales-chart\"></canvas>\n            </div>\n          </div>\n          <div class=\"w-100\"></div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">6 321.80</small> \n          </div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">6 321.80</small> \n          </div>\n          <div class=\"col\">\n            <small class=\"text-muted m-0 d-inline-block\">Pages / Visit</small>\n            <small class=\"strong d-inline-block font-weight-bold text-muted\">6 321.80</small> \n          </div>\n        </div>\n      </div>\n      <!-- income table -->\n      <div class=\"col-md mt-4 mt-md-0\">\n        <div class=\"row no-gutters\">\n          <div class=\"col\">\n            <small class=\"text-muted font-weight-bold\">income in last month</small>\n            <h3 class=\"text-muted m-0 font-weight-bold\">160,000</h3>\n          </div>\n          <div class=\"col\">\n            <small class=\"text-muted font-weight-bold\">Sales in current year</small>\n            <h3 class=\"text-muted m-0 font-weight-bold\">42,000</h3>\n          </div>\n        </div>\n        <table class=\"table\">\n          <tbody>\n            <tr>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">142</span>   Projects</td>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">22</span>   Messages</td>\n            </tr>\n            <tr>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">142</span>   Projects</td>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">22</span>   Messages</td>\n            </tr>\n            <tr>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">142</span>   Projects</td>\n              <td class=\"text-muted\"> <span class=\"font-weight-bold\">22</span>   Messages</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <!-- full chart -->\n    <div class=\"full-chart mt-4\">\n      <canvas id=\"full-chart\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart {\n  position: relative;\n  height: 70px; }\n\n.full-chart {\n  position: relative;\n  height: 150px; }\n"

/***/ }),

/***/ "./src/app/dashboard/stats/stats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/stats/stats.component.ts ***!
  \****************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/config/colorCodes */ "./src/app/shared/config/colorCodes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.salesChart();
        this.dayChart();
        this.fullChart();
    };
    StatsComponent.prototype.salesChart = function () {
        var sales = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('month-sales-chart'), {
            type: 'line',
            data: {
                labels: [0, 20, 40, 30, 10, 25, 36],
                datasets: [
                    {
                        data: [29, 25, 35, 30, 32, 25, 36],
                        borderColor: _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].primary.hex,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        radius: 2
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }]
                },
                title: false,
                legend: false,
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 5
                    }
                },
                maintainAspectRatio: false
            }
        });
    };
    StatsComponent.prototype.dayChart = function () {
        var day = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('day-sales-chart'), {
            type: 'line',
            data: {
                labels: [0, 20, 40, 30, 10, 25, 36],
                datasets: [
                    {
                        data: [29, 25, 35, 30, 32, 25, 36],
                        borderColor: _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].primary.hex,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        radius: 2
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }]
                },
                title: false,
                legend: false,
                layout: {
                    padding: {
                        left: 5,
                        right: 5,
                        top: 5,
                        bottom: 0
                    }
                },
                maintainAspectRatio: false
                // responsive: true
            }
        });
    };
    StatsComponent.prototype.fullChart = function () {
        var full = new chart_js__WEBPACK_IMPORTED_MODULE_1__(document.getElementById('full-chart'), {
            type: 'line',
            data: {
                labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                datasets: [
                    {
                        data: [29, 25, 30, 25, 30, 25, 36, 30, 25, 29, 18, 30, 32, 25],
                        backgroundColor: 'rgba(' + _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].secondary.rgba + ' ,.4)',
                        borderColor: _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].secondary.hex,
                        borderWidth: 2,
                        radius: 2
                    },
                    {
                        data: [22, 15, 30, 34, 25, 39, 30, 36, 30, 20, 20, 34, 22, 39],
                        backgroundColor: 'rgba( ' + _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].primary.rgba + ',.4)',
                        borderColor: _shared_config_colorCodes__WEBPACK_IMPORTED_MODULE_2__["colorCodes"].primary.hex,
                        borderWidth: 2,
                        radius: 2
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }],
                    yAxes: [{ gridLines: { color: 'rgba(0, 0, 0, 0)' } }]
                },
                title: false,
                legend: false,
                maintainAspectRatio: false
            }
        });
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/dashboard/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.scss */ "./src/app/dashboard/stats/stats.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/tasks/tasks.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/tasks/tasks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n\n    <div *ngFor=\"let data of tasks;let i = index\" class=\"py-4 task custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [checked]=\"data.check\" id=\"{{'customCheck' + i}}\">\n        <label class=\"custom-control-label\" for=\"{{'customCheck' + i}}\">{{data.text}}</label>\n        <span class=\"icon\" (click)=\"removeTask(i)\"><i class=\"material-icons float-right \">delete</i></span>\n    </div>\n\n    <div class=\"form-group row no-gutters my-4\">\n      <div class=\"col-9\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTask\">\n      </div>\n      <div class=\"col-3 text-center\">\n        <button class=\"px-md-4 px-2 btn btn-primary\" (click)=\"addTask()\">Add</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/tasks/tasks.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/tasks/tasks.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.task {\n  border-bottom: solid 1px #9092a5; }\n.task .custom-control-label {\n    width: 85%;\n    display: inline-block; }\n.task .icon {\n    cursor: pointer; }\n.task .custom-control-input + .custom-control-label {\n    font-weight: bolder; }\n.task .custom-control-input + .custom-control-label::before {\n      border-color: #3ebb8c;\n      background-color: #fff;\n      border: 1px solid #3ebb8c; }\n.task .custom-control-input + .custom-control-label, .task .custom-control-input + .custom-control-label + .icon {\n      color: #3ebb8c; }\n.task .custom-control-input:checked + .custom-control-label {\n    font-weight: normal;\n    text-decoration: line-through; }\n.task .custom-control-input:checked + .custom-control-label::before {\n      background-color: #9092a5;\n      border: none; }\n.task .custom-control-input:checked + .custom-control-label, .task .custom-control-input:checked + .custom-control-label + .icon {\n      color: #9092a5; }\n"

/***/ }),

/***/ "./src/app/dashboard/tasks/tasks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/tasks/tasks.component.ts ***!
  \****************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
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

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
        this.newTask = '';
        this.tasks = [
            { check: true, text: 'Learn something new' },
            { check: false, text: 'Read 5 book in a year' },
            { check: true, text: 'Start a new hobby' },
            { check: false, text: 'Do a very imporatnt task' },
            { check: true, text: 'Not so very important task' }
        ];
    }
    TasksComponent.prototype.removeTask = function (index) {
        this.tasks.splice(index, 1);
    };
    TasksComponent.prototype.addTask = function () {
        if (!!this.newTask) {
            this.tasks.push({ check: false, text: this.newTask });
        }
        this.newTask = '';
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/dashboard/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/dashboard/tasks/tasks.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <hr>\n  <div class=\"container\">\n    <p class=\"text-center\"> Made with <i class=\"fa fa-heart heart text-danger\"></i> <span class=\"mx-3 vr\"></span>\n      Agular admin Panel :\n      <a href=\"https://www.github.com/yadav-saurabh/angular-admin-panel\" target=\"_blank\">Github Link <i class=\"material-icons\">launch</i>\n      </a>\n    </p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.vr {\n  border-right: 2px solid #9092a5; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navigation-bar\"  [class.hidden]=\"cmnSrv.dashboardState.navbarToggle\" [class.sidebar-hidden]=\"cmnSrv.dashboardState.sidebarToggle\">\n  <div class=\"nav-toggle-btn\" [class.open]=\"!cmnSrv.dashboardState.sidebarToggle\" (click)=\"cmnSrv.sidebarToggle()\">\n    <span *ngFor=\"let number of [0,1,2]\"></span>\n  </div>\n  <div class=\"navbar-brand\">\n    <a>\n        <!-- <img class=\"brandImg\" src=\"http://via.placeholder.com/60x60\" alt=\"brandImg\"> -->\n      ANGULAR ADMIN\n    </a>\n  </div>\n  \n  <ul class=\"left-ul\">\n    <li>\n      <button id=\"minimizeSidebar\" class=\"btn btn-just-icon btn-round btn-light\" (click)=\"cmnSrv.sidebarMiniToggle()\">\n        <i *ngIf=\"!cmnSrv.dashboardState.sidebarMiniToggle\" class=\"material-icons sd-visible\">more_vert</i>\n        <i *ngIf=\"cmnSrv.dashboardState.sidebarMiniToggle\" class=\"material-icons sdm-visible\">view_list</i>\n      </button>\n    </li>\n    <li class=\"nav-item\">Dashboard</li>\n  </ul>\n  <ul class=\"right-ul\">\n    <li>\n      <form class=\"form-inline\">\n        <input class=\"form-control mr-sm-2 no-border\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn  btn-just-icon btn-round btn-light\" type=\"submit\"><i class=\"material-icons\">search</i></button>\n      </form>\n    </li>\n    <li class=\"nav-item\"><i class=\"material-icons\">notifications</i></li>\n    <li class=\"nav-item\"><i class=\"material-icons\">person</i></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.navigation-bar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  padding: 0 1rem;\n  z-index: 1009;\n  height: 50px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  background-color: #fff; }\n.navigation-bar.hidden {\n    top: -60px; }\n.navigation-bar ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    align-items: center; }\n.navigation-bar ul li {\n      display: flex;\n      padding: 0.5em; }\n.navigation-bar .navbar-brand {\n    display: none;\n    text-align: center; }\n/* navbar burger button */\n.nav-toggle-btn {\n  display: none;\n  width: 2.2rem;\n  padding: 1rem 0;\n  position: absolute; }\n.nav-toggle-btn span {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background: #000;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transition: .25s ease-in-out; }\n.nav-toggle-btn span:nth-child(1) {\n      top: 5px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n.nav-toggle-btn span:nth-child(2) {\n      top: 15px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n.nav-toggle-btn span:nth-child(3) {\n      top: 25px;\n      -webkit-transform-origin: left center;\n              transform-origin: left center; }\n/* navbar burger button animation*/\n.nav-toggle-btn.open span:nth-child(1) {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  top: 2px;\n  left: 4px; }\n.nav-toggle-btn.open span:nth-child(2) {\n  width: 0%;\n  opacity: 0; }\n.nav-toggle-btn.open span:nth-child(3) {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  top: 27px;\n  left: 4px; }\n@media (max-width: 1199.98px) {\n  .navigation-bar {\n    left: 220px; } }\n@media (max-width: 991.98px) {\n  #minimizeSidebar {\n    display: none; }\n  .nav-toggle-btn {\n    display: inline-block; }\n  .navigation-bar {\n    left: 62px; }\n    .navigation-bar:not(.sidebar-hidden) {\n      left: 0; }\n    .navigation-bar ul.left-ul {\n      display: none; }\n    .navigation-bar .navbar-brand {\n      display: block;\n      width: 40%; } }\n@media (max-width: 767.98px) {\n  .navigation-bar {\n    left: 0; }\n    .navigation-bar ul {\n      display: none; }\n    .navigation-bar .navbar-brand {\n      width: 100%; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/common.service */ "./src/app/shared/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(cmnSrv) {
        this.cmnSrv = cmnSrv;
    }
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/config/colorCodes.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/config/colorCodes.ts ***!
  \*********************************************/
/*! exports provided: colorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorCodes", function() { return colorCodes; });
var colorCodes = {
    primary: {
        hex: '#3ebb8c',
        rgba: '62,187,140'
    },
    secondary: {
        hex: '#9092a5',
        rgba: '144,146,165'
    },
    success: {
        hex: '#38bf55',
        rgba: '56,191,85'
    },
    info: {
        hex: '#39a8d0',
        rgba: '57,168,208'
    },
    warning: {
        hex: '#fed33d',
        rgba: '254,211,61'
    },
    danger: {
        hex: '#f36b56',
        rgba: '243,107,86'
    },
    dark: {
        hex: '#3a3a59',
        rgba: '243,107,86'
    },
    sidebarBg: {
        hex: '#3a3a59',
        rgba: '58,58,89'
    }
};


/***/ }),

/***/ "./src/app/shared/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.dashboardState = {
            navbarToggle: false,
            sidebarToggle: true,
            sidebarMiniToggle: false
        };
    }
    CommonService.prototype.sidebarToggle = function () {
        this.dashboardState.sidebarToggle = !this.dashboardState.sidebarToggle;
    };
    CommonService.prototype.sidebarMiniToggle = function () {
        this.dashboardState.sidebarMiniToggle = !this.dashboardState.sidebarMiniToggle;
    };
    CommonService.prototype.navbarToggle = function () {
        this.dashboardState.navbarToggle = !this.dashboardState.navbarToggle;
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\"  [class.hide]=\"cmnSrv.dashboardState.sidebarToggle\">\n  <div class=\"sidebar-header align-middle\">\n    <!-- <img class=\"brandImg\" src=\"http://via.placeholder.com/60x60\" alt=\"brandImg\"> -->\n    <span class=\"text-uppercase p-3\">ad</span>\n    <strong class=\"heading text-uppercase d-inline-block mini-hide\">ANGULAR ADMIN</strong>\n  </div>\n  <hr class=\"underline\"> \n  <div class=\"sidebar-body\">\n    <ul>\n      <li *ngFor=\"let item of sidebarItems;let i = index;\" class=\"sidebar-item\" [class.active]=\"temp.isActive\" #temp=\"routerLinkActive\" routerLinkActive  [routerLinkActiveOptions]=\"{exact: true}\">\n        <a *ngIf=\"!item.subItem\" [routerLink]=\"item.link\" ><i class=\"material-icons\">{{item.icon}}</i><strong class=\"mini-hide text-capitalize \">{{item.label}}</strong><span class=\"arrow mini-hide\" ></span></a>\n        <!-- if sub menu  -->\n        <a *ngIf=\"!!item.subItem\" data-toggle=\"collapse\" [href]=\"'#'+item.label.split(' ').join('')\" [class.collapsed]=\"!temp.isActive\"  ><i class=\"material-icons\">{{item.icon}}</i><strong class=\"text-capitalize mini-hide\">{{item.label}}</strong><i class=\"toggle-icon material-icons\">expand_less</i></a>\n        <div *ngIf=\"!!item.subItem\" class=\"collapse\" [class.show]=\"temp.isActive\" [id]=\"item.label.split(' ').join('')\">\n          <li *ngFor=\"let subIteml1 of item.subItem\" class=\"sidebar-sub-item\" routerLinkActive=\"active\">\n            <a *ngIf=\"!subIteml1.subItem\" [routerLink]=subIteml1.link><span class=\"txt-icon text-uppercase\">{{subIteml1.icon}}</span><strong class=\"text-capitalize mini-hide\"> {{subIteml1.label}} </strong><span class=\"arrow mini-hide\"></span></a>\n            <!-- if sub menu level 2 -->\n            <a *ngIf=\"!!subIteml1.subItem\" data-toggle=\"collapse\" [href]=\"'#'+subIteml1.label.split(' ').join('')\" [class.collapsed]=\"!temp.isActive\"  ><span class=\"txt-icon text-uppercase\">{{subIteml1.icon}}</span><strong class=\"text-capitalize mini-hide\">{{subIteml1.label}}</strong><i class=\"toggle-icon material-icons\">expand_less</i></a>\n            <div *ngIf=\"!!subIteml1.subItem\" class=\"collapse\" [class.show]=\"temp.isActive\" [id]=\"subIteml1.label.split(' ').join('')\">\n              <li *ngFor=\"let subIteml2 of subIteml1.subItem\" class=\"sidebar-sub-item-2\" routerLinkActive=\"active\"><a [routerLink]=subIteml2.link><span class=\"txt-icon text-uppercase\">{{subIteml2.icon}}</span><strong class=\"text-capitalize mini-hide\"> {{subIteml2.label}} </strong><span class=\"arrow mini-hide\"></span></a></li>\n            </div>\n          </li>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n<div *ngIf=\"!cmnSrv.dashboardState.sidebarToggle\" class=\"sidebarOutside\" (click)=\"cmnSrv.sidebarToggle()\" ></div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n/**** sidebar ****/\n.sidebar {\n  left: 0;\n  top: 0;\n  position: fixed;\n  overflow: hidden;\n  height: 100vh;\n  color: #fff;\n  z-index: 999;\n  box-shadow: 0 1rem 2.1rem -0.9rem rgba(0, 0, 0, 0.6), 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.12), 0 0.5rem 0.6rem 0.25rem rgba(0, 0, 0, 0.2);\n  background-color: #3a3a59;\n  /** header **/\n  /** body **/\n  /** items **/\n  /** sub items **/\n  /** hover and active **/\n  /** arrow **/ }\n.sidebar-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    height: 50px;\n    white-space: nowrap;\n    overflow: hidden; }\n.sidebar-body {\n    height: calc(100% - 50px);\n    overflow: hidden;\n    overflow-y: auto; }\n.sidebar-body::-webkit-scrollbar {\n      width: 0.3rem; }\n.sidebar-body::-webkit-scrollbar-thumb {\n      background: rgba(255, 255, 255, 0.7); }\n.sidebar-body::-webkit-scrollbar-thumb:hover {\n      background: rgba(255, 255, 255, 0.9); }\n.sidebar-body::-webkit-scrollbar-track {\n      background: transparent; }\n.sidebar-body ul {\n      padding: 0 0 2rem 0;\n      list-style: none; }\n.sidebar-body ul li {\n        position: relative; }\n.sidebar-item a {\n    color: #fff;\n    display: block;\n    margin: 0.9rem 0 0 0.6rem;\n    border-radius: 0.25rem 0 0 0.25rem;\n    padding: 0.5rem 0.8rem;\n    white-space: nowrap;\n    overflow: hidden; }\n.sidebar-item a .mini-hide {\n      padding-left: 1.2rem; }\n.sidebar-item span.arrow {\n    border: 1.3rem solid transparent; }\n.sidebar-sub-item {\n    /** sub sub item **/ }\n.sidebar-sub-item a {\n      margin-left: 1rem;\n      padding: .3rem .7rem; }\n.sidebar-sub-item a[data-toggle=\"collapse\"] {\n        padding: .4rem .7rem; }\n.sidebar-sub-item span.txt-icon {\n      display: inline-block;\n      width: 1.3rem; }\n.sidebar-sub-item span.arrow {\n      display: none;\n      border: 1rem solid transparent;\n      border-right: 1.5rem solid; }\n.sidebar-sub-item-2 a {\n      margin-left: 1.3rem; }\n.sidebar-item, .sidebar-sub-item, .sidebar-sub-item-2 {\n    /* collapse icon anim */ }\n.sidebar-item:hover:not(.active) > a, .sidebar-sub-item:hover:not(.active) > a, .sidebar-sub-item-2:hover:not(.active) > a {\n      background-color: rgba(255, 255, 255, 0.2); }\n.sidebar-item:hover:not(.active) > a span.arrow, .sidebar-sub-item:hover:not(.active) > a span.arrow, .sidebar-sub-item-2:hover:not(.active) > a span.arrow {\n        display: inline-block;\n        border-right-color: rgba(255, 255, 255, 0.3); }\n.sidebar-item.active > a, .sidebar-sub-item.active > a, .sidebar-sub-item-2.active > a {\n      background-color: rgba(255, 255, 255, 0.4); }\n.sidebar-item.active > a span.arrow, .sidebar-sub-item.active > a span.arrow, .sidebar-sub-item-2.active > a span.arrow {\n        display: inline-block;\n        border-right-color: rgba(255, 255, 255, 0.6); }\n.sidebar-item.active > a:not([data-toggle=collapse]), .sidebar-sub-item.active > a:not([data-toggle=collapse]), .sidebar-sub-item-2.active > a:not([data-toggle=collapse]) {\n        background-color: #3ebb8c;\n        box-shadow: 0 0.15rem 1rem 0 rgba(255, 255, 255, 0.14), 0 0.3rem 0.5rem -2rem rgba(255, 255, 255, 0.4); }\n.sidebar-item > a[data-toggle=collapse] i.toggle-icon, .sidebar-sub-item > a[data-toggle=collapse] i.toggle-icon, .sidebar-sub-item-2 > a[data-toggle=collapse] i.toggle-icon {\n      position: absolute;\n      right: .5rem;\n      top: .5rem;\n      transition: all 0.2s ease-in-out; }\n.sidebar-item > a[data-toggle=collapse].collapsed i.toggle-icon, .sidebar-sub-item > a[data-toggle=collapse].collapsed i.toggle-icon, .sidebar-sub-item-2 > a[data-toggle=collapse].collapsed i.toggle-icon {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n      transition: all 0.2s ease-in-out; }\n.sidebar span.arrow {\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-right: 2rem solid; }\n.sidebar .mini-hide {\n    display: inline-block; }\n/*sidebar outside div (onclick close)*/\n.sidebarOutside {\n  display: none;\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 50%;\n  z-index: 998;\n  background-color: rgba(0, 0, 0, 0.3); }\n/**** media break points ****/\n@media (max-width: 1199.98px) {\n  .sidebar {\n    width: 220px; } }\n@media (max-width: 991.98px) {\n  .sidebar {\n    width: 300px; }\n    .sidebar.hide {\n      width: 62px; }\n  .sidebarOutside {\n    display: block; } }\n@media (max-width: 767.98px) {\n  .sidebar {\n    width: 240px; }\n    .sidebar.hide {\n      width: 0;\n      left: -5%; }\n  .sidebar-header {\n    height: 49px; } }\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/common.service */ "./src/app/shared/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(cmnSrv) {
        this.cmnSrv = cmnSrv;
        this.sidebarItems = [
            { link: '/', label: 'Dashboard', icon: 'dashboard' },
            { label: 'Components', icon: 'apps', subItem: [
                    { link: '/components/buttons', label: 'buttons', icon: 'b' },
                    { link: '/components/grids', label: 'grid System', icon: 'gs' },
                    { link: '/components/panels', label: 'panels', icon: 'p' },
                    // {link:'/components/alerts',label:'alerts',icon:'a'},
                    // {link:'/components/notifications',label:'notifications',icon:'n'},
                    { link: '/components/icons', label: 'icons', icon: 'i' },
                    { link: '/components/typography', label: 'typography', icon: 't' },
                ] },
            { label: 'Forms', icon: 'ballot', subItem: [
                    { link: '/forms/basic', label: 'basic form', icon: 'bf' },
                    { link: '/forms/advance', label: 'advanced form', icon: 'af' },
                    { link: '/forms/custom', label: 'custom form', icon: 'cf' },
                ] },
            { label: 'Pages', icon: 'pages', subItem: [
                    { link: '/pages/notfound', label: 'Not Found', icon: 'nf' },
                    { link: '/pages/auth', label: 'Auth', icon: 'A' }
                ] },
            { label: 'Tables', icon: 'grid_on', subItem: [
                    { link: '/tables/basic', label: 'Basic Table', icon: 'BT' },
                    { link: '/tables/smart', label: 'smart table', icon: 'ST' }
                ] },
            { link: '/charts', label: 'Charts', icon: 'show_chart' },
            { link: '/maps', label: 'Maps', icon: 'place' },
            { link: '/editors', label: 'Editors', icon: 'edit' },
            { link: '/calendar', label: 'Calendar', icon: 'date_range' },
            { label: 'Menu', icon: 'menu', subItem: [
                    { link: 'void()', label: 'Sub Menu L1', icon: 'l1' },
                    { label: 'Sub Menu L1', icon: 'l1', subItem: [
                            { link: 'void()', label: 'Sub Menu L2', icon: 'l2' },
                            { link: 'void()', label: 'Sub Menu L2', icon: 'l2' },
                        ] },
                ] }
        ];
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map