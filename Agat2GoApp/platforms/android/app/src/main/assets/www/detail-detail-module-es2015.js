(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"backBtn\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{item.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <img src=\"/assets/{{item.name}}.jpg\" alt=\"\" />\n        <ion-card-header>\n            <ion-card-title>{{item.name}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content style=\"font-size: 13px; text-align: center; margin-top:-1.2em\">\n            Genieße den leckeren Agáta {{item.name}}!\n        </ion-card-content>\n    </ion-card>\n    <ion-list>\n        <ion-radio-group>\n            <ion-list-header style=\"box-shadow: 0px 2px 5px silver;\">\n                <ion-label style=\"font-size: 12px\">Extras</ion-label>\n            </ion-list-header>\n            <br>\n            <ion-label>\n                <h4>Für die Pilotphase werden keine Extras angeboten. Wir bitten um euer Verständnis.</h4>\n            </ion-label>\n            <ion-item *ngFor=\"let item of extras\" (ionSelect)=\"radioSelected(extras.indexOf(item))\">\n                <ion-label>\n                    <h2>{{item.payload.doc.data().name}}</h2>\n                    <h3>{{item.payload.doc.data().price.toFixed(2)}} €</h3>\n                </ion-label>\n                <ion-radio slot=\"end\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n    </ion-list>\n\n    <ion-row>\n        <ion-col offset-4> </ion-col>\n        <ion-col offset-4> </ion-col>\n        <ion-col>\n            <h5>Gesamtpreis:</h5>\n        </ion-col>\n        <ion-col>\n            <h5>{{totalprice.toFixed(2)}} €</h5>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-fab horizontal=\"center\" vertical=\"center\">\n                <ion-fab-button color=\"danger\" (click)=\"addToFavorite()\">\n                    <ion-icon name=\"md-heart\"></ion-icon>\n                </ion-fab-button>\n            </ion-fab>\n        </ion-col>\n        <ion-col offset-4>\n            <section>\n                <ion-button size=\"large\" (click)=\"addToCart()\">Zum Warenkorb hinzufügen</ion-button>\n            </section>\n        </ion-col>\n    </ion-row>\n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "./src/app/detail/detail.page.ts");







let DetailPageModule = class DetailPageModule {
};
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



/***/ }),

/***/ "./src/app/detail/detail.page.scss":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.radio-icon {\n  visibility: visible;\n}\n.radio-icon:before {\n  content: \"\";\n  font-family: Ionicons;\n  overflow: hidden;\n}\n.item-radio input:checked + .radio-content .radio-icon:before {\n  visibility: visible;\n  content: \"\";\n  font-family: Ionicons;\n}\n.radio-icon.ion-checkmark:before {\n  content: \"\";\n}\nh2 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 14px;\n}\nion-card-title {\n  text-align: center;\n  font-size: 25px;\n  letter-spacing: 2px;\n}\nh5 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n  font-size: 18px;\n}\nh4 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.5);\n  margin: 1rem;\n}\nion-title {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.9);\n}\nh3 {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  color: rgba(0, 0, 0, 0.5);\n}\nion-button {\n  font-weight: 100;\n  letter-spacing: 1.5px;\n  font-family: Cubano;\n  font-size: 15px;\n}\n.card {\n  width: 80%;\n  height: 80%;\n}\nion-content {\n  font-family: Cubano;\n}\nion-card {\n  font-family: Cubano;\n  letter-spacing: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCIvVXNlcnMvbHVjYS9BZ2F0MkdvL3NyYy9hcHAvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksbUJBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0NBO0VBQ0ksV0FBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FERUo7QUNDQTtFQUNJLG1CQUFBO0FERUo7QUNDQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QURFSiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnJhZGlvLWljb24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucmFkaW8taWNvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+OplwiO1xuICBmb250LWZhbWlseTogSW9uaWNvbnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pdGVtLXJhZGlvIGlucHV0OmNoZWNrZWQgKyAucmFkaW8tY29udGVudCAucmFkaW8taWNvbjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBjb250ZW50OiBcIu+Op1wiO1xuICBmb250LWZhbWlseTogSW9uaWNvbnM7XG59XG5cbi5yYWRpby1pY29uLmlvbi1jaGVja21hcms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDQge1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICBmb250LWZhbWlseTogQ3ViYW5vO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBDdWJhbm87XG59XG5cbmlvbi1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufSIsIi5yYWRpby1pY29uIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucmFkaW8taWNvbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmM2E2XCI7XG4gICAgZm9udC1mYW1pbHk6IElvbmljb25zO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pdGVtLXJhZGlvIGlucHV0OmNoZWNrZWQrLnJhZGlvLWNvbnRlbnQgLnJhZGlvLWljb246YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGNvbnRlbnQ6IFwiXFxmM2E3XCI7XG4gICAgZm9udC1mYW1pbHk6IElvbmljb25zO1xufVxuXG4ucmFkaW8taWNvbi5pb24tY2hlY2ttYXJrOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuaDIge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbmg1IHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oNCB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgZm9udC1mYW1pbHk6IEN1YmFubztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5cbmgzIHtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBDdWJhbm87XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2FyZCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBDdWJhbm87XG59XG5cbmlvbi1jYXJkIHtcbiAgICBmb250LWZhbWlseTogQ3ViYW5vO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/cart-modal/cart-modal.page.ts");






let DetailPage = class DetailPage {
    constructor(firebaseService, modalController, alertController, toastController, route, router, navCtr) {
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
    ngOnInit() { }
    ionViewWillEnter() {
        this.prodId = this.route.snapshot.paramMap.get('id');
        this.firebaseService.getProduct(this.prodId)
            .then(result => {
            this.item = result.payload.data();
            this.totalprice = this.item.price;
        });
        // this.firebaseService.getExtras()
        // .then(result => {
        //   this.extras = result;
        // })
        this.loadFavs();
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
    presentAlert(header, message, buttons) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: header,
                message: message,
                buttons: buttons
            });
            yield alert.present();
        });
    }
    toCart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"]
            });
            return yield modal.present();
        });
    }
    radioSelected(index) {
        this.totalprice -= this.lastExtraPrice;
        this.addedExtras = [];
        this.addedExtras.push(this.extras[index].payload.doc.data());
        this.lastExtraPrice = this.extras[index].payload.doc.data().price;
        this.totalprice += this.lastExtraPrice;
    }
    addToCart() {
        this.firebaseService.createCart(this.item, this.addedExtras, +this.totalprice.toFixed(2));
        this.presentToast("Ihre Bestellung wurde zum Warenkorb hinzugefügt.");
    }
    addToFavorite() {
        if (this.countFavs >= 3) {
            this.presentAlert('Limit erreicht', "Sie können nur 3 Favoriten hinzufügen.", ['OK']);
        }
        else {
            this.firebaseService.createFav(this.item, this.addedExtras, +this.totalprice.toFixed(2))
                .then(res => {
                this.presentToast('Favorit hinzugefügt');
            }, err => {
                this.presentToast('Fehler beim Hinzufügen des Favoriten');
            });
        }
    }
    loadFavs() {
        this.firebaseService.getFavs()
            .then(result => {
            result.forEach(element => {
                this.countFavs++;
            });
        });
    }
};
DetailPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
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

class Item {
    constructor() { }
}
;
class Extra {
    constructor() { }
}
;


/***/ })

}]);
//# sourceMappingURL=detail-detail-module-es2015.js.map