import { Component } from '@angular/core';
import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (public _servicio : InfoPaginaService, 
               private router: Router){

  }

  buscarProducto(termino : string){

    if (termino.length < 2){
      return;
    }
    
    this.router.navigate(['/search', termino]);

  }

  // ocultaPanel() {
  //   console.log('OCULTA PANEL');
  //   var enlaces = document.getElementsByClassName('rk-menu__link');
  //   console.log(enlaces);
  //   for (var i=0; i < enlaces.length; i++){
  //     enlaces[i].classList.toggle('ocultaDesplegable');
  //   }
  // }

}
