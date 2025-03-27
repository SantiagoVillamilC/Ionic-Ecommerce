import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { SignUpPageRoutingModule } from './sign-up-routing.module';
// ... otras importaciones

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true, // Asegúrate de que esto esté aquí
  imports: [CommonModule, FormsModule, IonicModule, SignUpPageRoutingModule] // Añade IonicModule aquí
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}