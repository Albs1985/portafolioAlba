import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
// import { InfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent  {

  @ViewChild('mobileMenuCheckbox') mobileMenuCheckbox!: ElementRef;


  isSelectedSpanish : boolean = true;
  isSelectedCatalan : boolean = false;
  isSelectedEnglish : boolean = false;

  constructor (public _servicio : InfoPaginaService,
               private router: Router,
               private translate: TranslateService){

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
  changeLanguageToSpanish(): void {
    this.translate.use('es');
    // this.translate.use('es');/*ESTO IGUAL NO HACE FALTA HACERLO DOS VECES*/
    this.isSelectedSpanish = true;
    this.isSelectedCatalan = false;
    this.isSelectedEnglish = false;
    this.closeMobileMenu();
    console.log('Idioma cambiado al Español');
    // window.location.reload();
  }
  // Se cambia el idioma a Inglés
  changeLanguageToEnglish(): void {
    this.translate.use('en');
    // this.translate.use('en');
    this.isSelectedSpanish = false;
    this.isSelectedCatalan = false;
    this.isSelectedEnglish = true;
    this.closeMobileMenu();
    console.log('Idioma cambiado al Inglés');
    // window.location.reload();
  }
  // Se cambia el idioma a Catalan
  changeLanguageToCatalan(): void {
    this.translate.use('cat');
    // this.translate.use('cat');
    this.isSelectedSpanish = false;
    this.isSelectedCatalan = true;
    this.isSelectedEnglish = false;
    this.closeMobileMenu();
    console.log('Idioma cambiado al Catalan');
    // window.location.reload();
  }

  closeMobileMenu(): void {
    // Cierra el menú móvil desmarcando el checkbox
    if (this.mobileMenuCheckbox && this.mobileMenuCheckbox.nativeElement.checked) {
      this.mobileMenuCheckbox.nativeElement.checked = false;
    }
  }

}

