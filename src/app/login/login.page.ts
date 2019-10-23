import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  @ViewChild(AuthFormComponent, { static: false }) authForm: AuthFormComponent;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      this.authService.userId = userCredential.user.uid;
      await this.authForm.hideLoading();
      this.router.navigateByUrl('tabs/tab1');
    } catch (error) {
      await this.authForm.hideLoading();
      this.authForm.handleError(error);
    }
  }
}
