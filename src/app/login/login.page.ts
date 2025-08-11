import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  showPassword = false;
  currentYear = new Date().getFullYear();
  client: string = '';
  useMultiClient = environment.useMultiClient;
  environment = environment;

  get displayClient(): string {
    if (this.useMultiClient) {
      return this.client || 'Plan Nube';
    } else {
      return environment.nameMultiClient || 'Plan Nube';
    }
  }

  @ViewChild("username", { static: false }) inputUserName!: ElementRef;
  @ViewChild("password", { static: false }) inputPass!: ElementRef;
  @ViewChild("cliente", { static: false }) inputClient!: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Si ya está autenticado, redirigir a la página principal
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/folder/inbox']);
      return;
    }

    this.initializeForm();
  }

  initializeForm() {
    if (this.checkMulticlient()) {
      let client = localStorage.getItem('client') || "";
      this.client = client;
      this.loginForm = new FormGroup({
        client: new FormControl({ value: client, disabled: this.loading }, [
          Validators.required,
        ]),
        user: new FormControl({ value: "", disabled: this.loading }, [
          Validators.required,
        ]),
        pass: new FormControl({ value: "", disabled: this.loading }, [
          Validators.required,
        ]),
      });
    } else {
      // Si no es multicliente, usar el nameMultiClient por defecto
      localStorage.setItem('client', environment.nameMultiClient);
      this.loginForm = new FormGroup({
        user: new FormControl({ value: "", disabled: this.loading }, [
          Validators.required,
        ]),
        pass: new FormControl({ value: "", disabled: this.loading }, [
          Validators.required,
        ]),
      });
    }
  }

  checkMulticlient(): boolean {
    return this.useMultiClient;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
    if (loading) {
      this.loginForm.controls['user'].disable();
      this.loginForm.controls['pass'].disable();
      if (this.checkMulticlient()) this.loginForm.controls['client'].disable();
    } else {
      this.loginForm.controls['user'].enable();
      this.loginForm.controls['pass'].enable();
      if (this.checkMulticlient()) this.loginForm.controls['client'].enable();
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onLogin() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.setLoading(true);

    const username = this.loginForm.controls['user'].value;
    const password = this.loginForm.controls['pass'].value;
    let client: string;

    if (this.checkMulticlient()) {
      client = this.loginForm.controls['client'].value;
      localStorage.setItem('client', client.toLowerCase());
    } else {
      // Si no es multicliente, usar el nameMultiClient del environment
      client = environment.nameMultiClient;
      localStorage.setItem('client', client);
    }

    // Usar el método de login observable para compatibilidad con tu sistema
    this.authService.login(username, password, client).subscribe({
      next: (response) => {
        // Procesar respuesta del login
        try {
          this.authService.user = JSON.parse(response.body);

          // Guardar token y expiración
          const token = response.headers.get('jwt-token');
          const tokenExpiration = response.headers.get('token-expiration');

          if (token && tokenExpiration) {
            const timeExpiration = Number(tokenExpiration) + Date.now();
            this.authService.saveToken(token, timeExpiration.toString());
          }

          // Guardar identidad del usuario
          localStorage.setItem('identity', response.body);

          this.setLoading(false);
          this.router.navigate(['/folder/inbox']);
        } catch (error) {
          this.setLoading(false);
          this.showError('Error al procesar la respuesta del servidor');
        }
      },
      error: (error) => {
        this.setLoading(false);
        this.showError('Usuario o contraseña incorrecta!');
      }
    });
  }

  private showError(message: string) {
    // Aquí puedes usar un toast de Ionic o un alert
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = message;
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    alert.present();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
