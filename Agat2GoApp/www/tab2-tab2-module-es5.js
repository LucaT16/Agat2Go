(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"./assets/logo_a_trans.png\" class=\"center\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"welcome-card\">\n    <ion-card-header>\n      <ion-card-title>Deine Bonuskarte</ion-card-title>\n      <ion-card-content style=\"text-align: center; margin-bottom: -10%;\">10 Stempel = 1 Getränk umsonst  <span [innerHTML]=\"emo\"></span>\t</ion-card-content>\n    </ion-card-header>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=1\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<1\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=2\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<2\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=3\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<3\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=4\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<4\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=5\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<5\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=6\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<6\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=7\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<7\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=8\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<8\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n        <div *ngIf=\"bonuscounter>=9\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<9\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div *ngIf=\"bonuscounter>=10\"><img src=\"/assets/logo_trans.PNG\" alt=\"\" /></div>\n        <div *ngIf=\"bonuscounter<10\"><img src=\"/assets/white.jpg\" alt=\"\" /></div>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button *ngIf=\"bonuscounter>=10\" size=\"block\" (click)=\"createCoupon()\">Einlösen</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-col > div {\n  background-color: #f7f7f7;\n  border: solid 1px #ddd;\n  padding: 10px;\n}\n\n.nogrid {\n  background-color: #ffffff;\n  border: solid 6px #ddd;\n}\n\nion-card-title {\n  text-align: center;\n  font-family: Cubano;\n}\n\nb {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.center {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  height: 2em;\n  width: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhL0RvY3VtZW50cy9VbmkvQWdhdDJHby9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0c7RUFDQyx5QkFBQTtFQUNBLDRCQUFBO0FDQUo7O0FERUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREdFO0VBRUUseUJBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICBpb24tY29sID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XG4gICAgcGFkZGluZzogMTBweDtcblxuICB9XG5cbiAgLm5vZ3JpZFxuICB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXI6IHNvbGlkIDZweCAjZGRkOyBcbiAgfVxuXG4gIGlvbi1jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICB9XG5cbiAgYiB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgfSIsIjpyb290IHtcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbn1cblxuaW9uLWNvbCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlcjogc29saWQgMXB4ICNkZGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ub2dyaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IHNvbGlkIDZweCAjZGRkO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(firebaseService, toastController, alertController, loadingCtrl) {
        this.firebaseService = firebaseService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.bonuscounter = 0;
        this.hatGutschein = false;
        this.emo = "&#x1F60A";
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.getStatus();
    };
    Tab2Page.prototype.ionViewWillEnter = function () {
        this.getStatus();
    };
    Tab2Page.prototype.getStatus = function () {
        this.bonuscounter = this.firebaseService.user.bonuscard;
        this.hatGutschein = this.firebaseService.getGutscheinStatus();
    };
    Tab2Page.prototype.createCoupon = function () {
        var _this = this;
        if (!this.hatGutschein) {
            this.showLoading();
            this.firebaseService.resetBonuscardStatus();
            setTimeout(function () {
                _this.getStatus();
                _this.hideLoading();
                _this.firebaseService.createCoupon();
                _this.presentToast('Gutschein zum Warenkorb hinzugefügt!');
            }, 1000);
        }
        else {
            this.presentAlert("Warte einen Moment!", "Du hast bereits einen Gutschein. Bitte verwende erst diesen bevor du einen neuen einlöst.", ["OK"]);
        }
    };
    Tab2Page.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getStatus();
            event.target.complete();
        }, 1000);
    };
    Tab2Page.prototype.showLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.hideLoading = function () {
        return this.loading.dismiss();
    };
    Tab2Page.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.presentAlert = function (header, message, buttons) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: buttons
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map