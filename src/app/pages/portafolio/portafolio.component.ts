import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  constructor (public productosService : ProductosService,
                private translate: TranslateService){
    // console.log(productosService);
    // console.log(productosService.productosLista);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log('CAMBIO DE IDIOMA ESCUCHADO POR EL PORTAFOLIO');
      this.productosService.cargarProductos();
    });
  }

  
  
}
