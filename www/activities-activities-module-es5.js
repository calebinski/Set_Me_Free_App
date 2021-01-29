(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activities-activities-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/activities/activities.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activities/activities.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppActivitiesActivitiesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Activities</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item [routerLink]=\"['/', 'activities', 'myth-vs-fact']\">\r\n          <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label><h2>Myth vs. Fact</h2></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/activities/activities-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/activities/activities-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ActivitiesPageRoutingModule */

    /***/
    function srcAppActivitiesActivitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPageRoutingModule", function () {
        return ActivitiesPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activities.page */
      "./src/app/activities/activities.page.ts");

      var routes = [{
        path: '',
        component: _activities_page__WEBPACK_IMPORTED_MODULE_3__["ActivitiesPage"]
      }, {
        path: 'myth-vs-fact',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | myth-vs-fact-myth-vs-fact-module */
          "myth-vs-fact-myth-vs-fact-module").then(__webpack_require__.bind(null,
          /*! ./myth-vs-fact/myth-vs-fact.module */
          "./src/app/activities/myth-vs-fact/myth-vs-fact.module.ts")).then(function (m) {
            return m.MythVsFactPageModule;
          });
        }
      }];

      var ActivitiesPageRoutingModule = function ActivitiesPageRoutingModule() {
        _classCallCheck(this, ActivitiesPageRoutingModule);
      };

      ActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivitiesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/activities/activities.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/activities/activities.module.ts ***!
      \*************************************************/

    /*! exports provided: ActivitiesPageModule */

    /***/
    function srcAppActivitiesActivitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function () {
        return ActivitiesPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./activities-routing.module */
      "./src/app/activities/activities-routing.module.ts");
      /* harmony import */


      var _activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./activities.page */
      "./src/app/activities/activities.page.ts");

      var ActivitiesPageModule = function ActivitiesPageModule() {
        _classCallCheck(this, ActivitiesPageModule);
      };

      ActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitiesPageRoutingModule"]],
        declarations: [_activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"]]
      })], ActivitiesPageModule);
      /***/
    },

    /***/
    "./src/app/activities/activities.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/activities/activities.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppActivitiesActivitiesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/activities/activities.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/activities/activities.page.ts ***!
      \***********************************************/

    /*! exports provided: ActivitiesPage */

    /***/
    function srcAppActivitiesActivitiesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesPage", function () {
        return ActivitiesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ActivitiesPage = /*#__PURE__*/function () {
        function ActivitiesPage() {
          _classCallCheck(this, ActivitiesPage);
        }

        _createClass(ActivitiesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ActivitiesPage;
      }();

      ActivitiesPage.ctorParameters = function () {
        return [];
      };

      ActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activities',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./activities.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/activities/activities.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./activities.page.scss */
        "./src/app/activities/activities.page.scss"))["default"]]
      })], ActivitiesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=activities-activities-module-es5.js.map