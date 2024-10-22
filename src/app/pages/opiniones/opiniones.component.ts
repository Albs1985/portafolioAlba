import { Component } from '@angular/core';

interface Review {
  user: string;
  rating: number;
  date: Date;
  comment: string;
}

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})

export class OpinionesComponent {

  reviews: Review[] = [
    {
      user: 'MariLuz Ojeda',
      rating: 5,
      date: new Date('2024-06-20'),
      comment: 'El año pasado ya tuve una buena experiencia y por eso repetí. Muy buena atención, cumplen con los tiempos de producción, buena calidad-precio, no se puede pedir más. Estoy muy contenta con mi fotolibro. Muchas gracias Alba, además por los acertados consejos y recomendaciones que me diste.'
    },
    {
      user: 'María García',
      rating: 5,
      date: new Date('2024-09-15'),
      comment: 'Buen trabajo en general, aunque hubo algunos pequeños retrasos en la entrega.'
    },
    {
      user: 'Carlos Hernández',
      rating: 5,
      date: new Date('2024-08-05'),
      comment: 'El trabajo fue aceptable, pero creo que podría mejorar en algunos aspectos.'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0); // Llena un array con el número de estrellas
  }

  getEmptyStars(rating: number): number[] {
    const totalStars = 5;
    return Array(totalStars - rating).fill(0); // Llena el array con estrellas vacías
  }

}
