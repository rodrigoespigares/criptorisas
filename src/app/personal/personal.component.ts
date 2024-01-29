import { Component } from '@angular/core';
import { FireStoreService } from '../fire-store.service';
import { CommonModule } from '@angular/common';
import { ServicioBaseService } from '../servicio-base.service';
import { Router } from '@angular/router';
import { DolarEuroPipe } from '../dolar-euro.pipe';
import { FormatEurPipe } from '../format-eur.pipe';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule,DolarEuroPipe,FormatEurPipe,RouterModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

    constructor(public store:FireStoreService, private router:Router, public service:ServicioBaseService){
      
    }
    currentRoute = this.router.url;
    ngOnInit(){
      this.store.datosFireStore("",true);
    }
    ngOnDestroy(){
        this.service.rutaAnterior = this.currentRoute;
    }
    unfollow(id:string){
      this.store.remove(id,id);
    }
    
}
