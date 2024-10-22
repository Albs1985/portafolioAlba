import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { CompetenciasService } from './services/competencias.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _infoPagina : InfoPaginaService,
              public _competencias : CompetenciasService,
              translate: TranslateService,
              private titleService: Title){

        translate.setDefaultLang('es');
        translate.use('es');
        // translate.onLangChange.subscribe((event: LangChangeEvent) => {
        //   translate.get('app.title').subscribe((res: string) => {
        //     this.titleService.setTitle(res);
        //   });
        // });

  }
}
