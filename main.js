(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n\n\n\n\n            \n  <div class=\"parallax1\"></div>\n  <!-- <a href=\"#\"><div class=\"top-center\" style=\"font-size:30px;\"> Brand Name </div></a>  -->\n  <div class=\"centered\" style=\"font-size:50px;\"> Meet our team </div>\n  <div class=\"top-left\"> \n          <a href=\"#\"><img class=\"img-responsive\" src=\"../../assets/logo.png\" alt=\"logo1\" width=\"70\" height=\"70\" ></a>       \n      </div>  \n      <div id=\"mySidenav\" class=\"sidenav\">\n              <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n              <a href=\"#\">About Us</a>\n              <a href=\"#\">What we do</a>\n              <a href=\"https://testweb-e282a.firebaseio.com/contact.html\">Contact Us</a>\n      </div>\n  \n      <!-- <span style=\"font-size:30px;cursor:pointer;padding-left: 20px;\" onclick=\"openNav()\">&#9776;</span> -->\n      <span class=\"top-right\" style=\"font-size:30px;cursor:pointer;padding-right: 20px;\" onclick=\"openNav()\">&#9776;</span>\n\n\n  <div style=\"height:500px;\">\n          <div class=\"row\">\n                  <div class=\"column\">\n                    <div class=\"card\">\n                      <img src=\"../../assets/team1.jpg\" alt=\"elon\" style=\"width:100%\">\n                      <div class=\"container2\">\n                        <h2>Elon Musk</h2>\n                        <p class=\"title\">CEO & Founder</p>\n                        <p>text.</p>\n                        <p>elon@tesla.com</p>\n                        <p><button class=\"button2\" style=\"vertical-align:middle\"><span>Profile</span></button></p>\n                      </div>\n                    </div>\n                  </div>\n          \n  \n          <div class=\"column\">\n                          <div class=\"card\">\n                            <img src=\"../../assets/team2.jpg\" alt=\"Larry\" style=\"width:100%\">\n                            <div class=\"container2\">\n                              <h2>Larry Ellison</h2>\n                              <p class=\"title\"> Director</p>\n                              <p>text.</p>\n                              <p>larry@oracle.com</p>\n                              <p><button class=\"button2\" style=\"vertical-align:middle\"><span>Profile</span></button></p>\n                            </div>\n                          </div>\n          </div>\n          <div class=\"column\">\n                          <div class=\"card\">\n                            <img src=\"../../assets/team3.jpg\" alt=\"chamat\" style=\"width:100%\">\n                            <div class=\"container2\">\n                              <h2>Chamat Paliapatha</h2>\n                              <p class=\"title\">Growth Hacker</p>\n                              <p>text.</p>\n                              <p>chamat@facebook.com</p>\n                              <p><button class=\"button2\" style=\"vertical-align:middle\"><span>Profile</span></button></p>\n                            </div>\n                          </div>\n          </div>\n                      \n          </div>\n      \n\n  </div>\n  <div class=\"parallax2\"></div>\n  <div style=\"height:100px;background-color:black;font-size:15px;color:white; text-align: center\">\n          <p style=\"font-size: 25px\">We love to serve our customer with our technology innovation.</p>\n          </div>\n      \n\n<!-- <script>\n\n// sideNav\nfunction openNav(){\n  document.getElementById(\"mySidenav\").style.width=\"250px\";\n  }\nfunction closeNav(){\n  document.getElementById(\"mySidenav\").style.width =\"0\";\n  }\n\n// mousemove\nvar windowWidth = $(window).width();\n$('.page-front').mousemove(function(event) {\n  \n  var moveX = (($(window).width() / 2) - event.pageX) * 0.1;\n  var moveY = (($(window).height() / 2) - event.pageY) * 0.1;\n  $('.page-back').css('margin-left', moveX + 'px');\n  $('.page-back').css('margin-top', moveY + 'px');\n});\n\n\n</script>  -->\n\n\n\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2> -->\n<!-- <app-home></app-home> -->\n<!-- <app-root></app-root> -->\n<!-- <ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<!-- <h1>\n  Welcome to {{ title }}!\n</h1> -->\n\n<!-- <app-calc1></app-calc1> -->\n<!-- <app-calc2></app-calc2>\n -->\n\n <app-test2></app-test2>\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tesla';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _calc1_calc1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calc1/calc1.component */ "./src/app/calc1/calc1.component.ts");
/* harmony import */ var _calc2_calc2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calc2/calc2.component */ "./src/app/calc2/calc2.component.ts");
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/test2/test2.component.ts");
/* harmony import */ var _test3_test3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test3/test3.component */ "./src/app/test3/test3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                _calc1_calc1_component__WEBPACK_IMPORTED_MODULE_8__["Calc1Component"],
                _calc2_calc2_component__WEBPACK_IMPORTED_MODULE_9__["Calc2Component"],
                _test2_test2_component__WEBPACK_IMPORTED_MODULE_10__["Test2Component"],
                _test3_test3_component__WEBPACK_IMPORTED_MODULE_11__["Test3Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calc1/calc1.component.css":
/*!*******************************************!*\
  !*** ./src/app/calc1/calc1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGMxL2NhbGMxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calc1/calc1.component.html":
/*!********************************************!*\
  !*** ./src/app/calc1/calc1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Operatios on Two Numbers\n</p>\n<div>\n  <input type=\"number\" #num1>\n  <input type=\"number\" #num2>\n</div>\n\n\n<br>\n<div>\n  <button class=\"btn-primary\" (click)=\"addd(num1.value,num2.value)\">Add</button>\n  <button class=\"btn-dark\" (click)=\"sub(num1.value,num2.value)\">Substract</button>\n  <button class=\"btn-primary\" (click)=\"multi(num1.value,num2.value)\">Multiply</button>\n  <button class=\"btn-dark\" (click)=\"divi(num1.value,num2.value)\">Divide</button>\n</div>\n\n<div>\n<p>The Result is:</p>\n{{ res }}\n</div>"

/***/ }),

/***/ "./src/app/calc1/calc1.component.ts":
/*!******************************************!*\
  !*** ./src/app/calc1/calc1.component.ts ***!
  \******************************************/
/*! exports provided: Calc1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc1Component", function() { return Calc1Component; });
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

var Calc1Component = /** @class */ (function () {
    function Calc1Component() {
    }
    Calc1Component.prototype.ngOnInit = function () {
    };
    Calc1Component.prototype.addd = function (x, y) {
        this.res = x + y;
    };
    Calc1Component.prototype.sub = function (x, y) {
        this.res = x - y;
    };
    Calc1Component.prototype.multi = function (x, y) {
        this.res = x * y;
    };
    Calc1Component.prototype.divi = function (x, y) {
        this.res = x / y;
    };
    Calc1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calc1',
            template: __webpack_require__(/*! ./calc1.component.html */ "./src/app/calc1/calc1.component.html"),
            styles: [__webpack_require__(/*! ./calc1.component.css */ "./src/app/calc1/calc1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Calc1Component);
    return Calc1Component;
}());



/***/ }),

/***/ "./src/app/calc2/calc2.component.css":
/*!*******************************************!*\
  !*** ./src/app/calc2/calc2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGMyL2NhbGMyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/calc2/calc2.component.html":
/*!********************************************!*\
  !*** ./src/app/calc2/calc2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Calculator\n</p>\n\n<div >\n  {{ result }}\n</div>\n<br>\n\n<div>\n  <button  (click)=\"one()\">1</button>\n  <button  (click)=\"two()\">2</button>\n  <button  (click)=\"three()\">3</button>\n  <button  (click)=\"clear()\">C</button>\n</div>\n<br>\n<div>\n  <button  (click)=\"four()\">4</button>\n  <button  (click)=\"five()\">5</button>\n  <button  (click)=\"six()\">6</button>\n  <button  (click)=\"m()\">*</button>\n</div>\n<br>\n<div>\n  <button  (click)=\"seven()\">7</button>\n  <button  (click)=\"eight()\">8</button>\n  <button  (click)=\"nine()\">9</button>\n  <button  (click)=\"d()\">/</button>\n</div>\n<br>\n<div>\n  <button  (click)=\"zero()\">0</button>\n  <button  (click)=\"a()\">+</button>\n  <button  (click)=\"s()\">-</button>\n  <button  (click)=\"equal()\">=</button>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/calc2/calc2.component.ts":
/*!******************************************!*\
  !*** ./src/app/calc2/calc2.component.ts ***!
  \******************************************/
/*! exports provided: Calc2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc2Component", function() { return Calc2Component; });
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

var Calc2Component = /** @class */ (function () {
    function Calc2Component() {
        this.result = "";
    }
    Calc2Component.prototype.ngOnInit = function () {
    };
    Calc2Component.prototype.one = function () {
        this.result += 1;
    };
    Calc2Component.prototype.two = function () {
        this.result += 2;
    };
    Calc2Component.prototype.three = function () {
        this.result += 3;
    };
    Calc2Component.prototype.four = function () {
        this.result += 4;
    };
    Calc2Component.prototype.five = function () {
        this.result += 5;
    };
    Calc2Component.prototype.six = function () {
        this.result += 6;
    };
    Calc2Component.prototype.seven = function () {
        this.result += 7;
    };
    Calc2Component.prototype.eight = function () {
        this.result += 8;
    };
    Calc2Component.prototype.nine = function () {
        this.result += 9;
    };
    Calc2Component.prototype.zero = function () {
        this.result += 0;
    };
    Calc2Component.prototype.a = function () {
        this.result += "+";
    };
    Calc2Component.prototype.s = function () {
        this.result += "-";
    };
    Calc2Component.prototype.m = function () {
        this.result += "*";
    };
    Calc2Component.prototype.d = function () {
        this.result += "/";
    };
    Calc2Component.prototype.equal = function () {
        this.result = eval(this.result);
    };
    Calc2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calc2',
            template: __webpack_require__(/*! ./calc2.component.html */ "./src/app/calc2/calc2.component.html"),
            styles: [__webpack_require__(/*! ./calc2.component.css */ "./src/app/calc2/calc2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Calc2Component);
    return Calc2Component;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n\n<!-- code starts here -->\n\n\n  <div>\n          <div class=\"top-left\"> \n                  <a href=\"#\"><img class=\"img-responsive\" src=\"src/assets/logo.png\" alt=\"logo1\" width=\"70\" height=\"70\" ></a>       \n              </div>  \n      <img class=\"img-responsive\" src=\"../../assets/cnt4.jpg\" alt=\"cnt4\" width=\"100%\" height=\"60%\" >       \n      <div><a href=\"https://wa.me/9999999999\"><img class=\"centered img-responsive\" src=\"../../assets/whatsapp.png\" alt=\"ws\" width=\"75px\" height=\"75px\" ></a></div> \n      <div><p class=\"centeredwp\" style=\"font-size: 25px\">Kindly Whatsapp Your Queries for Instant Response</p></div>\n      <div id=\"mySidenav\" class=\"sidenav\">\n              <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n              <a href=\"http://localhost:4200//about.html#\">About Us</a>\n              <a href=\"#\">What we do</a>\n              <a href=\"http://localhost:4200//contact.html\">Contact Us</a>\n      </div>\n      <span class=\"top-right\" style=\"font-size:30px;cursor:pointer;padding-right: 20px;\" onclick=\"openNav()\">&#9776;</span>\n  </div>\n  \n  \n  <div class=\"container3\">\n          <div style=\"text-align:center\">\n                  <h3>Contact Us</h3>\n                  <p style=\"font-size: 18px; color: green\">Kindly leave us a message:</p>\n                </div>\n  \n      <div class=\"row-c\">\n              <div class=\"column-c\">\n                      <div id=\"map\" style=\"width:100%;height:500px; border: 1px;\"></div>\n              </div>\n              <div class=\"column\">\n                  <form action=\"/action_page.php\">\n                  <label for=\"Fname\">First Name</label>\n                  <input type=\"text\" id=\"Fname\" name=\"firstname\" placeholder=\"Your name..\" required>\n                  \n                  <label for=\"Lname\">Mobile Number</label>\n                  <input type=\"tel\" id=\"phone\" name=\"phone\"  placeholder=\"Your contact #..\" required>\n                  \n                  <label for=\"city\">City</label>\n                  <select id=\"city\" name=\"city\">\n                      <option value=\"Mumbai\">Mumbai</option>\n                      <option value=\"Delhi\">Delhi</option>\n                      <option value=\"Nagpur\">Nagpur</option>\n                  </select>\n                  <label for=\"subject\">Subject</label>\n                  <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:170px\"></textarea>\n                  <input type=\"submit\" value=\"Submit\">\n                  </form>\n              </div>\n  \n  \n      </div>\n  \n  \n  </div>\n  <div class=\"footer\">\n          <p>Footer text here</p>\n  </div> \n  \n  <!-- <script>\n      \n      // sideNav\n      function openNav(){\n          document.getElementById(\"mySidenav\").style.width=\"250px\";\n          }\n      function closeNav(){\n          document.getElementById(\"mySidenav\").style.width =\"0\";\n          }\n      \n      // mousemove\n      var windowWidth = $(window).width();\n      $('.page-front').mousemove(function(event) {\n          \n          var moveX = (($(window).width() / 2) - event.pageX) * 0.1;\n          var moveY = (($(window).height() / 2) - event.pageY) * 0.1;\n          $('.page-back').css('margin-left', moveX + 'px');\n          $('.page-back').css('margin-top', moveY + 'px');\n      });\n  \n      \n  </script>  -->\n  \n  \n  "

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.css":
/*!*****************************************!*\
  !*** ./src/app/hero/hero.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
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

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero',
            template: "\n    <p>\n      hero works!\n    </p>\n  ",
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass{\r\n    color: aqua;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNsYXNze1xyXG4gICAgY29sb3I6IGFxdWE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n<button class=\"btn-danger\">Click Here</button>\n<h1>This is home componenet heading</h1>\n\n{{name}}\n<br>\n{{ x>y ? x : y }}\n\n<input  type=\"text\" #num />\n<button (click)=\"myfun(num.value)\">Show</button>\n\n \n    \n    <div class=\"hero-image\">\n           <a href=\"#\"><div class=\"top-center\" style=\"font-size:30px;\"> Brand Name </div></a> \n           <div class=\"top-left\"> \n                <a href=\"#\"><img class=\"img-responsive\" src=\"../../assets/logo.png\" alt=\"logo1\" width=\"70\" height=\"70\" ></a>       \n            </div> \n            <div id=\"mySidenav\" class=\"sidenav\">\n                    <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n                    <a href=\"http://localhost:4200/about.html\">About Us</a>\n                    <a href=\"#\">What we do</a>\n                    <a href=\"http://localhost:4200/contact.html\">Contact Us</a>\n            </div>\n        \n            <!-- <span style=\"font-size:30px;cursor:pointer;padding-left: 20px;\" onclick=\"openNav()\">&#9776;</span> -->\n            <span class=\"top-right\" style=\"font-size:30px;cursor:pointer;padding-right: 20px;\" onclick=\"openNav()\">&#9776;</span>\n             \n            \n\n            <div class=\"hero-text\">\n                <h1 style=\"font-size:60px\"> Text </h1>\n                <p style=\"font-size: 20px; color:black;\"> Value Prop</p>\n                <button>How it Works?</button>\n            </div>\n        </div>\n      \n\n        <div class=\"page-front\">\n                <div class=\"page-back\">\n                    \n                </div>\n        </div>\n        \n        <div class=\"bg-image img2\"></div> \n        \n        <!-- FOrm on image -->\n        <div class=\"bg-image img3\">\n            <form action=\"/action_page.php\" class=\"container\">\n                <h4>Register Here</h4>\n\n                <!-- <label for=\"fname\"><b>Name</b></label> -->\n                <input type=\"text\" placeholder=\"Enter name\" name=\"fname\" required>\n\n                <!-- <label for=\"phone\"><b>Mobile</b></label> -->\n                <input type=\"tel\" placeholder=\"Enter Mobile #\" name=\"phone\" required>\n\n                <button type=\"submit\" class=\"btn\">Enter</button>\n            </form>\n        </div> \n\n\n        \n\n    \n    \n    <div class=\"footer\">\n                <p>Footer text here</p>\n    </div>    \n\n\n<!-- <script>\n    \n    // sideNav\n    function openNav(){\n        document.getElementById(\"mySidenav\").style.width=\"250px\";\n        }\n    function closeNav(){\n        document.getElementById(\"mySidenav\").style.width =\"0\";\n        }\n    \n    // mousemove\n    var windowWidth = $(window).width();\n    $('.page-front').mousemove(function(event) {\n        \n        var moveX = (($(window).width() / 2) - event.pageX) * 0.1;\n        var moveY = (($(window).height() / 2) - event.pageY) * 0.1;\n        $('.page-back').css('margin-left', moveX + 'px');\n        $('.page-back').css('margin-top', moveY + 'px');\n    });\n\n \n    \n</script> -->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.name = "Hello from ts";
        this.x = 2;
        this.y = 5;
        this.z = this.x + this.y;
        this.myclass = {
            color: "aqua"
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.myfun = function (x) {
        alert(x);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/test2/test2.component.css":
/*!*******************************************!*\
  !*** ./src/app/test2/test2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QyL3Rlc3QyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test2/test2.component.html":
/*!********************************************!*\
  !*** ./src/app/test2/test2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let x of myArray\"  >\n<p >{{ x }} </p>\n</div> -->\n\n<!-- <div *ngFor=\"let x of Person\">\n  {{ x.name }}\n</div> -->\n<!-- {{Person.name}} -->\n\n<!-- <h3>Table</h3>\n<div *ngFor=\"let x of Person\">\n  {{ x.name}}   {{ x.age }}   {{ x.salary }}  {{ x.city }}\n</div> -->\n<h2>Table</h2>\n<br>\n\n<!-- <div *ngFor=\"let x of Person\">\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n    <th>Salary</th>\n    <th>City</th>\n  </tr>\n  <tr>\n    <td>{{ x.name }}</td>\n    <td>{{ x.age }}</td>\n    <td>{{ x.salary }}</td>\n    <td>{{ x.city }}</td>\n  </tr>\n  \n</table>\n</div> -->\n<br>\n<hr>\n\n<div >\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n      <th>Salary</th>\n      <th>City</th>\n    </tr>\n    <tr *ngFor=\"let x of Person\">\n      <td>{{ x.name }}</td>\n      <td>{{ x.age }}</td>\n      <td>{{ x.salary }}</td>\n      <td>{{ x.city }}</td>\n    </tr>\n    \n  </table>\n  </div>\n<br>\n\n\n  <!-- <div [ngSwitch]=\"x\">\n    <p *ngSwitchCase=\"1\">One</p>\n    <p *ngSwitchCase=\"2\">Two</p>\n    <p *ngSwitchCase=\"3\">Three</p>\n    <p *ngSwitchCase=\"4\">Four</p>\n\n  </div>\n\n  -->\n\n  <!-- <form>\n    <input type=\"text\"  [(ngModel)]=\"na\" >\n</form> -->\n\n<!-- <input type=\"text\" [(ngModel)]=\"na\" />\n<div>{{name1}}</div> -->\n\n<input type='text' [(ngModel)]='na' />\n  <div>Number {{na}}</div>\n\n  <div [ngSwitch]= \"na\">\n      <p *ngSwitchCase=\"1\">One</p>\n      <p *ngSwitchCase=\"2\">Two</p>\n      <p *ngSwitchCase=\"3\">Three</p>\n      <p *ngSwitchCase=\"4\">Four</p>\n  \n    </div>\n\n<!-- parent-child data emit -->\n\n    <!-- <app-test3 [na1]=\"na\"  (chemit)=\"f1($event)\">\n      <h1>Hello this is child  selector</h1>\n\n    </app-test3>\n    {{ parget }} -->\n<!-- emiting conetent from parent to chile -->\n    <hr>\n    <app-test3>\n      <ng-container class=\"headingpart\">\n        This is the heading part from parent {{rs}} component.\n      </ng-container>\n      <ng-container class=\"bodypart\">\n        This is body part from parent component.\n      </ng-container>\n    </app-test3>\n\n    <!-- <app-test3 >\n      <ng-container class=\"headingpart\">\nThis is heading part \n      </ng-container>\n<ng-container class=\"bodypart\">\nThis is body part\n</ng-container>\n    </app-test3> -->"

/***/ }),

/***/ "./src/app/test2/test2.component.ts":
/*!******************************************!*\
  !*** ./src/app/test2/test2.component.ts ***!
  \******************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
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

var Test2Component = /** @class */ (function () {
    function Test2Component() {
        this.myArray = [1, 2, 3, 4, 5];
        // Person = { 
        //   name:"Rohit",
        //   age: 26,
        //   salary: 50000,
        //   city: "Mumbai"
        // }
        this.Person = [
            { "name": "Rohit",
                "age": 26,
                "salary": 50000,
                "city": "Mumbai" },
            { "name": "Rahul",
                "age": 26,
                "salary": 50000,
                "city": "Mumbai" },
        ];
        this.x = 2;
        this.parget = "";
    }
    Test2Component.prototype.ngOnInit = function () {
    };
    Test2Component.prototype.f1 = function (x) {
        this.parget = x;
    };
    Test2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__(/*! ./test2.component.html */ "./src/app/test2/test2.component.html"),
            styles: [__webpack_require__(/*! ./test2.component.css */ "./src/app/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/test3/test3.component.css":
/*!*******************************************!*\
  !*** ./src/app/test3/test3.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QzL3Rlc3QzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test3/test3.component.html":
/*!********************************************!*\
  !*** ./src/app/test3/test3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <!-- test3 works! -->\n</p>\n<!-- <p>In test3</p>  -->\n<br>\n<!-- <p>{{ na }}</p> -->\n<!-- <div >NumberinTest3 {{ na1 }}</div> -->\n<br>\n<hr>\n<!-- <ng-content></ng-content> -->\n\n<hr>\n\n<!-- passing content from parent to chikld -->\n<div class=\"card\">\n    <div class=\"card-header\">\n        <ng-content select=\".headingpart\"></ng-content>\n    </div>\n    <div class=\"card-body\">\n      <ng-content select=\".bodypart\"></ng-content>\n\n    </div>\n\n</div> \n\n<div >\n\n</div>"

/***/ }),

/***/ "./src/app/test3/test3.component.ts":
/*!******************************************!*\
  !*** ./src/app/test3/test3.component.ts ***!
  \******************************************/
/*! exports provided: Test3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test3Component", function() { return Test3Component; });
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

var Test3Component = /** @class */ (function () {
    // @Output() public pq =new EventEmitter();
    function Test3Component() {
        this.chemit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // rs=12;
    Test3Component.prototype.ngOnInit = function () {
        this.chemit.emit("hello theres");
        // this.pq.emit(this.rs);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Test3Component.prototype, "na1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Test3Component.prototype, "chemit", void 0);
    Test3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test3',
            template: __webpack_require__(/*! ./test3.component.html */ "./src/app/test3/test3.component.html"),
            styles: [__webpack_require__(/*! ./test3.component.css */ "./src/app/test3/test3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test3Component);
    return Test3Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\tesla\tesla\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map