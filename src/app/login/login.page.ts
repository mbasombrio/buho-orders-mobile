import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  onLogin() {
    // Aquí puedes agregar lógica real de autenticación
    if (this.username && this.password) {
      // Simulación de login exitoso
      this.router.navigate(['/folder/inbox']);
    } else {
      // Puedes mostrar un mensaje de error si lo deseas
      alert('Por favor ingresa usuario y contraseña');
    }
  }
}
