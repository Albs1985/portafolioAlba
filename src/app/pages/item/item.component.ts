import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  productoDesc : ProductoDescripcion = {
    cod : '',
    titulo: '',
    url: '',
    categoria: '',
    desc1: '',
    desc2: '',
    producto: '',
    resumen: '',
    subtitulo1: '',
    subtitulo2: ''
  }

  fecha = new Date();

  idCarpetaImagen : string = '';
  id : string = '';
  
  constructor(private route: ActivatedRoute,
              private productoService: ProductosService){
                // console.log('ALBERT CONSTRUCTOR');
                // this.productoService.cargarProductos();
  }

  ngOnInit(): void {

    this.route.params.subscribe(parametros =>{
      // console.log(parametros);
      // console.log(parametros['id']);

      // this.productoService.getProducto(parametros['id']).subscribe((producto: any) => {
        
        // console.log(producto);
        // console.log('parametros[id]');
        // console.log(parametros['id']);

        this.idCarpetaImagen = parametros['id'];
        this.id = this.idCarpetaImagen.substring(this.idCarpetaImagen.indexOf('-'));
      
        this.productoService.getProducto(parametros['id']).then((valor : any) => {
          
          // console.log('valor');
          // console.log(valor);
          // console.log('this.productoDesc');
          // console.log(this.productoDesc);
          // console.log('this.idCarpetaImagen');
          // console.log(this.idCarpetaImagen);
          // console.log('this.id');
          // console.log(this.id);
          this.productoDesc = valor;
        }); 
        

        // this.productoDesc = this.productoService.getProducto(parametros['id']); 
      // });

    });



  }

}
