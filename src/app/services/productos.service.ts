import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // productos : any = [];
  // productos_idx : Producto = {
  //     categoria: '',
  //     cod: '',
  //     titulo: '',
  //     url : ''
  //   }    

  productos : Producto[] = [];
  productosFiltrado : Producto[] = [];

  cargando = true;

  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos(){

    //Añadimos el PROMISE para esperar a que se carguen los productos
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-html-b9db3-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( (res: any ) => {
        
        // console.log(res);
        
        this.productos  = res; 
        this.cargando = false;

        resolve(true);
        
      });
    });
    
  }

  getProducto(id: String){
    
    return this.http.get(`https://angular-html-b9db3-default-rtdb.europe-west1.firebasedatabase.app/productos/${ id }.json`); 
    
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
