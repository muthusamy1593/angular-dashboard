(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/auth/auth.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n  <div class=\"header\">\n    <button class=\" btn  btn-just-icon btn-round\" type=\"submit\" [routerLink]=\"'/'\">\n      <i class=\"material-icons\">home</i>\n    </button>\n  </div>\n  <div class=\"w-80 \">\n    <div class=\"auth-text\" [ngClass]=\"toggleFormClass\">\n      <!-- sign up text div -->\n      <div class=\"auth-login-text\">\n        <h2>Don't have an account?</h2>\n        <p>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>\n        <button class=\"btn btn-outline-light  px-5\" (click)=\"showSignUp()\">Sign up</button>\n      </div>\n      <!-- log in text div -->\n      <div class=\"auth-signup-text\">\n        <h2>Have an account?</h2>\n        <p>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>\n        <button class=\"btn btn-outline-light  px-5\" (click)=\"showLogin()\">Login</button>\n      </div>\n    </div>\n    <!-- forms -->\n    <div class=\"card shadow auth-forms\" [ngClass]=\"toggleFormClass\">\n      <!-- login form -->\n      <div class=\"auth-login\">\n        <div class=\"wrapper\">\n          <h2 class=\"mb-4 text-primary\">Login</h2>\n          <form>\n            <div class=\"form-group\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required />\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn px-4 btn-primary\">Log In</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!-- sign up form -->\n      <div class=\"auth-signup\">\n        <div class=\"wrapper\">\n          <h2 class=\"mb-4 text-primary\">Sign Up</h2>\n          <form class=\"forms_form\">\n            <div class=\"form-group\">\n              <input type=\"text\" placeholder=\"Full Name\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n              <input type=\"email\" placeholder=\"Email\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" placeholder=\"Password\" class=\"form-control\" required />\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary px-4\">Sign Up</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/auth.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.header {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10; }\n.header .btn {\n    margin: 2rem;\n    color: #fff;\n    background-color: #3ebb8c; }\n@-webkit-keyframes bounceLeft {\n  0% {\n    -webkit-transform: translate3d(100%, -50%, 0);\n            transform: translate3d(100%, -50%, 0); }\n  50% {\n    -webkit-transform: translate3d(-30px, -50%, 0);\n            transform: translate3d(-30px, -50%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); } }\n@keyframes bounceLeft {\n  0% {\n    -webkit-transform: translate3d(100%, -50%, 0);\n            transform: translate3d(100%, -50%, 0); }\n  50% {\n    -webkit-transform: translate3d(-30px, -50%, 0);\n            transform: translate3d(-30px, -50%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); } }\n@-webkit-keyframes bounceRight {\n  0% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  50% {\n    -webkit-transform: translate3d(calc(100% + 30px), -50%, 0);\n            transform: translate3d(calc(100% + 30px), -50%, 0); }\n  100% {\n    -webkit-transform: translate3d(100%, -50%, 0);\n            transform: translate3d(100%, -50%, 0); } }\n@keyframes bounceRight {\n  0% {\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0); }\n  50% {\n    -webkit-transform: translate3d(calc(100% + 30px), -50%, 0);\n            transform: translate3d(calc(100% + 30px), -50%, 0); }\n  100% {\n    -webkit-transform: translate3d(100%, -50%, 0);\n            transform: translate3d(100%, -50%, 0); } }\n@-webkit-keyframes showSignUp {\n  100% {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes showSignUp {\n  100% {\n    opacity: 1;\n    visibility: visible;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n.auth {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh; }\n.auth .btn-outline-light {\n    color: #fff; }\n.auth .btn-outline-light:hover {\n      color: #000; }\n.auth-text {\n  background-color: rgba(0, 0, 0, 0.65);\n  border-radius: 0.25rem;\n  display: flex;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); }\n.auth-text .auth-login-text, .auth-text .auth-signup-text {\n    padding: 4.5rem;\n    width: 50%;\n    color: #fff; }\n.w-80 {\n  width: 80%; }\n.auth-forms {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 35%;\n  min-height: 420px;\n  overflow: hidden; }\n@media (min-width: 576px) {\n    .auth-forms {\n      -webkit-transform: translate3d(100%, -50%, 0);\n              transform: translate3d(100%, -50%, 0);\n      transition: -webkit-transform .4s ease-in-out;\n      transition: transform .4s ease-in-out;\n      transition: transform .4s ease-in-out, -webkit-transform .4s ease-in-out; } }\n.auth-forms .auth-login {\n    transition: opacity .4s ease-in-out, visibility .4s ease-in-out; }\n.auth-forms .auth-signup, .auth-forms .auth-login {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    visibility: hidden;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: opacity .4s ease-in-out, visibility .4s ease-in-out, -webkit-transform .5s ease-in-out;\n    transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out;\n    transition: opacity .4s ease-in-out, visibility .4s ease-in-out, transform .5s ease-in-out, -webkit-transform .5s ease-in-out; }\n.auth-forms .auth-signup div.wrapper, .auth-forms .auth-login div.wrapper {\n      width: 80%; }\n.auth-forms .auth-signup {\n    -webkit-transform: translate3d(30%, 0, 0);\n            transform: translate3d(30%, 0, 0); }\n.auth-forms .auth-signup .forms_buttons {\n      justify-content: flex-end; }\n.auth-forms .auth-login {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n    visibility: visible; }\n@media (min-width: 576px) {\n  .auth-forms.bounceLeft {\n    -webkit-animation: bounceLeft 1s forwards;\n            animation: bounceLeft 1s forwards; } }\n.auth-forms.bounceLeft .auth-signup {\n  -webkit-animation: showSignUp 1s forwards;\n          animation: showSignUp 1s forwards; }\n.auth-forms.bounceLeft .auth-login {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translate3d(-30%, 0, 0);\n          transform: translate3d(-30%, 0, 0); }\n@media (min-width: 576px) {\n  .auth-forms.bounceRight {\n    -webkit-animation: bounceRight 1s forwards;\n            animation: bounceRight 1s forwards; } }\n@media (max-width: 767.98px) {\n  .header .btn {\n    margin: 1rem; }\n  .w-80 {\n    width: 100%; }\n  .auth {\n    position: relative;\n    display: block; }\n  .auth-text {\n    position: absolute;\n    height: 60%;\n    bottom: 10%;\n    width: 100%;\n    border-radius: 0;\n    flex-direction: column-reverse;\n    text-align: center; }\n    .auth-text h2 {\n      font-size: 1.5rem; }\n    .auth-text p, .auth-text .auth-signup-text {\n      display: none; }\n    .auth-text .auth-login-text, .auth-text .auth-signup-text {\n      padding: 1rem;\n      width: 100%; }\n    .auth-text.bounceLeft .auth-signup-text {\n      display: block; }\n    .auth-text.bounceLeft .auth-login-text {\n      display: none; }\n    .auth-text.bounceRight .auth-signup-text {\n      display: none; }\n    .auth-text.bounceRight .auth-login-text {\n      display: block; }\n  .auth-forms {\n    position: absolute;\n    top: 10%;\n    min-height: 300px;\n    height: 60%;\n    bottom: 20%;\n    left: 5%;\n    width: 90%; } }\n"

/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.showSignUp = function () {
        this.toggleFormClass = 'bounceLeft';
    };
    AuthComponent.prototype.showLogin = function () {
        this.toggleFormClass = 'bounceRight';
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/pages/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"boo-wrapper\">\n    <div class=\"boo\">\n      <div class=\"face\"></div>\n    </div>\n    <div class=\"shadow\"></div>\n    <h1>Whoops!</h1>\n    <p>\n      We couldn't find the page you\n      <br /> were looking for.\n    </p>\n    <a class=\"btn btn-light\" [routerLink]=\"'/'\"> <i class=\"material-icons\">keyboard_backspace</i> Back To Home</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n@-webkit-keyframes floating {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@keyframes floating {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  45% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  55% {\n    -webkit-transform: translate3d(0, -10%, 0);\n            transform: translate3d(0, -10%, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n@-webkit-keyframes floatingShadow {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes floatingShadow {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  45% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  55% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.container {\n  color: #9b9b9b;\n  position: relative;\n  height: 100vh;\n  text-align: center;\n  font-size: 16px; }\n.container h1 {\n    font-size: 32px;\n    margin-top: 32px; }\n.boo-wrapper {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  padding-top: 64px;\n  padding-bottom: 64px; }\n.boo {\n  width: 160px;\n  height: 184px;\n  background-color: #eee;\n  margin-left: auto;\n  margin-right: auto;\n  border: 3.39393939px solid #9b9b9b;\n  border-bottom: 0;\n  overflow: hidden;\n  border-radius: 80px 80px 0 0;\n  box-shadow: -16px 0 0 2px rgba(225, 225, 225, 0.5) inset;\n  position: relative;\n  padding-bottom: 32px;\n  -webkit-animation: floating 3s ease-in-out infinite;\n          animation: floating 3s ease-in-out infinite; }\n.boo::after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: -18.82352941px;\n    bottom: -8.31168831px;\n    width: calc(100% + 32px);\n    height: 32px;\n    background-repeat: repeat-x;\n    background-size: 32px 32px;\n    background-position: left bottom;\n    background-image: linear-gradient(-45deg, #eee 16px, transparent 0), linear-gradient(45deg, #eee 16px, transparent 0), linear-gradient(-45deg, #9b9b9b 18.82352941px, transparent 0), linear-gradient(45deg, #9b9b9b 18.82352941px, transparent 0); }\n.boo .face {\n    width: 24px;\n    height: 3.2px;\n    border-radius: 5px;\n    background-color: #9b9b9b;\n    position: absolute;\n    left: 50%;\n    bottom: 56px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.boo .face::before, .boo .face::after {\n      content: '';\n      display: block;\n      width: 6px;\n      height: 6px;\n      background-color: #9b9b9b;\n      border-radius: 50%;\n      position: absolute;\n      bottom: 40px; }\n.boo .face::before {\n      left: -24px; }\n.boo .face::after {\n      right: -24px; }\n.shadow {\n  width: 128px;\n  height: 16px;\n  background-color: rgba(225, 225, 225, 0.75);\n  margin-top: 40px;\n  margin-right: auto;\n  margin-left: auto;\n  border-radius: 50%;\n  -webkit-animation: floatingShadow 3s ease-in-out infinite;\n          animation: floatingShadow 3s ease-in-out infinite; }\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'notfound', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_4__["PagesRoutingModule"]
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map