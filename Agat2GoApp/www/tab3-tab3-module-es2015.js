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

module.exports = "h2 {\n  font-family: Cubano;\n  font-size: 23px !important;\n  line-height: 1.5em !important;\n  letter-spacing: 1px !important;\n  color: #3d4246 !important;\n  text-align: center;\n}\n\nh1 {\n  font-family: Cubano;\n  font-size: 27px !important;\n  line-height: 1.5em !important;\n  letter-spacing: 1px !important;\n  color: #3d4246 !important;\n  text-align: center;\n}\n\np {\n  font-size: 15px;\n  font-family: \"Work Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  color: #3d4246;\n  line-height: 1.6;\n  text-align: center;\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  height: 2em;\n  width: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhL0RvY3VtZW50cy9VbmkvQWdhdDJHby9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICAgIGZvbnQtc2l6ZTogMjNweCFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4IWltcG9ydGFudDtcbiAgICBjb2xvcjogIzNkNDI0NiFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDF7XG4gICAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgICBmb250LXNpemU6IDI3cHghaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbSFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMzZDQyNDYhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzNkNDI0NjtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4uY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICB9IiwiaDIge1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMzZDQyNDYgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGZvbnQtc2l6ZTogMjdweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41ZW0gIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNkNDI0NiAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjM2Q0MjQ2O1xuICBsaW5lLWhlaWdodDogMS42O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbn0iXX0= */"

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