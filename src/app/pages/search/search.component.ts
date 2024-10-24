import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetenciasService } from '../../services/competencias.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  constructor(private route: ActivatedRoute,
              public competenciasService : CompetenciasService){

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {

        console.log(params['termino']);
        this.competenciasService.buscarProducto(params['termino']);

      });
  }

}
