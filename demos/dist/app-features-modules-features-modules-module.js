(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-features-modules-features-modules-module"],{

/***/ "./src/app/features-modules/features-modules-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features-modules/features-modules-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FeaturesModulesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModulesRoutingModule", function() { return FeaturesModulesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-modules.component */ "./src/app/features-modules/features-modules.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _features_modules_component__WEBPACK_IMPORTED_MODULE_2__["FeaturesModulesComponent"],
        children: [
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
            { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' }
        ]
    }
];
var FeaturesModulesRoutingModule = /** @class */ (function () {
    function FeaturesModulesRoutingModule() {
    }
    FeaturesModulesRoutingModule.components = [_features_modules_component__WEBPACK_IMPORTED_MODULE_2__["FeaturesModulesComponent"]];
    FeaturesModulesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FeaturesModulesRoutingModule);
    return FeaturesModulesRoutingModule;
}());



/***/ }),

/***/ "./src/app/features-modules/features-modules.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/features-modules/features-modules.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n    font-weight: bold;\n    font-size: 14pt;\n    text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/features-modules/features-modules.component.html":
/*!******************************************************************!*\
  !*** ./src/app/features-modules/features-modules.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Features and Modules</h1>\nEach feature should have it's own module and routing module. Click one of the links below\nto lazy load the feature module.\n<br /><br />\n<a routerLink=\"customers\">Customers Feature</a>&nbsp;&nbsp;\n<a routerLink=\"orders\">Orders Feature</a>\n<br /><br />\n<img src=\"/assets/features-modules.png\" width=\"600px\">\n<br /><br />\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/features-modules/features-modules.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features-modules/features-modules.component.ts ***!
  \****************************************************************/
/*! exports provided: FeaturesModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModulesComponent", function() { return FeaturesModulesComponent; });
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

var FeaturesModulesComponent = /** @class */ (function () {
    function FeaturesModulesComponent() {
    }
    FeaturesModulesComponent.prototype.ngOnInit = function () {
    };
    FeaturesModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-modules',
            template: __webpack_require__(/*! ./features-modules.component.html */ "./src/app/features-modules/features-modules.component.html"),
            styles: [__webpack_require__(/*! ./features-modules.component.css */ "./src/app/features-modules/features-modules.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesModulesComponent);
    return FeaturesModulesComponent;
}());



/***/ }),

/***/ "./src/app/features-modules/features-modules.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/features-modules/features-modules.module.ts ***!
  \*************************************************************/
/*! exports provided: FeaturesModulesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModulesModule", function() { return FeaturesModulesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _features_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-modules-routing.module */ "./src/app/features-modules/features-modules-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeaturesModulesModule = /** @class */ (function () {
    function FeaturesModulesModule() {
    }
    FeaturesModulesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _features_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeaturesModulesRoutingModule"]
            ],
            declarations: [_features_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeaturesModulesRoutingModule"].components]
        })
    ], FeaturesModulesModule);
    return FeaturesModulesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-features-modules-features-modules-module.js.map