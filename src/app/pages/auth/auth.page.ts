import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, // Importa IonicModule
    AuthPageRoutingModule,
    HeaderComponent,
    LogoComponent,
    CustomInputComponent,
  ],

})
export class AuthPage implements OnInit {
  
  form  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor() { }
  ngOnInit(){


  }

  submit(){
    console.log(this.form.value);
  }
}