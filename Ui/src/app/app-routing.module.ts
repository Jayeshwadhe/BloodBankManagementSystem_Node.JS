import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/components/full-layout/full-layout.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Auth',
    pathMatch: 'full',
  },
  { path: 'Auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  {
    path: 'Admin', component: FullLayoutComponent, data: { title: 'full Views' },
    children: [
      { path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    ],
  },

  {
    path: 'User', component: FullLayoutComponent, data: { title: 'full Views' },
    children: [
      { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],

  exports: [RouterModule]
})
export class AppRoutingModule { }
