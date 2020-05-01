(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img src=\"./assets/logo_a_trans.png\" class=\"center\">\n    </ion-title>\n    <ion-buttons *ngIf=\"!agataClosed\" (click)=\"toCart()\" slot=\"primary\">\n      <button ion-button icon-only id=\"notification-button\">\n        <ion-badge id=\"notifications-badge\" color=\"danger\" *ngIf=\"badgeCount > 0\">{{badgeCount}}</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"cart\">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons *ngIf=\"agataClosed\" (click)=\"closedNotification()\" slot=\"primary\">\n      <button ion-button icon-only disabled id=\"notification-button\">\n        <ion-badge id=\"notifications-badge\" color=\"danger\" *ngIf=\"badgeCount > 0\">{{badgeCount}}</ion-badge>\n        <ion-icon slot=\"icon-only\" name=\"cart\">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons (click)=\"toProfile()\" slot=\"start\">\n      <ion-icon slot=\"icon-only\" name=\"contact\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset=\"true\">\n    <ion-list-header style=\"box-shadow: 0px 2px 5px silver;\">\n      <ion-label style=\"font-size:12px\">Favoriten</ion-label>\n    </ion-list-header>\n    <br>\n    <ion-item-sliding *ngFor=\"let item of favs\">\n      <ion-item>\n        <ion-icon slot=\"end\" color=\"medium\" name=\"add-circle-outline\" (click)=\"addFavToCart(favs.indexOf(item))\">\n        </ion-icon>\n        <ion-label>\n          <span>{{item.payload.doc.data().name}}<span *ngIf=\"item.payload.doc.data().extra[0]?.name\">, </span>\n            <b *ngIf=\"item.payload.doc.data().extra[0]?.name\">{{item.payload.doc.data().extra[0].name}}</b></span>\n          <h4>{{item.payload.doc.data().totalprice.toFixed(2)}} €</h4>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"removeFav(item.payload.doc.id)\" icon-only>\n          <ion-icon style=\"width: 2em; height: 2em;\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item *ngIf=\"favs?.length == 0\">\n      <ion-label>\n        <h4>Sie haben noch keine Favoriten</h4>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"favs?.length != 0\" class=\"space\">\n    </ion-item>\n  </ion-list>\n\n  <ion-list inset=\"true\">\n    <ion-list-header style=\"box-shadow: 0px 2px 5px silver;\">\n      <ion-label style=\"font-size:12px\">Produkte</ion-label>\n    </ion-list-header>\n    <br>\n    <ion-item *ngFor=\"let item of items\" [routerLink]=\"'/detail/' + item.payload.doc.id\">\n      <ion-avatar style=\"size: 120%\" slot=\"start\">\n        <img src=\"./assets/{{item.payload.doc.data().name}}.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <br>\n        <h2>{{item.payload.doc.data().name}}</h2>\n        <h4>{{item.payload.doc.data().price.toFixed(2)}} €</h4>\n        <br>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 25vh;\n  overflow: hidden;\n}\n\nion-avatar {\n  width: 60px;\n  height: 60px;\n}\n\nspan {\n  font-size: 17px;\n}\n\nspan b {\n  font-size: 60%;\n  font-weight: inherit;\n}\n\nbutton {\n  background-color: transparent;\n}\n\nbutton ion-badge {\n  position: absolute;\n  top: -0.1rem;\n  right: -0.2rem;\n  opacity: 1;\n  z-index: 1;\n}\n\nbutton ion-badge ~ ion-icon {\n  margin-right: 0.4rem;\n  z-index: -1;\n}\n\nion-buttons {\n  color: clear;\n  background-color: clear;\n}\n\nion-content {\n  font-family: Cubano;\n}\n\nb, ion-title {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n}\n\nh2, span {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n}\n\nh4 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.5);\n}\n\nion-item-divider {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.space {\n  max-height: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWNhL0FnYXQyR28vc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUFPLGVBQUE7QUNDUDs7QURBQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQ0dGOztBRERBO0VBRUUsNkJBQUE7QUNHRjs7QURGQztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZFO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDSU47O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDI1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxufVxuaW9uLWF2YXRhciB7IFxuICB3aWR0aDogNjBweDsgIFxuICBoZWlnaHQ6IDYwcHg7XG59XG5cbnNwYW4geyBmb250LXNpemU6IDE3cHg7fVxuc3BhbiBiIHsgXG4gIGZvbnQtc2l6ZTogNjAlO1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgXG59XG5idXR0b24ge1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRpb24tYmFkZ2Uge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IC0wLjFyZW07XG5cdFx0cmlnaHQ6IC0wLjJyZW07XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiAxO1xuXG5cdFx0JiB+IGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC40cmVtO1xuICAgICAgei1pbmRleDogLTE7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6IGNsZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjbGVhcjtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG59XG5cbmIsIGlvbi10aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG5oMiAsc3BhbntcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmg0e1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cblxuaW9uLWl0ZW0tZGl2aWRlcntcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4uc3BhY2V7XG4gIG1heC1oZWlnaHQ6IDEwcHg7XG59IiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAyNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tYXZhdGFyIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuc3BhbiBiIHtcbiAgZm9udC1zaXplOiA2MCU7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmJ1dHRvbiBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMXJlbTtcbiAgcmlnaHQ6IC0wLjJyZW07XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG5idXR0b24gaW9uLWJhZGdlIH4gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcbiAgei1pbmRleDogLTE7XG59XG5cbmlvbi1idXR0b25zIHtcbiAgY29sb3I6IGNsZWFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjbGVhcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xufVxuXG5iLCBpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbmgyLCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmg0IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4uc3BhY2Uge1xuICBtYXgtaGVpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var Tab1Page = /** @class */ (function () {
    function Tab1Page(firebaseService, modalController, authService, toastController, alertController, router) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.authService = authService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.router = router;
        this.badgeCount = 0;
        this.agataClosed = false;
        this.notstop = false;
    }
    Tab1Page.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.firebaseService.getProducts()
                            .then(function (result) {
                            _this.items = result;
                        });
                        if (this.authService.afAuth.auth.currentUser == null) {
                            //this.router.navigate(["/login"])
                        }
                        else {
                            this.uid = this.authService.afAuth.auth.currentUser.uid;
                        }
                        //this.getTime()
                        this.loadFavs();
                        return [4 /*yield*/, this.onEnter()];
                    case 1:
                        _a.sent();
                        this.subscription = this.router.events.subscribe(function (event) {
                            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"] && event.url === '/tabs/tab1') {
                                _this.onEnter();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab1Page.prototype.onEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.ionViewWillEnter();
                return [2 /*return*/];
            });
        });
    };
    Tab1Page.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    Tab1Page.prototype.ionViewWillEnter = function () {
        this.loadFavs();
        this.loadCart();
        this.getNotstop();
    };
    Tab1Page.prototype.loadFavs = function () {
        var _this = this;
        this.firebaseService.getFavs()
            .then(function (result) {
            _this.favs = result;
        });
    };
    Tab1Page.prototype.removeFav = function (id) {
        var _this = this;
        this.firebaseService.deleteFav(id)
            .then(function (result) {
            _this.loadFavs();
        });
    };
    Tab1Page.prototype.addFavToCart = function (index) {
        var coffee = this.favs[index].payload.doc.data();
        this.firebaseService.createCart(coffee, coffee.extra, +coffee.totalprice.toFixed(2));
        this.presentToast('Favorit zum Warenkorb hinzugefügt!');
        this.badgeCount++;
    };
    Tab1Page.prototype.loadCart = function () {
        var _this = this;
        this.firebaseService.getCart()
            .then(function (result) {
            if (_this.badgeCount != result.length) {
                _this.badgeCount = result.length;
            }
        });
    };
    Tab1Page.prototype.getTime = function () {
        var d = new Date().toLocaleString("en-EN", { timeZone: "Europe/Berlin" });
        var date = new Date(d);
        var timeString = date.toTimeString();
        if (timeString == "17:30:00 GMT+0200") {
            this.agataClosed = true;
        }
    };
    Tab1Page.prototype.getNotstop = function () {
        var _this = this;
        this.firebaseService.getNotstop()
            .then(function (result) {
            var item = result.payload.data();
            _this.notstop = item.notstop;
            console.log(_this.notstop);
        });
    };
    Tab1Page.prototype.closedNotification = function () {
        this.presentAlert("Agata hat geschlossen!", "Wir haben leider schon geschlossen. Schau doch einfach nochmal morgen vorbei!", ['OK']);
    };
    Tab1Page.prototype.closedNotstop = function () {
        this.presentAlert("Agat2Go hat geschlossen!", "Die Pilotphase ist (vorerst) beendet. Halte dich an das Agat2Go Team für weitere Infos! :)", ['OK']);
    };
    Tab1Page.prototype.presentToast = function (message) {
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
    Tab1Page.prototype.presentAlert = function (header, message, buttons) {
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
    Tab1Page.prototype.toCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getNotstop();
                        if (!this.notstop) return [3 /*break*/, 1];
                        this.closedNotstop();
                        return [2 /*return*/];
                    case 1: return [4 /*yield*/, this.modalController.create({
                            component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_4__["CartModalPage"]
                        })];
                    case 2:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function () {
                            _this.loadCart();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.prototype.toProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Tab1Page.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map