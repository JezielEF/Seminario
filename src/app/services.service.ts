import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage:Storage) { 
    this.storage.create();
  }

  loginUser(credentials){

    return new Promise((accept, reject)=>{
      if(
        credentials.email == "escobarjeziel@gmail.com" && credentials.password == "123456789"
      ){
        accept("Inicio de sesión exitoso");
      }else{
        reject("Inicio de sesión fallido")
      }
      this.storage.get("user").then((data) => {
        if (
          credentials.email == data.email && credentials.password == atob(data.password)
        ) {
          accept("Inicio de sesión exitoso");
        } else {
          reject("Inicio de sesión fallido");
        }

      });

    });
  }
  registerUser(userData){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData)

  }

}
