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

  }

  ngOnInit(): void {

    this.route.params.subscribe(parametros =>{
      // console.log(parametros);
      // console.log(parametros['id']);

      this.productoService.getProducto(parametros['id']).subscribe((producto: any) => {
        
        // console.log(producto);
        // console.log(parametros['id']);

        this.productoDesc = producto;
        this.idCarpetaImagen = parametros['id'];
        this.id = this.idCarpetaImagen.substring(this.idCarpetaImagen.indexOf('-'));

      });

    });



  }

}
