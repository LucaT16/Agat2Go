import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertController, ModalController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  public user: UserProfile;
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private nativeStorage: NativeStorage
  ) {}

  ngOnInit() {
    this.profileService.getUserProfile().then(profile$ => {
      profile$.subscribe(userProfile => {
        this.user = userProfile;
      });
    });
  }

  async logOut(): Promise<void> {
    await this.authService.logout();
    this.nativeStorage.clear()
    this.closeModal()
    this.router.navigateByUrl('login');
  }

  async updateName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      subHeader: 'Dein Name',
      inputs: [
        {
          type: 'text',
          name: 'name',
          placeholder: 'Dein Name',
          value: this.user.name
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateName(data.name);
          }
        }
      ]
    });
    await alert.present();
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Deine neue Email-Addresse' },
        { name: 'password', placeholder: 'Dein Passwort', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'Neues Passwort', type: 'password' },
        { name: 'oldPassword', placeholder: 'Altes passwort', type: 'password' }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    await alert.present();
  }

  async closeModal(){
    await this.modalController.dismiss();
  }
}
