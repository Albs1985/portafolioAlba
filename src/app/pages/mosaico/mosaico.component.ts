import { Component } from '@angular/core';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent {

  numFotos: number = 3;
  dibujos : ProductoDescripcion[] = [];

  constructor(public productoService: ProductosService){
   
    this.productoService.cargarProductos().then((valor : any) => {
      this.dibujos = valor;
      console.log(this.dibujos);
    }); 

  }



}
