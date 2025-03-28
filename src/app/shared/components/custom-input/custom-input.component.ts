import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthPageRoutingModule } from 'src/app/pages/auth/auth-routing.module';
import { HeaderComponent } from '../header/header.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, 
    AuthPageRoutingModule,
    HeaderComponent,
    LogoComponent,
    CustomInputComponent]
})

export class CustomInputComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: FormControl;
  @Input() autocomplete!: FormControl;
  @Input() icon!: FormControl;

  isPassword!: boolean;
  hide: boolean;

  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword = true;
  }

  showOrHidePassword(){
    this.hide = !this.hide;

    if (this.hide) this.type = 'password';
    else this.type = 'text';
  }  

}
