import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[] = [];
  productosLista : ProductoDescripcion[] = [];
  productosFiltrado : Producto[] = [];
  productoDesc : ProductoDescripcion = {     
    categoria: '',
    cod : '',
    titulo: '',
    url: '',
    desc1: '',
    desc2: '',
    producto: '',
    resumen: '',
    subtitulo1: '',
    subtitulo2: ''
  }
  cargando = true;
  ficheroIdiomas : string = "assets/data/items_es.json";

  constructor(private http: HttpClient,
              private translate: TranslateService) {

    this.cargarProductos();

  }

  cargarProductos(){

    //Añadimos el PROMISE para esperar a que se carguen los productos
    return new Promise( (resolve, reject) => {
      // this.http.get('https://angular-html-b9db3-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      
      // console.log(this.translate.currentLang);

      if (this.translate.currentLang === 'es'){
        this.ficheroIdiomas = "assets/data/items_es.json";
      }else if (this.translate.currentLang === 'en'){
        this.ficheroIdiomas = "assets/data/items_en.json";
      }else if (this.translate.currentLang === 'cat'){
        this.ficheroIdiomas = "assets/data/items_cat.json";
      }

      this.http.get(this.ficheroIdiomas)
        .subscribe( (response: any ) => {

          var array = [];
          for(let key in response){
            // console.log(key);
            // console.log(response[key]);
            this.productoDesc = {     
              categoria: '',
              cod : '',
              titulo: '',
              url: '',
              desc1: '',
              desc2: '',
              producto: '',
              resumen: '',
              subtitulo1: '',
              subtitulo2: ''
            };
            this.productoDesc.categoria = response[key].categoria;
            this.productoDesc.cod = response[key].cod;
            this.productoDesc.titulo = response[key].titulo;
            this.productoDesc.url = response[key].url;
            this.productoDesc.desc1 = response[key].desc1;
            this.productoDesc.desc2 = response[key].desc2;
            this.productoDesc.producto = response[key].producto;
            this.productoDesc.resumen = response[key].resumen;
            this.productoDesc.subtitulo1 = response[key].subtitulo1;
            this.productoDesc.subtitulo2 = response[key].subtitulo2;

            // console.log(this.productoDesc);
            array.push(this.productoDesc);
            // console.log(array);
            
          } 
          // console.log(array); // your required array


          this.productosLista = array;
          // console.log(this.productosLista);

          this.cargando = false;

          resolve(this.productosLista);
          
        });
      
    });
    
  }

  getProducto(id: String){
    return new Promise( (resolve, reject) => {

      // console.log(this.translate.currentLang);

      if (this.translate.currentLang === 'es'){
        this.ficheroIdiomas = "assets/data/items_es.json";
      }else if (this.translate.currentLang === 'en'){
        this.ficheroIdiomas = "assets/data/items_en.json";
      }else if (this.translate.currentLang === 'cat'){
        this.ficheroIdiomas = "assets/data/items_cat.json";
      }

      this.http.get(this.ficheroIdiomas)
      .subscribe( (response: any ) => {

        var array = [];
        for(let key in response){
          this.productoDesc = {     
            categoria: '',
            cod : '',
            titulo: '',
            url: '',
            desc1: '',
            desc2: '',
            producto: '',
            resumen: '',
            subtitulo1: '',
            subtitulo2: ''
          };
          this.productoDesc.categoria = response[key].categoria;
          this.productoDesc.cod = response[key].cod;
          this.productoDesc.titulo = response[key].titulo;
          this.productoDesc.url = response[key].url;
          this.productoDesc.desc1 = response[key].desc1;
          this.productoDesc.desc2 = response[key].desc2;
          this.productoDesc.producto = response[key].producto;
          this.productoDesc.resumen = response[key].resumen;
          this.productoDesc.subtitulo1 = response[key].subtitulo1;
          this.productoDesc.subtitulo2 = response[key].subtitulo2;

          array.push(this.productoDesc);
        } 


        this.productosLista = array;
        // console.log('ALBERT');
        for (var i=0; i<this.productosLista.length; i++){
          // console.log('id');
          // console.log(id);
          // console.log('this.productosLista[i].cod');
          // console.log(this.productosLista[i].cod);
          if (id === this.productosLista[i].cod){        
            this.productoDesc = this.productosLista[i];
            break;
          }
        }
        // console.log(this.productoDesc);
        
        resolve(this.productoDesc);
          
        
      });
      

    });
  }

  buscarProducto(termino : string){

    if (this.productos.length === 0){
      //Cargar o esperar a que se carguen
      this.cargarProductos().then(() => {
        //ejecutar después de tener los productos
        //Aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      //Aplicar filtro
      this.filtrarProductos(termino);
    }

    // this.productosFiltrado = this.productos.filter(producto => {
    //   return true;
    // });

    // console.log(this.productosFiltrado);

  }

  private filtrarProductos(termino : string){

    // console.log(this.productos);
    this.productosFiltrado = [];
    const terminoLower = termino.toLocaleLowerCase();
    this.productos.forEach(prod => {
      
      const tituloLower = prod.titulo.toLocaleLowerCase();
      const catergoriaLower = prod.categoria.toLocaleLowerCase();

      if (catergoriaLower.indexOf(terminoLower) >=0 || tituloLower.indexOf(terminoLower) >=0){
        this.productosFiltrado.push(prod);
      }
    });

  }

}
