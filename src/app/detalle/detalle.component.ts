import { Component, Input,OnInit } from '@angular/core';
import { ServicioBaseService } from '../servicio-base.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FireStoreService } from '../fire-store.service';
import { InicioSesionService } from '../inicio-sesion.service';
import { RouterModule } from '@angular/router';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';

import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule, ChartComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  constructor(public service: ServicioBaseService, public store:FireStoreService, public sesion:InicioSesionService) {
      const session = getAuth();
      onAuthStateChanged(session, (user) => {
          if(user){
          this.sesion.usuario = user.uid;
          this.sesion.datos = user;
          this.store.checkMoneda(this.id);
        }
      })
  }
  moneda:any = "";
  isFollowing:boolean = false;
  @Input() id:any = "";
  ngOnInit(): void{
    this.service.detalle(this.id);
    this.store.checkMoneda(this.id);
  }
  add(moneda:any){
    this.store.add(moneda,this.id);
  }
  
  unfollow(moneda:any){
    this.store.remove(moneda,this.id);
  }
}
