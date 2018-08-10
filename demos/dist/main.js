(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./customers/customers.module": [
		"./src/app/features-modules/customers/customers.module.ts",
		"customers-customers-module"
	],
	"./orders/orders.module": [
		"./src/app/features-modules/orders/orders.module.ts",
		"orders-orders-module"
	],
	"app/features-modules/features-modules.module": [
		"./src/app/features-modules/features-modules.module.ts",
		"app-features-modules-features-modules-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/planning' },
    { path: 'features-modules', loadChildren: 'app/features-modules/features-modules.module#FeaturesModulesModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle {\n    height:20px;\n    width:20px;\n    border-radius: 50px;\n    padding-left:6px;\n    background: red;\n    color: white;\n    margin-top: 15px;\n    margin-right: 10px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <a href=\"#/\"><img src=\"assets/angular.png\" class=\"logo\" /></a>\n    </div>\n    <ul class=\"nav navbar-nav nav-pills\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/planning\">Planning</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/features-modules\">Features/Modules</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/structuring-components\">Components</a>\n      </li>\n      <li routerLinkActive=\"active\">\n          <a routerLink=\"/communication\">Communication</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/pipes-functions\">Pipes/Functions</a>\n    </li>\n    </ul>\n    <strong *ngIf=\"customers\" class=\"pull-right circle\">\n        {{ customers.length }}\n    </strong>\n  </nav>\n\n\n  <strong *ngIf=\"customer\" class=\"pull-right\" style=\"padding-right: 10px;\">\n      Current Customer: {{ customer.name }}\n  </strong>\n  \n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  \n"

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
/* harmony import */ var _core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(eventbus, dataService) {
        this.eventbus = eventbus;
        this.dataService = dataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Example of using an event bus to provide loosely coupled communication (mediator pattern)
        this.eventbusSub = this.eventbus.on(_core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].CustomerSelected, (function (cust) { return _this.customer = cust; }));
        //Example of using BehaviorSubject to be notified when a service changes
        this.dataServiceSub = this.dataService.customersChanged$.subscribe(function (custs) { return _this.customers = custs; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.eventbusSub.unsubscribe();
        this.dataServiceSub.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _planning_planning_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planning/planning.module */ "./src/app/planning/planning.module.ts");
/* harmony import */ var _structuring_components_structuring_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structuring-components/structuring-components.module */ "./src/app/structuring-components/structuring-components.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _communication_communication_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./communication/communication.module */ "./src/app/communication/communication.module.ts");
/* harmony import */ var _pipes_functions_pipes_functions_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes-functions/pipes-functions.module */ "./src/app/pipes-functions/pipes-functions.module.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _planning_planning_module__WEBPACK_IMPORTED_MODULE_4__["PlanningModule"],
                _structuring_components_structuring_components_module__WEBPACK_IMPORTED_MODULE_5__["StructuringComponentsModule"],
                _pipes_functions_pipes_functions_module__WEBPACK_IMPORTED_MODULE_8__["PipesFunctionsModule"],
                _communication_communication_module__WEBPACK_IMPORTED_MODULE_7__["CommunicationModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/communication/communication-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/communication/communication-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CommunicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationRoutingModule", function() { return CommunicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _communication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication.component */ "./src/app/communication/communication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'communication', component: _communication_component__WEBPACK_IMPORTED_MODULE_2__["CommunicationComponent"] }
];
var CommunicationRoutingModule = /** @class */ (function () {
    function CommunicationRoutingModule() {
    }
    CommunicationRoutingModule.components = [_communication_component__WEBPACK_IMPORTED_MODULE_2__["CommunicationComponent"]];
    CommunicationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommunicationRoutingModule);
    return CommunicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/communication/communication.component.html":
/*!************************************************************!*\
  !*** ./src/app/communication/communication.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Services/Components Communication</h1>\n<br />\n<ul>\n    <li>An \"Event Bus\" can provide a loosely coupled way to communicate between objects.</li>\n    <li>Services can expose a Subject/BehaviorSubject/ReplaySubject that other services/components can subscribe to for changes.</li>\n    <li>State management solutions such as Ngrx or Mobx can also be used.</li>\n</ul>\n<br />\n<button (click)=\"addCustomerPush()\" class=\"btn btn-danger\">Add Customer (push only)</button>&nbsp;&nbsp;\n<button (click)=\"addCustomerClone()\" class=\"btn btn-primary\">Add Customer (push a clone)</button>\n\n<br />\n<br />\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <app-customers-list [customers]=\"customers\" (customerSelected)=\"selected($event)\"></app-customers-list>\n    </div>\n    <div class=\"col-md-6\">\n        <app-customer-details [customer]=\"customer\"></app-customer-details>\n    </div>\n</div>\n\n<br />\n<br />\n<h4>Notes:</h4>\n<ul>\n    <li>This example shows how services and subjects can be used to provide a communication mechanism for \n            components. Click one of the buttons below and note how the customers count number in the upper-right corner \n            changes (event bus is used). Note that when a customer is selected in the \"Customers\" presentation component the details display\n            AND the customer details display below the navbar (BehaviorSubject is used).</li>\n    <li>The \"Add Customer (push only)\" button will call a service to add a customer but the returned customers data will not display properly and will not trigger ngOnChanges in the presentation component since the customers array itself doesn't change.</li>\n    <li>The \"Add Customer (push a clone)\" will call a service to add a customer but the service will return a clone of the customers data. The presentation component's ngOnChanges will fire and the data will display correctly as a result.</li>\n</ul>"

/***/ }),

/***/ "./src/app/communication/communication.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/communication/communication.component.ts ***!
  \**********************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunicationComponent = /** @class */ (function () {
    function CommunicationComponent(dataService) {
        this.dataService = dataService;
        this.customers = [];
    }
    CommunicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCustomers()
            .subscribe(function (custs) { return _this.customers = custs; });
    };
    CommunicationComponent.prototype.selected = function (cust) {
        this.customer = cust;
    };
    CommunicationComponent.prototype.addCustomerPush = function () {
        var _this = this;
        this.dataService.addCustomer()
            .subscribe(function (custs) { return _this.customers = custs; });
    };
    CommunicationComponent.prototype.addCustomerClone = function () {
        var _this = this;
        this.dataService.addCustomerClone()
            .subscribe(function (custs) { return _this.customers = custs; });
    };
    CommunicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communication',
            template: __webpack_require__(/*! ./communication.component.html */ "./src/app/communication/communication.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], CommunicationComponent);
    return CommunicationComponent;
}());



/***/ }),

/***/ "./src/app/communication/communication.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/communication/communication.module.ts ***!
  \*******************************************************/
/*! exports provided: CommunicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _communication_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication-routing.module */ "./src/app/communication/communication-routing.module.ts");
/* harmony import */ var _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-list/customers-list.component */ "./src/app/communication/customers-list/customers-list.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/communication/customer-details/customer-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommunicationModule = /** @class */ (function () {
    function CommunicationModule() {
    }
    CommunicationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _communication_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunicationRoutingModule"]
            ],
            declarations: [_communication_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommunicationRoutingModule"].components, _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomersListComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"]]
        })
    ], CommunicationModule);
    return CommunicationModule;
}());



/***/ }),

/***/ "./src/app/communication/customer-details/customer-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/communication/customer-details/customer-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Details</h4>\n<table *ngIf=\"customer\" class=\"table\">\n  <tr>\n    <td>Name: </td>\n    <td>{{ customer.name }}</td>\n  </tr>\n  <tr>\n    <td>City: </td>\n    <td>{{ customer.city }}</td>\n  </tr>\n  <tr>\n    <td>Age: </td>\n    <td>{{ customer.age }}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/communication/customer-details/customer-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/communication/customer-details/customer-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
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

var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/communication/customer-details/customer-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/communication/customers-list/customers-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/communication/customers-list/customers-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/communication/customers-list/customers-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/communication/customers-list/customers-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Customers</h4>\n<table class=\"table table-striped\">\n  <tr>\n    <th>Name</th>\n  </tr>\n  <tr *ngFor=\"let cust of customers\" (click)=\"selectCustomer(cust)\">\n    <td>{{ cust.name }}</td>\n  </tr>\n</table>\n<br />\n<div *ngFor=\"let msg of logMessages\">{{ msg }}</div>\n"

/***/ }),

/***/ "./src/app/communication/customers-list/customers-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/communication/customers-list/customers-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent(eventbus) {
        this.eventbus = eventbus;
        this.customerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logMessages = [];
    }
    CustomersListComponent.prototype.ngOnInit = function () {
    };
    CustomersListComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (simpleChanges['customers']) {
            this.logMessages.push('ngOnChanges Fired: Customers changed');
        }
    };
    CustomersListComponent.prototype.selectCustomer = function (cust) {
        this.customerSelected.emit(cust);
        this.eventbus.emit(new _core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EmitEvent"](_core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].CustomerSelected, cust));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersListComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerSelected", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/communication/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.css */ "./src/app/communication/customers-list/customers-list.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"]])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _services_cloner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cloner.service */ "./src/app/core/services/cloner.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_cloner_service__WEBPACK_IMPORTED_MODULE_3__["ClonerService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/cloner.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/cloner.service.ts ***!
  \*************************************************/
/*! exports provided: ClonerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClonerService", function() { return ClonerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// https://github.com/codeandcats/fast-clone/blob/master/index.js
var ClonerService = /** @class */ (function () {
    function ClonerService() {
    }
    ClonerService.prototype.deepClone = function (value) {
        var type = typeof value;
        switch (type) {
            case 'object':
                // null and undefined
                if (value == null) {
                    return value;
                }
                var result = void 0;
                if (value instanceof Date) {
                    result = new Date();
                    result.setTime(value.getTime());
                    return result;
                }
                else if (value instanceof RegExp) {
                    result = this.newRegExp(value);
                    return result;
                }
                result = JSON.parse(JSON.stringify(value));
                this.fixTypes(value, result);
                return result;
            default:
                return value;
        }
    };
    ClonerService.prototype.fixPropertyValue = function (original, copy, key) {
        var originalValue = original[key];
        var originalType = typeof originalValue;
        switch (originalType) {
            case 'object':
                if (originalValue instanceof Date) {
                    var newValue = new Date();
                    newValue.setTime(originalValue.getTime());
                    copy[key] = newValue;
                }
                else if (originalValue instanceof RegExp) {
                    copy[key] = this.newRegExp(originalValue);
                }
                else if (originalValue == null) {
                    copy[key] = originalValue;
                }
                else {
                    this.fixTypes(originalValue, copy[key]);
                }
                break;
            case 'number':
                if (isNaN(originalValue)) {
                    copy[key] = NaN;
                }
                else if (originalValue === Infinity) {
                    copy[key] = Infinity;
                }
                break;
            default:
                break;
        }
    };
    ClonerService.prototype.fixTypes = function (original, copy) {
        var _this = this;
        if (original instanceof Array) {
            for (var index = 0; index < original.length; index++) {
                this.fixPropertyValue(original, copy, index);
            }
        }
        else {
            var keys = Object.getOwnPropertyNames(original);
            keys.forEach(function (key) {
                _this.fixPropertyValue(original, copy, key);
            });
        }
    };
    ClonerService.prototype.newRegExp = function (value) {
        var regexpText = String(value);
        var slashIndex = regexpText.lastIndexOf('/');
        return new RegExp(regexpText.slice(1, slashIndex), regexpText.slice(slashIndex + 1));
    };
    ClonerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ClonerService);
    return ClonerService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _cloner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloner.service */ "./src/app/core/services/cloner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(cloner) {
        this.cloner = cloner;
        this.customers = [
            {
                id: 1,
                name: 'John Doe',
                city: 'Phoenix',
                age: 42
            },
            {
                id: 2,
                name: 'Jane Doe',
                city: 'Seattle',
                age: 30
            },
            {
                id: 3,
                name: 'Michelle Thompson',
                city: 'Orlando',
                age: 22
            }
        ];
        this.products = [
            {
                id: 1,
                name: 'Basketball',
                price: 29.99
            },
            {
                id: 2,
                name: 'XBox',
                price: 249.99
            },
            {
                id: 3,
                name: 'Nintendo Switch',
                price: 249.99
            },
            {
                id: 4,
                name: 'Bat',
                price: 29.99
            },
            {
                id: 5,
                name: 'Glove',
                price: 29.99
            },
            {
                id: 6,
                name: 'Cell Phone',
                price: 799.99
            },
            {
                id: 7,
                name: 'Cell Phone Service',
                price: 49.99
            },
            {
                id: 8,
                name: 'Laptop',
                price: 999.99
            },
            {
                id: 9,
                name: 'Bluetooth Speaker',
                price: 69.99
            },
            {
                id: 10,
                name: 'TV',
                price: 1599.99
            }
        ];
        this.customersSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.customers);
        this.customersChanged$ = this.customersSubject$.asObservable();
    }
    DataService.prototype.getCustomers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.customers);
    };
    DataService.prototype.getProducts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.products);
    };
    DataService.prototype.addCustomer = function () {
        var id = this.customers[this.customers.length - 1].id + 1;
        this.customers.push({
            id: id,
            name: 'New Customer ' + id,
            city: 'Somewhere',
            age: id * 5
        });
        this.customersSubject$.next(this.customers);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.customers);
    };
    DataService.prototype.addCustomerClone = function () {
        var _this = this;
        return this.addCustomer().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (custs) {
            return _this.cloner.deepClone(custs);
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cloner_service__WEBPACK_IMPORTED_MODULE_3__["ClonerService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/event-bus.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventBusService = /** @class */ (function () {
    function EventBusService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventBusService.prototype.on = function (event, action) {
        return this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            return event.value;
        }))
            .subscribe(action);
    };
    EventBusService.prototype.emit = function (event) {
        this.subject.next(event);
    };
    EventBusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());

var EmitEvent = /** @class */ (function () {
    function EmitEvent(name, value) {
        this.name = name;
        this.value = value;
    }
    return EmitEvent;
}());

var Events;
(function (Events) {
    Events[Events["CustomerSelected"] = 0] = "CustomerSelected";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/pipes-functions/pipes-functions-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pipes-functions/pipes-functions-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PipesFunctionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesFunctionsRoutingModule", function() { return PipesFunctionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_functions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes-functions.component */ "./src/app/pipes-functions/pipes-functions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'pipes-functions', component: _pipes_functions_component__WEBPACK_IMPORTED_MODULE_2__["PipesFunctionsComponent"] }
];
var PipesFunctionsRoutingModule = /** @class */ (function () {
    function PipesFunctionsRoutingModule() {
    }
    PipesFunctionsRoutingModule.components = [
        _pipes_functions_component__WEBPACK_IMPORTED_MODULE_2__["PipesFunctionsComponent"]
    ];
    PipesFunctionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PipesFunctionsRoutingModule);
    return PipesFunctionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pipes-functions/pipes-functions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pipes-functions/pipes-functions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Pipes versus Functions</h1>\nThis example shows how using pipes (where possible) instead of functions in a template can enhance performance. See the console.\n<h3>Calling a Function from a Template</h3>\n<table class=\"table table-striped\">\n  <tr>\n    <th>Name</th>\n    <th>Total</th>\n  </tr>\n  <tr *ngFor=\"let product of products$ | async\">\n    <td>{{ product.name }}</td>\n    <td>{{ getTotalPrice(product.price) | currency }}</td>\n  </tr>\n</table>\n\n<br />\n<br />\n<h3>Using a Pipe (and @memo() decorator) in a Template</h3>\n<table class=\"table table-striped\">\n  <tr>\n    <th>Name</th>\n    <th>Total</th>\n  </tr>\n  <tr *ngFor=\"let product of products$ | async\">\n    <td>{{ product.name }}</td>\n    <td>{{ product.price | addtax:product.price | currency }}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/pipes-functions/pipes-functions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pipes-functions/pipes-functions.component.ts ***!
  \**************************************************************/
/*! exports provided: PipesFunctionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesFunctionsComponent", function() { return PipesFunctionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PipesFunctionsComponent = /** @class */ (function () {
    function PipesFunctionsComponent(dataService) {
        this.dataService = dataService;
        this.tax = .08;
    }
    PipesFunctionsComponent.prototype.ngOnInit = function () {
        this.products$ = this.dataService.getProducts();
    };
    PipesFunctionsComponent.prototype.getTotalPrice = function (price) {
        console.log('totalPrice() function called');
        return price + (price * this.tax);
    };
    PipesFunctionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipes-functions',
            template: __webpack_require__(/*! ./pipes-functions.component.html */ "./src/app/pipes-functions/pipes-functions.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PipesFunctionsComponent);
    return PipesFunctionsComponent;
}());



/***/ }),

/***/ "./src/app/pipes-functions/pipes-functions.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pipes-functions/pipes-functions.module.ts ***!
  \***********************************************************/
/*! exports provided: PipesFunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesFunctionsModule", function() { return PipesFunctionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_functions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes-functions-routing.module */ "./src/app/pipes-functions/pipes-functions-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesFunctionsModule = /** @class */ (function () {
    function PipesFunctionsModule() {
    }
    PipesFunctionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _pipes_functions_routing_module__WEBPACK_IMPORTED_MODULE_2__["PipesFunctionsRoutingModule"]
            ],
            declarations: [_pipes_functions_routing_module__WEBPACK_IMPORTED_MODULE_2__["PipesFunctionsRoutingModule"].components]
        })
    ], PipesFunctionsModule);
    return PipesFunctionsModule;
}());



/***/ }),

/***/ "./src/app/planning/planning-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/planning/planning-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningRoutingModule", function() { return PlanningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _planning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planning.component */ "./src/app/planning/planning.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'planning', component: _planning_component__WEBPACK_IMPORTED_MODULE_2__["PlanningComponent"] }
];
var PlanningRoutingModule = /** @class */ (function () {
    function PlanningRoutingModule() {
    }
    PlanningRoutingModule.components = [
        _planning_component__WEBPACK_IMPORTED_MODULE_2__["PlanningComponent"]
    ];
    PlanningRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PlanningRoutingModule);
    return PlanningRoutingModule;
}());



/***/ }),

/***/ "./src/app/planning/planning.component.html":
/*!**************************************************!*\
  !*** ./src/app/planning/planning.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Planning Your Architecture</h1>\n<iframe src=\"https://docs.google.com/presentation/d/e/2PACX-1vT9WrzJ4gh3tIJ-V0hx9ogMk6fpm0A7SaIo0QBQa5_er5r7yXWyi7hiYkjZkT7O44tKpW7Tot-tery8/embed?start=false&loop=false&delayms=3000\" \n    frameborder=\"0\" \n    width=\"900\" height=\"535\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" \n    webkitallowfullscreen=\"true\"></iframe>"

/***/ }),

/***/ "./src/app/planning/planning.component.ts":
/*!************************************************!*\
  !*** ./src/app/planning/planning.component.ts ***!
  \************************************************/
/*! exports provided: PlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningComponent", function() { return PlanningComponent; });
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

var PlanningComponent = /** @class */ (function () {
    function PlanningComponent() {
    }
    PlanningComponent.prototype.ngOnInit = function () {
    };
    PlanningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planning',
            template: __webpack_require__(/*! ./planning.component.html */ "./src/app/planning/planning.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PlanningComponent);
    return PlanningComponent;
}());



/***/ }),

/***/ "./src/app/planning/planning.module.ts":
/*!*********************************************!*\
  !*** ./src/app/planning/planning.module.ts ***!
  \*********************************************/
/*! exports provided: PlanningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningModule", function() { return PlanningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _planning_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planning-routing.module */ "./src/app/planning/planning-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlanningModule = /** @class */ (function () {
    function PlanningModule() {
    }
    PlanningModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_planning_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlanningRoutingModule"]],
            declarations: [_planning_routing_module__WEBPACK_IMPORTED_MODULE_1__["PlanningRoutingModule"].components],
        })
    ], PlanningModule);
    return PlanningModule;
}());



/***/ }),

/***/ "./src/app/shared/addtax.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/addtax.pipe.ts ***!
  \***************************************/
/*! exports provided: AddTaxPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaxPipe", function() { return AddTaxPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memo-decorator */ "./node_modules/memo-decorator/index.js");
/* harmony import */ var memo_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memo_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function getTotalPrice(price) {
    console.log('addtax pipe called');
    var total = price + (price * .08);
    return total;
}
var AddTaxPipe = /** @class */ (function () {
    function AddTaxPipe() {
    }
    AddTaxPipe.prototype.transform = function (price) {
        if (price) {
            return getTotalPrice(price);
        }
        return price;
    };
    __decorate([
        memo_decorator__WEBPACK_IMPORTED_MODULE_1___default()(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], AddTaxPipe.prototype, "transform", null);
    AddTaxPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'addtax'
        })
    ], AddTaxPipe);
    return AddTaxPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _addtax_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addtax.pipe */ "./src/app/shared/addtax.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_addtax_pipe__WEBPACK_IMPORTED_MODULE_2__["AddTaxPipe"]],
            declarations: [_addtax_pipe__WEBPACK_IMPORTED_MODULE_2__["AddTaxPipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/structuring-components/customer-details/customer-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/structuring-components/customer-details/customer-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Details</h4>\n<table *ngIf=\"customer\" class=\"table\">\n  <tr>\n    <td>Name: </td>\n    <td>{{ customer.name }}</td>\n  </tr>\n  <tr>\n    <td>City: </td>\n    <td>{{ customer.city }}</td>\n  </tr>\n  <tr>\n    <td>Age: </td>\n    <td>{{ customer.age }}</td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/structuring-components/customer-details/customer-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/structuring-components/customer-details/customer-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
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

var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent() {
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerDetailsComponent.prototype, "customer", void 0);
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/structuring-components/customer-details/customer-details.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/structuring-components/customers-list/customers-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/structuring-components/customers-list/customers-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/structuring-components/customers-list/customers-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/structuring-components/customers-list/customers-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Customers</h4>\n<table class=\"table table-striped\">\n  <tr>\n    <th>Name</th>\n  </tr>\n  <tr *ngFor=\"let cust of customers\" (click)=\"selectCustomer(cust)\">\n    <td>{{ cust.name }}</td>\n  </tr>\n</table>\n<br />\n<div *ngFor=\"let msg of logMessages\">{{ msg }}</div>\n"

/***/ }),

/***/ "./src/app/structuring-components/customers-list/customers-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/structuring-components/customers-list/customers-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
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

var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent() {
        this.customerSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logMessages = [];
    }
    CustomersListComponent.prototype.ngOnInit = function () {
    };
    CustomersListComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (simpleChanges['customers']) {
            this.logMessages.push('Customers changed');
        }
    };
    CustomersListComponent.prototype.selectCustomer = function (cust) {
        this.customerSelected.emit(cust);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersListComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerSelected", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/structuring-components/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.css */ "./src/app/structuring-components/customers-list/customers-list.component.css")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/structuring-components/structuring-components-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/structuring-components/structuring-components-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: StructuringComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuringComponentsRoutingModule", function() { return StructuringComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _structuring_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structuring-components.component */ "./src/app/structuring-components/structuring-components.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'structuring-components', component: _structuring_components_component__WEBPACK_IMPORTED_MODULE_2__["StructuringComponentsComponent"] }
];
var StructuringComponentsRoutingModule = /** @class */ (function () {
    function StructuringComponentsRoutingModule() {
    }
    StructuringComponentsRoutingModule.components = [_structuring_components_component__WEBPACK_IMPORTED_MODULE_2__["StructuringComponentsComponent"]];
    StructuringComponentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StructuringComponentsRoutingModule);
    return StructuringComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/structuring-components/structuring-components.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/structuring-components/structuring-components.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Container and Presentation Components</h1>\n<ul>\n    <li>Container components act as the \"manager\" for presentation components. Responsible for managing state.</li>\n    <li>Presentation components are handed state and are responsible for presenting/rendering it.</li>\n    <li>Recommending setting changeDetection to ChangeDetectionStrategy.OnPush</li>\n</ul>\n<br />\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <app-customers-list [customers]=\"customers\" (customerSelected)=\"selected($event)\"></app-customers-list>\n    </div>\n    <div class=\"col-md-6\">\n        <app-customer-details [customer]=\"customer\"></app-customer-details>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/structuring-components/structuring-components.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/structuring-components/structuring-components.component.ts ***!
  \****************************************************************************/
/*! exports provided: StructuringComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuringComponentsComponent", function() { return StructuringComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StructuringComponentsComponent = /** @class */ (function () {
    function StructuringComponentsComponent(dataService) {
        this.dataService = dataService;
        this.customers = [];
    }
    StructuringComponentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCustomers()
            .subscribe(function (custs) { return _this.customers = custs; });
    };
    StructuringComponentsComponent.prototype.selected = function (cust) {
        this.customer = cust;
    };
    StructuringComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-structuring-components',
            template: __webpack_require__(/*! ./structuring-components.component.html */ "./src/app/structuring-components/structuring-components.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], StructuringComponentsComponent);
    return StructuringComponentsComponent;
}());



/***/ }),

/***/ "./src/app/structuring-components/structuring-components.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/structuring-components/structuring-components.module.ts ***!
  \*************************************************************************/
/*! exports provided: StructuringComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructuringComponentsModule", function() { return StructuringComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _structuring_components_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structuring-components-routing.module */ "./src/app/structuring-components/structuring-components-routing.module.ts");
/* harmony import */ var _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-list/customers-list.component */ "./src/app/structuring-components/customers-list/customers-list.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/structuring-components/customer-details/customer-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StructuringComponentsModule = /** @class */ (function () {
    function StructuringComponentsModule() {
    }
    StructuringComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _structuring_components_routing_module__WEBPACK_IMPORTED_MODULE_2__["StructuringComponentsRoutingModule"]
            ],
            declarations: [_structuring_components_routing_module__WEBPACK_IMPORTED_MODULE_2__["StructuringComponentsRoutingModule"].components, _customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomersListComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"]]
        })
    ], StructuringComponentsModule);
    return StructuringComponentsModule;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danwahlin/Dropbox/Projects/GitHub/Angular-Architecture/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map