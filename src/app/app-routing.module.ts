import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FolderPage } from './folder/folder.page';
import { LoginPage } from './login/login.page';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    component: FolderPage
  },
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
