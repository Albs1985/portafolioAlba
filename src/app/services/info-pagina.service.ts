import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {
    titulo: '',
    email: '',
    nombre_corto: '',
    pagina_autor: '',
    facebook: '',
    twitter: '',
    instagram: '',
    pinterest: '',
    equipo_trabajo: []
  };
  cargada = false;

  equipo : any[] | undefined;

  constructor(private http: HttpClient) {

    console.log("Servicio de Info Pagina cargada");

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
  //Leer el archivo JSON de configuracion
    this.http.get('assets/data/data-pagina.json')
      .subscribe ((resp:InfoPagina)  => {
        
        // console.log(resp);

        // console.log(resp ['email'] );//Ambas son formas válidas
        // console.log(resp.email);

        this.cargada = true;
        this.info = resp;

      });

  }

  //Leer el equipo desde BBDD de firebase:
  private cargarEquipo(){

    this.http.get('https://angular-html-b9db3-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe ((resp:any)  => {
        
        this.equipo = resp;
        // console.log(this.equipo);
        

      });

  }



}
