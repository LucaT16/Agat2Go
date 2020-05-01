import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', redirectTo: 'tabs', pathMatch: 'full' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup',loadChildren: './signup/signup.module#SignupPageModule'},
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule'},
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'cart-modal', loadChildren: './cart-modal/cart-modal.module#CartModalPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
