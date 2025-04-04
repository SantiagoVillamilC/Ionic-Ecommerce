import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from './auth-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

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

  firebaseSvc = inject(FirebaseService);
  utilsSVC = inject(UtilsService)

  ngOnInit(){


  }

  async submit(){
    if(this.form.valid){

      const loading = await this.utilsSVC.loading();
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        console.log(res);
      }).catch(error => {
        console.log(error);

        this.utilsSVC.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
  }
}