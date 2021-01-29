(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presentation-page-presentation-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentation-page/presentation-page.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentation-page/presentation-page.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/presentations\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{presentation.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <iframe [src] = \"openURL()\"\r\n   width=\"500\" \r\n   height=\"714\" \r\n   frameborder=\"0\" \r\n   marginwidth=\"0\" \r\n   marginheight=\"0\" \r\n   scrolling=\"no\" \r\n   style=\"position:absolute; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;\"\r\n   allowfullscreen webkitallowfullscreen mozallowfullscreen> </iframe> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/presentations/presentation-page/presentation-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/presentations/presentation-page/presentation-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PresentationPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationPagePageRoutingModule", function() { return PresentationPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _presentation_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presentation-page.page */ "./src/app/presentations/presentation-page/presentation-page.page.ts");




const routes = [
    {
        path: '',
        component: _presentation_page_page__WEBPACK_IMPORTED_MODULE_3__["PresentationPagePage"]
    }
];
let PresentationPagePageRoutingModule = class PresentationPagePageRoutingModule {
};
PresentationPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PresentationPagePageRoutingModule);



/***/ }),

/***/ "./src/app/presentations/presentation-page/presentation-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/presentations/presentation-page/presentation-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PresentationPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationPagePageModule", function() { return PresentationPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _presentation_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation-page-routing.module */ "./src/app/presentations/presentation-page/presentation-page-routing.module.ts");
/* harmony import */ var _presentation_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation-page.page */ "./src/app/presentations/presentation-page/presentation-page.page.ts");







let PresentationPagePageModule = class PresentationPagePageModule {
};
PresentationPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _presentation_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["PresentationPagePageRoutingModule"]
        ],
        declarations: [_presentation_page_page__WEBPACK_IMPORTED_MODULE_6__["PresentationPagePage"]]
    })
], PresentationPagePageModule);



/***/ }),

/***/ "./src/app/presentations/presentation-page/presentation-page.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/presentations/presentation-page/presentation-page.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbnMvcHJlc2VudGF0aW9uLXBhZ2UvcHJlc2VudGF0aW9uLXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/presentations/presentation-page/presentation-page.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/presentations/presentation-page/presentation-page.page.ts ***!
  \***************************************************************************/
/*! exports provided: PresentationPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationPagePage", function() { return PresentationPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_presentations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/presentations.service */ "./src/app/services/presentations.service.ts");






let PresentationPagePage = class PresentationPagePage {
    constructor(presentationsService, navCtrl, route, sanitizer) {
        this.presentationsService = presentationsService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('presentationName')) {
                this.navCtrl.navigateBack('/presentations');
                return;
            }
            this.presentation = this.presentationsService.getPresentation(paramMap.get('presentationName'));
        });
    }
    openURL() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.presentation.url);
    }
};
PresentationPagePage.ctorParameters = () => [
    { type: src_app_services_presentations_service__WEBPACK_IMPORTED_MODULE_5__["PresentationsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
PresentationPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-presentation-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/presentations/presentation-page/presentation-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation-page.page.scss */ "./src/app/presentations/presentation-page/presentation-page.page.scss")).default]
    })
], PresentationPagePage);



/***/ })

}]);
//# sourceMappingURL=presentation-page-presentation-page-module-es2015.js.map