webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.toolbar-sidenav-container {\n    height: 100vh;\n    width: 100vw;\n}\n\n.mat-drawer.toolbar-sidenav {\n    min-width: 300px;\n}\n\n.mat-button.button__mufa-toolbar {\n    min-width: 46px;\n    padding: 0;\n}\n\n.mat-toolbar.mufa-toolbar {\n    padding-left: 8px;\n}\n\n.mat-toolbar .h1__mufa-toolbar {\n    margin-left: 8px;\n}\n\n.mat-toolbar .subheading__mufa-toolbar {\n    font-size: 14px;\n    padding-top: 5px;\n    margin-left: 8px;\n}\n\n.mat-toolbar .h1__mufa-toolbar a {\n    color: #fff;\n    text-decoration: none;\n}\n\n/* Side nav league select */\n.toolbar-sidenav form {\n    width: 300px;\n}\n\n.toolbar-sidenav .mat-input-container.mat-form-field {\n    width: 90%;\n    margin: 0 auto;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mufa-toolbar\">\n  <button mat-button (click)=\"sidenav.open()\" class=\"button__mufa-toolbar\" matTooltip=\"Menu\" matTooltipShowDelay=\"400\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <h1 class=\"h1__mufa-toolbar\">\n    <a routerLink=\"/home\">MUFA</a>\n  </h1>\n  <!-- Placeholder content -->\n  &nbsp;\n  <span class=\"subheading__mufa-toolbar\">{{ selectedLeague.name }}</span>\n  <span class=\"flex-spacer\"></span>\n  <!-- If selected league -->\n  \n  <!-- <button routerLink=\"/schedule\" mat-button>\n    <span>Schedule</span>\n  </button> -->\n  \n  <!-- End placeholder content -->\n  <button mat-button class=\"button__mufa-toolbar\" [matMenuTriggerFor]=\"userMenu\" matTooltip=\"Account\" matTooltipShowDelay=\"400\">\n    <mat-icon>account_circle</mat-icon>\n  </button>\n  <mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\">\n    <!-- Signed in -->  \n    \n    <!-- <a routerLink=\"/profile\" mat-menu-item>\n      <span>Profile</span>\n    </a>\n    <button mat-menu-item>\n      <span>Log out</span>\n    </button> -->\n    \n    <!-- Not signed in -->\n    <button mat-menu-item>\n      <span>Log in</span>\n    </button>\n  </mat-menu>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"toolbar-sidenav-container\">\n\n  <!-- Page content -->\n  <router-outlet></router-outlet>\n\n  <mat-sidenav #sidenav class=\"toolbar-sidenav\">\n    \n    <!-- If there is no signed in user, show league select drop down of active leagues -->\n    <form>\n      <mat-form-field>\n        <mat-select placeholder=\"Select league\" [(ngModel)]=\"selectedLeague\" name=\"league\">\n          <mat-option *ngFor=\"let league of activeLeagues\" [value]=\"league\">\n            {{ league.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n    \n    <!-- \n      If there is a signed in user, repeat league-related options for each league that person is in, which a subheader\n    -->\n    \n    <!-- <a routerLink=\"/schedule\" mat-menu-item>\n      <mat-icon>event</mat-icon>\n      <span>Schedule</span>\n    </a>\n    <a routerLink=\"/standings\" mat-menu-item>\n      <mat-icon>list</mat-icon>\n      <span>Standings</span>\n    </a>\n    <a routerLink=\"/teams\" mat-menu-item>\n      <mat-icon>people</mat-icon>\n      <span>Teams</span>\n    </a>\n    <a routerLink=\"/players\" mat-menu-item>\n      <mat-icon>person</mat-icon>\n      <span>Players</span>\n    </a> -->\n    \n    <!-- Always present -->\n    <a routerLink=\"/rules\" mat-menu-item>\n      <mat-icon>book</mat-icon>\n      <span>Rules</span>\n    </a>\n    <a routerLink=\"/locations\" mat-menu-item>\n      <mat-icon>place</mat-icon>\n      <span>Locations</span>\n    </a>\n  </mat-sidenav>    \n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leagues_list_leagues_service__ = __webpack_require__("../../../../../src/app/leagues-list/leagues.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(leagueService) {
        this.leagueService = leagueService;
        this.title = "MUFA";
        this.selectedLeague = {
            id: null,
            name: null
        };
    }
    AppComponent.prototype.getActiveLeagues = function () {
        var _this = this;
        this.leagueService
            .getActiveLeagues()
            .then(function (leagues) { return (_this.activeLeagues = leagues); });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getActiveLeagues();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-root",
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__leagues_list_leagues_service__["a" /* LeagueService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__leagues_list_leagues_service__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leagues_list_leagues_service__["a" /* LeagueService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leagues_list_leagues_list_component__ = __webpack_require__("../../../../../src/app/leagues-list/leagues-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_profile_view_profile_component__ = __webpack_require__("../../../../../src/app/view-profile/view-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__leagues_list_leagues_list_component__["a" /* LeaguesListComponent */], __WEBPACK_IMPORTED_MODULE_8__view_profile_view_profile_component__["a" /* ViewProfileComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: "home",
                    component: __WEBPACK_IMPORTED_MODULE_7__leagues_list_leagues_list_component__["a" /* LeaguesListComponent */]
                },
                {
                    path: "profile",
                    component: __WEBPACK_IMPORTED_MODULE_8__view_profile_view_profile_component__["a" /* ViewProfileComponent */]
                },
                {
                    path: "",
                    redirectTo: "/home",
                    pathMatch: "full"
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/leagues-list/leagues-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/leagues-list/leagues-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container__main\">\n  <!-- Not logged in -->\n  <h1 class=\"headline\">Leagues</h1>\n  <p>Select a league to see its schedule, registered players, teams, etc.</p>\n  <mat-list>\n    <h3 mat-subheader>Active leagues</h3>\n    <mat-list-item *ngFor=\"let league of activeLeagues\">{{ league.name }}</mat-list-item>\n  </mat-list>\n  <!--\n    Logged in:\n      - Should show \"your leagues\"\n      - Different visual treatment for active leagues vs. your old leagues\n      - Quick link to team page/schedule\n  -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/leagues-list/leagues-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaguesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leagues_service__ = __webpack_require__("../../../../../src/app/leagues-list/leagues.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaguesListComponent = (function () {
    function LeaguesListComponent(leagueService) {
        this.leagueService = leagueService;
    }
    LeaguesListComponent.prototype.getActiveLeagues = function () {
        var _this = this;
        this.leagueService
            .getActiveLeagues()
            .then(function (leagues) { return (_this.activeLeagues = leagues); });
    };
    LeaguesListComponent.prototype.ngOnInit = function () {
        this.getActiveLeagues();
    };
    return LeaguesListComponent;
}());
LeaguesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-leagues-list",
        template: __webpack_require__("../../../../../src/app/leagues-list/leagues-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/leagues-list/leagues-list.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__leagues_service__["a" /* LeagueService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__leagues_service__["a" /* LeagueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__leagues_service__["a" /* LeagueService */]) === "function" && _a || Object])
], LeaguesListComponent);

var _a;
//# sourceMappingURL=leagues-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/leagues-list/leagues.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeagueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mock_leagues__ = __webpack_require__("../../../../../src/assets/mock-leagues.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LeagueService = (function () {
    function LeagueService() {
    }
    LeagueService.prototype.getActiveLeagues = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__assets_mock_leagues__["a" /* LEAGUES */]);
    };
    return LeagueService;
}());
LeagueService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], LeagueService);

//# sourceMappingURL=leagues.service.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSelectModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSelectModule */]
        ]
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/view-profile/view-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-profile/view-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  view-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/view-profile/view-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewProfileComponent = (function () {
    function ViewProfileComponent() {
    }
    ViewProfileComponent.prototype.ngOnInit = function () { };
    return ViewProfileComponent;
}());
ViewProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-view-profile",
        template: __webpack_require__("../../../../../src/app/view-profile/view-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-profile/view-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewProfileComponent);

//# sourceMappingURL=view-profile.component.js.map

/***/ }),

/***/ "../../../../../src/assets/mock-leagues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEAGUES; });
var LEAGUES = [{ name: "Foo" }, { name: "Bar" }];
//# sourceMappingURL=mock-leagues.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map