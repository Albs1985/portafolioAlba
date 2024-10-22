import { Component } from '@angular/core';
import { CompetenciaDescripcion } from 'src/app/interfaces/competencia-descripcion.interface';
import { CompetenciasService } from 'src/app/services/competencias.service';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent {

  numFotos: number = 3;
  dibujos : CompetenciaDescripcion[] = [];
  imgExist: boolean = true;

  constructor(public competenciasService: CompetenciasService){

    this.competenciasService.cargarCompetencias().then((valor : any) => {
      this.dibujos = valor;
      // console.log(this.dibujos);
    });

  }



}
