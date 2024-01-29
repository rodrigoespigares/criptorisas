import { Injectable, inject } from '@angular/core';
import { collection, onSnapshot, query, where, addDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { InicioSesionService } from './inicio-sesion.service';
import { Firestore } from '@angular/fire/firestore';
import { getDocs } from '@angular/fire/firestore';
import { ServicioBaseService } from './servicio-base.service';

@Injectable({
    providedIn: 'root'
})
export class FireStoreService{
    datosFS:any[] = [];
    entra = 0;
    firestore = inject(Firestore);
    prueba:any;
    servicio = inject(ServicioBaseService);
    constructor(private sesion: InicioSesionService) { 
    }
    isFollowing = false;
    datosFireStore(id:string = "", esCartera:boolean = false) {
        var q = query(collection(this.firestore, "monedas"), where("id_usuario", "==", this.sesion.usuario));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            this.datosFS = [];
            querySnapshot.forEach((doc) => {
                this.datosFS.push(doc.data());
                if(id!='' && !this.isFollowing){
                    this.checkMoneda(id);
                }
                
            });
            if(esCartera){
                this.cargaPersonal();
            }
        });
    }
    add(moneda:string,id:string){
        addDoc(collection(this.firestore, "monedas"), {
            id_usuario: this.sesion.usuario,
            moneda:moneda,
        }).then(() => {
          this.checkMoneda(id);
        }).catch(error => {
            console.error("Error al agregar el documento:", error);
            // Aquí puedes manejar el error según tus necesidades
        });
    }
    checkMoneda(id:string){
        this.isFollowing = this.datosFS.some((element:any) => {
            return element.moneda == id;
        })
      }
    remove(moneda:string, id:string){
        let q = query(collection(this.firestore, 'monedas'), where( "id_usuario","==",this.sesion.usuario), where( "moneda","==",moneda))
        getDocs(q).then((documentos) => {
            documentos.forEach( element => {
                deleteDoc(element.ref).then(
                    () => {
                        this.datosFireStore("",true)
                        this.checkMoneda(id);
                    }
                );
            });
        });
    }
    cargaPersonal(){
        this.servicio.peticionAJAXcartera(this.datosFS);
      }

}
