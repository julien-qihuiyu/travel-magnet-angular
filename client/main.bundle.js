webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, div, input, select, textarea,h1 ,h2, h3, h4, h5, h6\n{ font-family: Tahoma, Helvetica, Arial, \"\\5B8B\\4F53\", sans-serif;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stock_stock_component__ = __webpack_require__("../../../../../src/app/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__ = __webpack_require__("../../../../../src/app/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stock_detail_stock_detail_component__ = __webpack_require__("../../../../../src/app/stock-detail/stock-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipe_filter_pipe__ = __webpack_require__("../../../../../src/app/pipe/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_web_socket_service__ = __webpack_require__("../../../../../src/app/shared/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















const routeConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'product/:productId', component: __WEBPACK_IMPORTED_MODULE_9__stock_detail_stock_detail_component__["a" /* StockDetailComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_7__stock_stock_component__["a" /* StockComponent */],
            __WEBPACK_IMPORTED_MODULE_8__stars_stars_component__["a" /* StarsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__stock_detail_stock_detail_component__["a" /* StockDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipe_filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot(routeConfig),
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__shared_product_service__["b" /* ProductService */], __WEBPACK_IMPORTED_MODULE_16__shared_web_socket_service__["a" /* WebSocketService */], { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slide-image{\n  width: 100%\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <ol class=\"carousel-indicators\">\n      <li class=\"active\"></li>\n      <li></li>\n      <li></li>\n    </ol>\n    <div class=\"item active\">\n      <img class=\"slide-image\" src=\"https://image.ibb.co/b0Hhzw/carousel_go_1.png\"\n           alt=\"Image-1\">\n    </div>\n    <div class=\"item\">\n      <img class=\"slide-image\" src=\"https://image.ibb.co/hp3cXG/carousel_go_2.png\"\n           alt=\"Image-2\">\n    </div>\n    <div class=\"item\">\n      <img class=\"slide-image\" src=\"https://image.ibb.co/mR30mb/carousel_go_3.png\"\n           alt=\"Image-3\">\n    </div>\n  </div>\n  <a class=\"left carousel-control\" href=\"javascript:$('.carousel').carousel('prev')\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n  </a>\n  <a class=\"right carousel-control\" href=\"javascript:$('.carousel').carousel('next')\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CarouselComponent = class CarouselComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <a href=\"#\"> Terms · </a>\n        <a href=\"#\"> Privacy · </a>\n        <a href=\"#\"> Cookies · </a>\n        MyAirline © 2018\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-container {\n  margin-bottom: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-search></app-search>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row carousel-container\">\n        <app-carousel></app-carousel>\n      </div>\n      <div class=\"row\">\n        <app-stock></app-stock>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, div, input, select, textarea,h1 ,h2, h3, h4, h5, h6\n{ font-family: Tahoma, Helvetica, Arial, \"\\5B8B\\4F53\", sans-serif;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Travel Magnet</a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n              data-target=\".navbar-ex1-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">About myAirline</a></li>\n        <li><a href=\"#\">Contact us</a></li>\n      </ul>\n    </div>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "../../../../../src/app/pipe/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let FilterPipe = class FilterPipe {
    transform(list, filterField, keyword) {
        if (!filterField || !keyword) {
            return list;
        }
        return list.filter(item => {
            let fieldValue = item[filterField];
            return fieldValue.indexOf(keyword) >= 0;
        });
    }
};
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, div, input, select, textarea,h1 ,h2, h3, h4, h5, h6\n{ font-family: Tahoma, Helvetica, Arial, \"\\5B8B\\4F53\", sans-serif;}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formModel\" (ngSubmit)=\"onSearch()\" novalidate>\n  <div class=\"form-group\"\n       [class.has-error]=\"formModel.hasError('minlength','title')\">\n    <label form=\"stockTitle\">Where do you want to go?</label>\n    <input formControlName=\"title\" type=\"text\" id=\"stockTitle\" placeholder=\"Destination\" class=\"form-control\">\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('minlength','title')\">\n      Please enter at least 3 character\n    </span>\n  </div>\n  <div class=\"form-group\"\n       [class.has-error]=\"formModel.hasError('positiveNumber','price')\">\n    <label form=\"stockPrice\">What's your budget?</label>\n    <input formControlName=\"price\" type=\"number\" id=\"stockPrice\" placeholder=\"My budget in euro\" class=\"form-control\">\n    <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('positiveNumber','price')\">\n      Please enter a positive number\n  </span>\n  </div>\n  <div class=\"form-group\">\n    <label form=\"stockCategory\">What do you want do do?</label>\n    <select formControlName=\"category\" id=\"stockCategory\" class=\"form-control\">\n      <option value=\"-1\">Any activities</option>\n      <option *ngFor=\"let category of categories\" [value]=\"category\">\n        {{category}}\n      </option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">Recommend for me</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchComponent = class SearchComponent {
    constructor(productService) {
        this.productService = productService;
        let fb = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]();
        this.formModel = fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3)],
            price: [null, this.positiveNumberValidator],
            category: ['-1']
        });
    }
    ngOnInit() {
        this.categories = this.productService.getAllCategories();
    }
    positiveNumberValidator(control) {
        if (!control.value) {
            return null;
        }
        let price = parseInt(control.value);
        if (price > 0) {
            return null;
        }
        else {
            return { positiveNumber: true };
        }
    }
    onSearch() {
        if (this.formModel.valid) {
            console.log(this.formModel.value);
            this.productService.searchEvent.emit(this.formModel.value);
        }
    }
};
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* ProductService */]])
], SearchComponent);



/***/ }),

/***/ "../../../../../src/app/shared/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.searchEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    getAllCategories() {
        return ['Adventure', 'Culture experience', 'Relax'];
    }
    getProducts() {
        return this.http.get("/api/products");
    }
    getProduct(id) {
        return this.http.get("/api/product/" + id);
    }
    getCommentsForProductId(id) {
        // return this.http.get("/api/product/" + id + "comments")
        //   .map( res => res.json());
        return this.http.get("/api/product/" + id + "/comments");
    }
    search(params) {
        return this.http.get("/api/products", { params: this.encodeParams(params) });
    }
    encodeParams(params) {
        let result = Object.keys(params)
            .filter(key => params[key])
            .reduce((sum, key) => {
            sum = sum.append(key, params[key]);
            return sum;
        }, new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]());
        return result;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
], ProductService.prototype, "searchEvent", void 0);
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ProductService);

class ProductSearchParams {
    constructor(title, price, category) {
        this.title = title;
        this.price = price;
        this.category = category;
    }
}
/* unused harmony export ProductSearchParams */

class Product {
    constructor(id, title, price, rating, desc, image, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.image = image;
        this.categories = categories;
    }
}
/* unused harmony export Product */

class Comment {
    constructor(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Comment;



/***/ }),

/***/ "../../../../../src/app/shared/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let WebSocketService = class WebSocketService {
    constructor() {
    }
    createObservableSocket(url, id) {
        this.ws = new WebSocket(url);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](observer => {
            this.ws.onmessage = (event) => observer.next(event.data);
            this.ws.onerror = (event) => observer.error(event);
            this.ws.onclose = (event) => observer.complete();
            this.ws.onopen = (event) => this.sendMessage({ productId: id });
            return () => this.ws.close();
        }).map((message) => JSON.parse(message));
    }
    sendMessage(message) {
        this.ws.send(JSON.stringify(message));
    }
};
WebSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebSocketService);



/***/ }),

/***/ "../../../../../src/app/stars/stars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n  margin-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span *ngFor=\"let star of stars; let i=index\"\n        class=\"glyphicon glyphicon-star\"\n        [class.glyphicon-star-empty]=\"star\"\n        (click)=\"clickStar(i)\"></span>\n  <span>{{this.rating | number:'1.0-2'}}</span>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let StarsComponent = class StarsComponent {
    constructor() {
        this.rating = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.readonly = true;
    }
    ngOnInit() {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    }
    ngOnChanges(changes) {
        this.stars = [];
        for (let i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    }
    clickStar(index) {
        if (!this.readonly) {
            this.rating = index + 1;
            // this.ngOnInit();
            this.ratingChange.emit(this.rating);
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
], StarsComponent.prototype, "ratingChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Array)
], StarsComponent.prototype, "stars", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
    __metadata("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
StarsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-stars',
        template: __webpack_require__("../../../../../src/app/stars/stars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stars/stars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarsComponent);



/***/ }),

/***/ "../../../../../src/app/stock-detail/stock-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail{\n  margin-left: 12px;\n}\n\n.well{\n  margin-left: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock-detail/stock-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n  <img [src]=\"product.image\">\n  <hr>\n  <div>\n    <h4 class=\"pull-right\">${{product?.price}}</h4>\n    <h4>{{product?.title}}</h4>\n    <p>{{product?.desc}}</p>\n  </div>\n  <div>\n    <p class=\"pull-right\">{{comments?.length}}</p>\n    <p>\n      <app-stars [rating]=\"product?.rating\"></app-stars>\n    </p>\n  </div>\n</div>\n\n<div class=\"thumbnail\">\n  <button class=\"btn btn-info btn-lg\"\n          [class.active]=\"isWatched\"\n          (click)=\"watchProduct()\">\n    {{isWatched? 'Cancel reservation' : 'I am in!'}}\n  </button>\n  <label> <span>    </span>{{currentPrice/10 | number:'1.0-0'}} days left</label>\n  <p [hidden]=\"!isWatched\">\n    Thank you for your reservation.\n    The final price and the travel arrangement will be sent to your contacts.\n  </p>\n</div>\n\n\n<div class=\"well\">\n  <div>\n    <button class=\"btn btn-success\" (click)=\"isCommentHidden = !isCommentHidden\">\n      Add your comment\n    </button>\n  </div>\n  <div [hidden]=\"isCommentHidden\">\n    <div>\n      <app-stars [(rating)]=\"newRating\" [readonly]=\"false\"></app-stars>\n    </div>\n    <div>\n      <textarea class=\"form-control\" [(ngModel)]=\"newComment\"></textarea>\n    </div>\n    <div>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addComment()\">Submit Comment</button>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\" let comment of comments\">\n    <hr>\n    <div class=\"col-md-12\">\n      <app-stars [rating]=\"comment.rating\"></app-stars>\n      <span>{{comment.user}}</span>\n      <span class=\"pull-right\">{{comment.timestamp}}</span>\n      <p></p>\n      <p>{{comment.content}}</p>\n    </div>\n  </div>\n</div>\n\n<div>\n  <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stock-detail/stock-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__ = __webpack_require__("../../../../../src/app/shared/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm2015/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let StockDetailComponent = class StockDetailComponent {
    constructor(routeInfo, productService, wsService, location) {
        this.routeInfo = routeInfo;
        this.productService = productService;
        this.wsService = wsService;
        this.location = location;
        this.newRating = 5;
        this.newComment = '';
        this.isCommentHidden = true;
        this.isWatched = false;
    }
    ngOnInit() {
        const productId = this.routeInfo.snapshot.params['productId'];
        this.productService.getProduct(productId).subscribe(product => {
            this.product = product;
            this.currentPrice = product.price;
        });
        this.productService.getCommentsForProductId(productId).subscribe(comments => this.comments = comments);
    }
    goBack() {
        this.location.back();
    }
    addComment() {
        const comment = new __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["a" /* Comment */](0, this.product.id, new Date().toISOString(), 'Anonymous', this.newRating, this.newComment);
        this.comments.unshift(comment);
        // Calculate new average score
        let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
        this.product.rating = sum / this.comments.length;
        // Hide comment segment
        this.newComment = null;
        this.newRating = 5;
        this.isCommentHidden = true;
    }
    watchProduct() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.isWatched = false;
            this.subscription = null;
        }
        else {
            this.isWatched = true;
            this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
                .subscribe(products => {
                const product = products.find(p => p.productId === this.product.id);
                this.currentPrice = product.productPrice;
            });
        }
    }
};
StockDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-stock-detail',
        template: __webpack_require__("../../../../../src/app/stock-detail/stock-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stock-detail/stock-detail.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__shared_product_service__["b" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_3__shared_web_socket_service__["a" /* WebSocketService */],
        __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
], StockDetailComponent);



/***/ }),

/***/ "../../../../../src/app/stock/stock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button, div, input, select, textarea,h1 ,h2, h3, h4, h5, h6\n{ font-family: Tahoma, Helvetica, Arial, \"\\5B8B\\4F53\", sans-serif;}\n\np {\n font-family: Georgia, serif;\n}\n\n.thumbnail {\n  float: left;\n  margin-bottom: 18px;\n  margin-left: 20px;\n  height: 440px;\n  box-shadow: 1px 1px 5px grey;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let product of products | async\" class=\"col-md-4 col-sm-4 col-lg-4\">\n  <div class=\"thumbnail\">\n    <img [src]=\"product.image\">\n    <div class=\"caption\">\n      <h4 class=\"pull-right\">${{product.price}}</h4>\n      <h4><a [routerLink]= \"['/product', product.id]\"> {{product.title}}</a></h4>\n      <p>{{product.desc}}</p>\n    </div>\n    <div>\n      <app-stars [rating]=\"product.rating\" ></app-stars>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stock/stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_service__ = __webpack_require__("../../../../../src/app/shared/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let StockComponent = class StockComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.getProducts();
        this.productService.searchEvent.subscribe(params => this.products = this.productService.search(params));
    }
};
StockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-stock',
        template: __webpack_require__("../../../../../src/app/stock/stock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stock/stock.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_product_service__["b" /* ProductService */]])
], StockComponent);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map