import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FolderPage } from './folder/folder.page';
import { authGuard } from './guards/auth.guard';
import { noAuthGuard } from './guards/no-auth.guard';
import { LoginPage } from './login/login.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage,
    canActivate: [noAuthGuard]
  },
  {
    path: 'folder/:id',
    component: FolderPage,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
