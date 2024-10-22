import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { CompetenciasService } from 'src/app/services/competencias.service';

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
  next : number = 1;
  prev : number = 1;
  hasNext : boolean = true;
  hasPrev : boolean = true;

  numPaginas : number = 14;

  constructor(private route: ActivatedRoute,
              private competenciasService: CompetenciasService,
              private translate: TranslateService){
                translate.onLangChange.subscribe((event: LangChangeEvent) => {
                  this.ngOnInit();
                });


  }

  async ngOnInit(): Promise<void> {

    await this.route.params.subscribe(parametros =>{
      // console.log(parametros);
      // console.log(parametros['id']);

      // this.productoService.getProducto(parametros['id']).subscribe((producto: any) => {

        // console.log(producto);
        // console.log('parametros[id]');
        // console.log(parametros['id']);

        this.idCarpetaImagen = parametros['id'];
        this.id = this.idCarpetaImagen.substring(this.idCarpetaImagen.indexOf('-')+1);

        this.next = parseInt(this.id) + 1;
        this.prev = parseInt(this.id) - 1;

        if (this.next > this.numPaginas){
          this.hasNext = false;
        }else{
          this.hasNext = true;
        }

        if (this.prev < 1){
          this.hasPrev = false;
        }else{
          this.hasPrev = true;
        }

        this.competenciasService.getProducto(parametros['id']).then((valor : any) => {

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
