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
      user: 'Virginia Hernández',
      rating: 5,
      date: new Date('2024-09-15'),
      comment: 'Son unos grandes profesionales. Rapidez en la entrega (pese a que eran medidas especiales), precios buenos y un acabado PERFECTO. Cabe destacar la exquisita atención de Alba y Fátima, muy atentas, responsables y simpáticas. Si vais a imprimir medidas grandes, recomiendo enviarles las fotografías en PDF y vectorizadas a la medida deseada. Muchas gracias por vuestro gran trabajo, repetiré seguro!! Os adjunto fotografías para que comprobéis la gran calidad de la imagen, pese a ser de 80*80 cm.'
    },
    {
      user: 'Carlos Hernández',
      rating: 5,
      date: new Date('2024-04º-05'),
      comment: 'Estamos encantados con Alba y su trabajo como editora, nos ha preparado dos pedidos de libros de cocina que han quedado perfectos, chulísimos, de una calidad estupenda y muy bien de precio. Nos orientaron, nos aconsejaron, nos explicaron lo de las páginas de cortesía, ¡todo perfecto!. De verdad, un trabajo excepcional. 1000% recomendada.'
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
