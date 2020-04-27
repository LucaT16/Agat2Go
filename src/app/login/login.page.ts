import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers :[NativeStorage]
})
export class LoginPage implements OnInit {
  @ViewChild(AuthFormComponent, { static: false }) authForm: AuthFormComponent;
  constructor(private authService: AuthService, private router: Router, private nativeStorage: NativeStorage, public firebaseService: FirebaseService) { }

  ngOnInit() { 
    this.nativeStorage.getItem('user')
      .then(
        data => { 
          //console.log(data); 
          this.firebaseService.userId = data.userId
          this.router.navigateByUrl('tabs/tab1');
        },
        error => console.error("UserId nicht gespeichert: "+ error)
      );
  }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      this.nativeStorage.setItem('user', { userId: userCredential.user.uid })
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      this.firebaseService.userId = userCredential.user.uid;
      await this.authForm.hideLoading();
      this.router.navigateByUrl('tabs/tab1');
    } catch (error) {
      await this.authForm.hideLoading();
      this.authForm.handleError(error);
    }
  }
}
