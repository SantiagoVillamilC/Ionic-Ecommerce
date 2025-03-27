import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
// ... otras importaciones

// ... otras importaciones

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Añade IonicModule aquí
    ForgotPasswordPageRoutingModule
  ]
})
export class ForgotPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}