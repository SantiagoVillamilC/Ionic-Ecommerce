import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';// Importa FormsModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { AuthPageRoutingModule } from '../auth-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { CustomInputComponent } from 'src/app/shared/components/custom-input/custom-input.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true, // Asegúrate de que esto esté aquí
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, // Importa IonicModule
    AuthPageRoutingModule,
  ],
})

export class SignUpPage implements OnInit {
  
  form  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  firebaseSvc = inject(FirebaseService);
  utilsSVC = inject(UtilsService)

  ngOnInit(){


  }

  async submit(){
    if(this.form.valid){

      const loading = await this.utilsSVC.loading();
      await loading.present();

      this.firebaseSvc.signUp(this.form.value as User).then(async res => {

        await this.firebaseSvc.updateUser(this.form.value.name)

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

  async setUserInfo(uid : string){
    if(this.form.valid){

      const loading = await this.utilsSVC.loading();
      await loading.present();

      let path = `users/${uid}`
      delete this.form.value.password;

      this.firebaseSvc.setDocument(path, this.form.value).then(async res => {

        await this.firebaseSvc.updateUser(this.form.value.name)

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