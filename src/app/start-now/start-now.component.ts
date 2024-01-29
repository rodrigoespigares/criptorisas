import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioBaseService } from '../servicio-base.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { InicioSesionService } from '../inicio-sesion.service';
import { FormsModule } from '@angular/forms';
import { DolarEuroPipe } from '../dolar-euro.pipe';
import { RouterLink } from '@angular/router';
import { FireStoreService } from '../fire-store.service';
@Component({
    selector: 'app-start-now',
    standalone: true,
    imports: [CommonModule,RouterModule,FormsModule,DolarEuroPipe, RouterLink],
    templateUrl: './start-now.component.html',
    styleUrl: './start-now.component.css'
})
export class StartNowComponent{
    constructor(public service: ServicioBaseService, private router:Router, public sesion:InicioSesionService,private store:FireStoreService) {
        this.service.peticionAJAXstart();
    }
    
    usuario ="";
    busqueda:string ="";
    isSearching = false;

    green:string = "green";
    red:string = "red";
    currentRoute = this.router.url;
    ngOnDestroy(){
        this.service.rutaAnterior = this.currentRoute;
    }
    mostrarDetalle(id:string){
        this.router.navigate(["detalle",id]);
    }
    buscando(){
        if(this.busqueda.length > 0){
            this.isSearching = true;
        }else{
            this.isSearching = false;
        }
        if(this.busqueda.length > 5){
            this.service.peticionAJAXbuscar(this.busqueda);
        }
    }
}
