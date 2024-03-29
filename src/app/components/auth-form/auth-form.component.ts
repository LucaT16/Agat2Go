import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserCredential } from 'src/app/models/user';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  public loading: HTMLIonLoadingElement;
  public authForm: FormGroup;
  @Input() actionButtonText: string;
  @Input() isPasswordResetPage = false;
  @Input() dontShowName = false;
  @Output() formSubmitted = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
    if (this.dontShowName) {
      this.authForm = this.formBuilder.group({
        name: ['', Validators.minLength(0)],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.minLength(6)]
      });
    } else {
      this.authForm = this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.minLength(6)]
      });
    }
   }

  submitCredentials(authForm: FormGroup): void {
    if (!authForm.valid) {
      //console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      this.showLoading();
      var name: string;
      if (!this.dontShowName) {
        name = authForm.value.name
      } else {
        name = ""
      }
      const credentials: UserCredential = {
        email: authForm.value.email,
        password: authForm.value.password,
        name: name
      };
      this.formSubmitted.emit(credentials);
    }
  }

  async showLoading(): Promise<void> {
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();
  }

  hideLoading(): Promise<boolean> {
    return this.loading.dismiss();
  }

  async handleError(error): Promise<void> {
    const alert = await this.alertCtrl.create({
      message: error.message,
      buttons: [{ text: 'Ok', role: 'cancel' }]
    });
    await alert.present();
  }
}
