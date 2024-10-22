import { Component } from '@angular/core';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { CompetenciasService } from 'src/app/services/competencias.service';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent {

  numFotos: number = 3;
  dibujos : ProductoDescripcion[] = [];
  imgExist: boolean = true;

  constructor(public competenciasService: CompetenciasService){

    this.competenciasService.cargarCompetencias().then((valor : any) => {
      this.dibujos = valor;
      // console.log(this.dibujos);
    });

  }



}
