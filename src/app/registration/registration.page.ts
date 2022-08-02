import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { AuthenticateService } from '../services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: "Este campo es obligatorio" },

    ],

    apellido: [
      { type: "required", message: "Este campo es obligatorio" },

    ],

    email: [
      { type: "required", message: "Este campo es obligatorio" },
      { type: "pattern", message: "El email no es valido" }
    ],

    password:[
      {type:"required", message:"Este campo es obligatorio"},
      {type:"minlength", message:"Contraseña invalida"}
    ]
  };
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage:Storage,
    private authService: AuthenticateService
  ) {
    this.registrationForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required,

        ])
      ),

      email: new FormControl(
        "",
        Validators.compose([  
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
   }
  ngOnInit() {
  }

  register(registrationFormValues){
  this.authService.registerUser(registrationFormValues).then(()=>{
this.navCtrl.navigateBack("/login")

});

  }
  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
}  
