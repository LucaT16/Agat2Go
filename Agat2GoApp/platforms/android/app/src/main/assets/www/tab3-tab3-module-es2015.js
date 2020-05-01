(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n        <img src=\"./assets/logo_a_trans.png\" class=\"center\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>AGÁta Café in Mannheim - </h1>\n  <h1>wohlfühlen und Geniessen</h1>\n  <img src=\"/assets/lighter.jpeg\" alt=\"\" />\n  <br>\n  <h2>KAFFEE IST GEMEINSCHAFT, GENUSS UND LEIDENSCHAFT.</h2>\n  <p> Deshalb rösten wir unseren Specialty Coffee nicht nur vor Ort,\n    sondern bereiten mit unseren Kaffees auch Kaffeespezialitäten direkt\n    vor Ort in unserem Café in Mannheim zu. Egal ob Cappuccino, Espresso,\n    Americano, Flat White oder Milchkaffee, in unserem Café in Mannheim\n    ist für jeden Kaffeetrinker*in das Richtige dabei. </p>\n  <img src=\"/assets/lighter-3.jpeg\" alt=\"\" />\n  <h2>GASTFREUNDSCHAFT UND HERZLICHKEIT</h2>\n  <p>Beides schreiben wir groß bei uns im Café in der Coblitzallee. Hier fühlt\n    man sich wohl - egal ob für einen leckeren Cappuccino mit Freunden*innen,\n    den Americano zum Arbeiten und Lernen oder eine gemütliche Tasse\n    Milchkaffee als Belohnung. Setze dich auch gerne zu anderen Leuten an den Tisch\n    oder frag' direkt bei uns nach, woher unser Kaffee kommt und was wir sonst so machen.</p>\n  <img src=\"/assets/lighter-2.jpeg\" alt=\"\" />\n  <h2>DIE BARISTA IM CAFÉ IN MANNHEIM</h2>\n  <p>Damit jeder Kaffee erstklassig schmeckt, sind unsere Barista absolute Profis in der\n    Zubereitung von euren Kaffees. Sie freuen sich, euch im Café zu begrüßen und euch\n    mit einem besonderen Kaffee-Erlebnis zu begeistern. </p>\n  <p style=\"font-size:15px; font-family:Cubano;\">Wir freuen uns auf dich, in unserem Café in Mannheim, Coblitzallee 8\n    (direkt gegenüber der DHBW). </p>\n  <br>\n  <h2>Öffnungszeiten:</h2>\n  <p>Montag - Freitag, 7:30 - 17 Uhr</p>\n  <p>Samstag, 10 - 17 Uhr</p>\n  <p>Sonntag, Ruhetag</p>\n  <br>\n  <h2>Kontakt</h2>\n  <p>Telefon: 0621 / 72 48 57 21 </p>\n  <p>E-Mail: info@agata-kaffee.de</p>\n  <br>\n  <p style=\"font-size:13px\">© 2019, AGÁTA Rösterei & Café </p>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-family: Cubano;\n  font-size: 23px !important;\n  line-height: 1.5em !important;\n  letter-spacing: 1px !important;\n  color: #3d4246 !important;\n  text-align: center;\n}\n\nh1 {\n  font-family: Cubano;\n  font-size: 27px !important;\n  line-height: 1.5em !important;\n  letter-spacing: 1px !important;\n  color: #3d4246 !important;\n  text-align: center;\n}\n\np {\n  font-size: 15px;\n  font-family: \"Work Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  color: #3d4246;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  height: 2em;\n  width: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhL0FnYXQyR28vc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJ7XG4gICAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgICBmb250LXNpemU6IDIzcHghaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbSFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzZDQyNDYhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gICAgZm9udC1zaXplOiAyN3B4IWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW0haW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHghaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjM2Q0MjQ2IWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMzZDQyNDY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgfSIsImgyIHtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjM2Q0MjQ2ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzZDQyNDYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzNkNDI0NjtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map