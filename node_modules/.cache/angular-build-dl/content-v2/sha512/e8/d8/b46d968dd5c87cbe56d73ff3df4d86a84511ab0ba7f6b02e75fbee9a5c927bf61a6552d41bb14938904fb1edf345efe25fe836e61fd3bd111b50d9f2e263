(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentations-presentations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentations.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentations.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n    <ion-title>Presentations</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <iframe src=\"//www.slideshare.net/slideshow/embed_code/key/nxQS5h9O1kQTcE\" width=\"668\" height=\"714\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\" allowfullscreen> </iframe> <div style=\"margin-bottom:5px\"> <strong> <a href=\"//www.slideshare.net/secret/nxQS5h9O1kQTcE\" title=\"Dummy\" target=\"_blank\">Dummy</a> </strong> from <strong><a href=\"//www.slideshare.net/CalebHillhouse\" target=\"_blank\">Caleb Hillhouse</a></strong> </div> -->\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-virtual-scroll [items]=\"listedPresentations\">\r\n          <ion-item \r\n            [routerLink]=\"['/', 'presentations', presentation.name]\"\r\n            detail\r\n            *virtualItem=\"let presentation\">\r\n            <ion-label>{{presentation.name}}</ion-label>            \r\n          </ion-item>\r\n        </ion-virtual-scroll>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/presentations/presentations-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/presentations/presentations-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PresentationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsPageRoutingModule", function() { return PresentationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _presentations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentations.page */ "./src/app/presentations/presentations.page.ts");




const routes = [
    {
        path: '',
        component: _presentations_page__WEBPACK_IMPORTED_MODULE_3__["PresentationsPage"]
    },
    {
        path: ':presentationName',
        loadChildren: () => __webpack_require__.e(/*! import() | presentation-page-presentation-page-module */ "presentation-page-presentation-page-module").then(__webpack_require__.bind(null, /*! ./presentation-page/presentation-page.module */ "./src/app/presentations/presentation-page/presentation-page.module.ts")).then(m => m.PresentationPagePageModule)
    }
];
let PresentationsPageRoutingModule = class PresentationsPageRoutingModule {
};
PresentationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PresentationsPageRoutingModule);



/***/ }),

/***/ "./src/app/presentations/presentations.model.ts":
/*!******************************************************!*\
  !*** ./src/app/presentations/presentations.model.ts ***!
  \******************************************************/
/*! exports provided: Presentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presentation", function() { return Presentation; });
class Presentation {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}


/***/ }),

/***/ "./src/app/presentations/presentations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/presentations/presentations.module.ts ***!
  \*******************************************************/
/*! exports provided: PresentationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsPageModule", function() { return PresentationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _presentations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentations-routing.module */ "./src/app/presentations/presentations-routing.module.ts");
/* harmony import */ var _presentations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentations.page */ "./src/app/presentations/presentations.page.ts");







let PresentationsPageModule = class PresentationsPageModule {
};
PresentationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _presentations_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresentationsPageRoutingModule"]
        ],
        declarations: [_presentations_page__WEBPACK_IMPORTED_MODULE_6__["PresentationsPage"]]
    })
], PresentationsPageModule);



/***/ }),

/***/ "./src/app/presentations/presentations.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/presentations/presentations.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbnMvcHJlc2VudGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/presentations/presentations.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/presentations/presentations.page.ts ***!
  \*****************************************************/
/*! exports provided: PresentationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsPage", function() { return PresentationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_presentations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/presentations.service */ "./src/app/services/presentations.service.ts");



let PresentationsPage = class PresentationsPage {
    constructor(presentationsService) {
        this.presentationsService = presentationsService;
    }
    ngOnInit() {
        this.listedPresentations = this.presentationsService.presentations;
    }
    ionViewWillEnter() {
        this.listedPresentations = this.presentationsService.presentations;
    }
};
PresentationsPage.ctorParameters = () => [
    { type: _services_presentations_service__WEBPACK_IMPORTED_MODULE_2__["PresentationsService"] }
];
PresentationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentations.page.scss */ "./src/app/presentations/presentations.page.scss")).default]
    })
], PresentationsPage);



/***/ }),

/***/ "./src/app/services/presentations.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/presentations.service.ts ***!
  \***************************************************/
/*! exports provided: PresentationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationsService", function() { return PresentationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _presentations_presentations_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentations/presentations.model */ "./src/app/presentations/presentations.model.ts");



let PresentationsService = class PresentationsService {
    constructor() {
        this._presentations = [
            new _presentations_presentations_model__WEBPACK_IMPORTED_MODULE_2__["Presentation"]('Embedded Link', 'https://www.slideshare.net/slideshow/embed_code/key/oe9k15aHHmmbFD'),
            new _presentations_presentations_model__WEBPACK_IMPORTED_MODULE_2__["Presentation"]('Link to SlideShare', '//www.slideshare.net/slideshow/embed_code/key/GaimX22TyRPt0B')
        ];
    }
    get presentations() {
        return [...this._presentations];
    }
    getPresentation(name) {
        return Object.assign({}, this._presentations.find(p => p.name === name));
    }
};
PresentationsService.ctorParameters = () => [];
PresentationsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PresentationsService);



/***/ })

}]);
//# sourceMappingURL=presentations-presentations-module-es2015.js.map