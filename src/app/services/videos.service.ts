import { Injectable } from '@angular/core';
import { Video } from '../interfaces/video.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  listaVideos : Video[] = [];
  video : Video = {
    titulo : '',
    descripcion : '',
    url : ''
  }

  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarVideos();
  }


  cargarVideos(){

    //Añadimos el PROMISE para esperar a que se carguen los productos
    return new Promise( (resolve, reject) => {
      this.http.get('assets/data/videos.json')
        .subscribe( (response: any ) => {

          var array = [];
          for(let key in response){
            this.video = {     
              titulo : '',
              descripcion : '',
              url : ''
            };
            this.video.titulo = response[key].titulo;
            this.video.descripcion = response[key].descripcion;
            this.video.url = response[key].url;
            
            array.push(this.video);
            
          } 

          this.listaVideos = array;
          // console.log(this.listaVideos);

          this.cargando = false;

          resolve(this.listaVideos);
          
        });
      
    });
    
  }

}
