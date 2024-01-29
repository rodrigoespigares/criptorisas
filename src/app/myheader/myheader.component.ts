import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { getAuth,onAuthStateChanged ,signOut  } from "firebase/auth";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioSesionService } from '../inicio-sesion.service';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, CommonModule],
  templateUrl: './myheader.component.html',
  styleUrl: './myheader.component.css'
})
export class MyheaderComponent {
  constructor(
    private router: Router,
    public sesion: InicioSesionService
  ) {
    const session = getAuth();
    onAuthStateChanged(session, (user) => {
        if(user){
          this.sesion.usuario = user.uid;
          this.sesion.datos = user;
        }
    })
   }

  cerrarSession() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
          this.router.navigate(["index"]);
          this.sesion.usuario = '';
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
