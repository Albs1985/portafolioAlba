import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CompetenciasService } from 'src/app/services/competencias.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  constructor (public competenciasService : CompetenciasService,
                private translate: TranslateService){
    // console.log(productosService);
    // console.log(productosService.productosLista);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log('CAMBIO DE IDIOMA ESCUCHADO POR EL PORTAFOLIO');
      this.competenciasService.cargarCompetencias().then(()=>{
        console.log(this.competenciasService.competenciasLista)
      });

    });
  }



}
