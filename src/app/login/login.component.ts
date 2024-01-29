import { Component } from '@angular/core';
import { InicioSesionService } from '../inicio-sesion.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    signUpButton = document.getElementById('signUp');
    signInButton = document.getElementById('signIn');
    emailRegistro:string=""; 
    passRegistro:string="";
    emailInicio:string="";
    passInicio:string = "";
    constructor(private sesion: InicioSesionService) { };

    iniciaSesionGoogle() {
        this.sesion.iniciaSesionGoogle();
    }
    inicioCorreo() {
       this.sesion.inicioCorreo(this.emailInicio,this.passInicio);
    }
    registroCorreo() {
        this.sesion.registroCorreo(this.emailRegistro,this.passRegistro);
    }
    iniciaSesionGitHub() {
        this.sesion.iniciaSesionGitHub();
    }
    iniciaSesionFacebook() {
        this.sesion.iniciaSesionFacebook();
    }
    cambioClase(clase: boolean) {
        var container = document.getElementById('container');
        if (clase && container != null) {
            container.classList.add("right-panel-active");
        } else if (container != null) {
            container.classList.remove("right-panel-active");
        }
    }
}
