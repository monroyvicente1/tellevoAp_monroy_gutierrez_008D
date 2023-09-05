import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from'@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login={
    Nombre:'',
    Contraseña:'',
  }
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
              private MenuController:MenuController,
              private alertController: AlertController) {
    this.formularioLogin= this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
   }


  ngOnInit() {


    
    }
    async mostrarMensajeInicioSesionExitoso() {
      const alert = await this.alertController.create({
        header: 'Inicio de Sesión Exitoso',
        message: '¡Bienvenido!',
        buttons: ['OK']
      });

      await alert.present();
    }

    

  }
