import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ServicioBaseService {
    public peticion: any[] = [];
    constructor(private http: HttpClient) { }

    total:number = 0;
    top7: any[] = [];
    buscar: any[] = [];
    personal: any[] = [];
    detalleSearch: any = "";
    private BASE_URL: string = "https://api.coingecko.com/api/v3/";
    rutaAnterior = "/";
    peticionAJAXstart() {
        this.http.get(this.BASE_URL + "search/trending").subscribe((datos: any) => {
            this.top7 = datos.coins;
        })
    }
    detalle(id: string) {
        this.http.get(this.BASE_URL + "coins/" + id).subscribe((datos: any) => {
            this.detalleSearch = datos;
        })
    }
    peticionAJAXbuscar(cadena:string){
        this.http.get(this.BASE_URL + "search?query=" + cadena).subscribe((datos: any) => {
            this.buscar = datos.coins;
        })
    }
    peticionAJAXcartera(array:any){
        this.personal = [];

        array.forEach((element:any) => {
            this.http.get(this.BASE_URL + "coins/" + element.moneda).subscribe((datos: any) => {
                this.personal.push(datos);
            })
        });
    }
}
