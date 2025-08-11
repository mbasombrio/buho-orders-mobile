import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { AuthStateService } from '../../services/auth-state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class DashboardPage implements OnInit {
  currentYear = new Date().getFullYear();
  environment = environment;

  // Páginas del menú sidebar
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'apps' },
    { title: 'Inbox', url: '/dashboard/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/dashboard/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/dashboard/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/dashboard/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/dashboard/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/dashboard/folder/spam', icon: 'warning' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  get displayClient(): string {
    if (environment.useMultiClient) {
      const client = localStorage.getItem('client') || 'Plan Nube';
      return client;
    } else {
      return environment.nameMultiClient || 'Plan Nube';
    }
  }

  constructor(
    private router: Router,
    private authStateService: AuthStateService
  ) { }

  ngOnInit() {

  }

  logout() {
    // Limpiar tokens usando el servicio
    this.authStateService.clearAuth();

    // Redirigir a login
    this.router.navigate(['/login']);
  }
}
