(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"backBtn\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{item.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/{{item.name}}.jpg\" alt=\"\"/>\n    <ion-card-header>\n      <ion-card-title>{{item.name}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content style=\"font-size: 13px; text-align: center; margin-top:-1.2em\">\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n      sed diam nonumy eirmod tempor invidunt ut labore.\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-radio-group>\n      <ion-list-header style=\"box-shadow: 0px 2px 5px silver;\">\n        <ion-label style=\"font-size: 12px\">Extras</ion-label>\n      </ion-list-header>\n      <br>\n      <ion-item *ngFor=\"let item of extras\" (ionSelect)=\"radioSelected(extras.indexOf(item))\">\n        <ion-label>\n          <h2>{{item.payload.doc.data().name}}</h2>\n          <h3>{{item.payload.doc.data().price.toFixed(2)}} €</h3>\n        </ion-label>\n        <ion-radio slot=\"end\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-row>\n    <ion-col offset-4> </ion-col>\n    <ion-col offset-4> </ion-col>\n    <ion-col>\n      <h5>Gesamtpreis:</h5>\n    </ion-col>\n    <ion-col>\n      <h5>{{totalprice.toFixed(2)}} €</h5>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-fab horizontal=\"center\" vertical=\"center\">\n        <ion-fab-button color=\"danger\" (click)=\"addToFavorite()\">\n          <ion-icon name=\"md-heart\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-col>\n    <ion-col offset-4>\n      <section>\n        <ion-button size=\"large\" (click)=\"addToCart()\">Zum Warenkorb hinzufügen</ion-button>\n      </section>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"] }])
            ],
            declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.radio-icon {\n  visibility: visible;\n}\n.radio-icon:before {\n  content: \"\";\n  font-family: Ionicons;\n  overflow: hidden;\n}\n.item-radio input:checked + .radio-content .radio-icon:before {\n  visibility: visible;\n  content: \"\";\n  font-family: Ionicons;\n}\n.radio-icon.ion-checkmark:before {\n  content: \"\";\n}\nh2 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 25px;\n  letter-spacing: 2px;\n}\nh5 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 18px;\n}\nion-title {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n}\nh3 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.5);\n}\nion-button {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  font-size: 15px;\n}\n.card {\n  width: 80%;\n  height: 80%;\n}\nion-content {\n  font-family: Cubano;\n}\nion-card {\n  font-family: Cubano;\n  letter-spacing: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCIvVXNlcnMvbHVjYS9BZ2F0MkdvL3NyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsbUJBQUE7QURDRjtBQ0NDO0VBQ0MsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURFRjtBQ0NBO0VBQ0ksV0FBQTtBREVKO0FDQ0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURFRjtBQ0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FERUY7QUNBQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURHRjtBQ0FBO0VBRUUsVUFBQTtFQUNBLFdBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucmFkaW8taWNvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5yYWRpby1pY29uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi746mXCI7XG4gIGZvbnQtZmFtaWx5OiBJb25pY29ucztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLml0ZW0tcmFkaW8gaW5wdXQ6Y2hlY2tlZCArIC5yYWRpby1jb250ZW50IC5yYWRpby1pY29uOmJlZm9yZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGNvbnRlbnQ6IFwi746nXCI7XG4gIGZvbnQtZmFtaWx5OiBJb25pY29ucztcbn1cblxuLnJhZGlvLWljb24uaW9uLWNoZWNrbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5oMiB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5oNSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbn1cblxuaW9uLWNhcmQge1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59IiwiXG4ucmFkaW8taWNvbntcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbiAucmFkaW8taWNvbjpiZWZvcmV7IFxuICBjb250ZW50OiBcIlxcZjNhNlwiO1xuICBmb250LWZhbWlseTogSW9uaWNvbnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pdGVtLXJhZGlvIGlucHV0OmNoZWNrZWQgKyAucmFkaW8tY29udGVudCAucmFkaW8taWNvbjpiZWZvcmV7IFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb250ZW50OiBcIlxcZjNhN1wiO1xuICBmb250LWZhbWlseTogSW9uaWNvbnM7XG59XG5cbi5yYWRpby1pY29uLmlvbi1jaGVja21hcms6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xufVxuXG5oMntcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuaDV7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5pb24tdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbn1cblxuaDN7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbmlvbi1idXR0b257XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZHtcblxuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG59XG5cbmlvbi1jYXJke1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/detail/detail.page.ts":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");






var DetailPage = /** @class */ (function () {
    function DetailPage(firebaseService, modalController, alertController, toastController, route, router, navCtr) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.route = route;
        this.router = router;
        this.navCtr = navCtr;
        this.item = new Item();
        this.backBtn = "Zurück";
        this.addedExtras = [];
        this.totalprice = 0;
        this.lastExtraPrice = 0;
        this.countFavs = 0;
    }
    DetailPage.prototype.ngOnInit = function () { };
    DetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.prodId = this.route.snapshot.paramMap.get('id');
        this.firebaseService.getProduct(this.prodId)
            .then(function (result) {
            _this.item = result.payload.data();
            _this.totalprice = _this.item.price;
        });
        this.firebaseService.getExtras()
            .then(function (result) {
            _this.extras = result;
        });
        this.loadFavs();
    };
    DetailPage.prototype.presentToast = function (message) {
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
    DetailPage.prototype.presentAlert = function (header, message, buttons) {
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
    DetailPage.prototype.toCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DetailPage.prototype.radioSelected = function (index) {
        this.totalprice -= this.lastExtraPrice;
        this.addedExtras = [];
        this.addedExtras.push(this.extras[index].payload.doc.data());
        this.lastExtraPrice = this.extras[index].payload.doc.data().price;
        this.totalprice += this.lastExtraPrice;
    };
    DetailPage.prototype.addToCart = function () {
        this.firebaseService.createCart(this.item, this.addedExtras, +this.totalprice.toFixed(2));
        this.presentToast("Ihre Bestellung wurde zum Warenkorb hinzugefügt.");
    };
    DetailPage.prototype.addToFavorite = function () {
        var _this = this;
        if (this.countFavs >= 3) {
            this.presentAlert('Limit erreicht', "Sie können nur 3 Favoriten hinzufügen.", ['OK']);
        }
        else {
            this.firebaseService.createFav(this.item, this.addedExtras, +this.totalprice.toFixed(2))
                .then(function (res) {
                _this.presentToast('Favorit hinzugefügt');
            }, function (err) {
                _this.presentToast('Fehler beim Hinzufügen des Favoriten');
            });
        }
    };
    DetailPage.prototype.loadFavs = function () {
        var _this = this;
        this.firebaseService.getFavs()
            .then(function (result) {
            result.forEach(function (element) {
                _this.countFavs++;
            });
        });
    };
    DetailPage.ctorParameters = function () { return [
        { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
    ]; };
    DetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html"),
            styles: [__webpack_require__(/*! ./detail.page.scss */ "./src/app/detail/detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], DetailPage);
    return DetailPage;
}());

var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
;
var Extra = /** @class */ (function () {
    function Extra() {
    }
    return Extra;
}());
;


/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es5.js.map