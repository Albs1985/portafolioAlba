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
      user: 'Angel Berlanas Vicente',
      rating: 5,
      date: new Date('2024-04-05'),
      comment: 'Estamos encantados con Alba y su trabajo como editora, nos ha preparado dos pedidos de libros de cocina que han quedado perfectos, chulísimos, de una calidad estupenda y muy bien de precio. Nos orientaron, nos aconsejaron, nos explicaron lo de las páginas de cortesía, ¡todo perfecto!. De verdad, un trabajo excepcional. 1000% recomendada.'
    },
    {
      user: 'Laura C.',
      rating: 5,
      date: new Date('2024-04-05'),
      comment: 'Alucinante!! De las primeras veces que he contactado con una copistería a través de internet y me ha encantado. La fastidié un poquito al hacer el pedido sin darme cuenta (les pedí la edición de un libro A5) y al poco rato Alba me llamó y me ayudó a arreglarlo, me editó incluso las cosas que había hecho regular (lo siento...) y ahora que lo he recibido me he quedado alucinada. No me esperaba tan buena calidad, si soy sincera, porque siempre voy por lo bajo, pero ha quedado precioso y a un precio super bueno. Muchísimas gracias ♥'
    },
    {
      user: 'Rocío Alonso',
      rating: 5,
      date: new Date('2024-04-05'),
      comment: 'Me encantó el encargo, la rapidez y el trato recibido. Alba ha sido super profesional, gracias por hacer posible la agenda tal cual a como la imaginaba, por explicarme con todo detalle el proceso y las dudas que tenía. Sin duda a partir de ahora, cualquier cosa que necesite iré allí.'
    },
    {
      user: 'Zarah Paredes',
      rating: 5,
      date: new Date('2024-07-05'),
      comment: 'El trabajo de Alba ha sido impoluto y muy profesional. Desde el primer momento ha sido muy atenta en ayudarme y asesorarme para poder conseguir el mejor resultado del encargo que pedía. Su atención, amabilidad y eficacia sin duda me han dado mucha confianza para poder seguir contando con ella y su equipo en más ocasiones. Muchas gracias por todo ! Estoy muy contenta y satisfecha !☺️'
    },
    {
      user: 'David Ramos',
      rating: 5,
      date: new Date('2024-04-05'),
      comment: 'Hemos hecho un pedido grande, 85 libros a color en A5. El acabado y el producto está genial y Alba ha sido muy maja. Fuimos antes para que nos recomendaran el tipo de papel y acabado de la portada y nos hicieron una prueba de impresión. El pedido lo hicimos para 10 días un viernes y el martes ya lo hemos recogido.'
    },
    {
      user: 'Jon Theravada',
      rating: 5,
      date: new Date('2024-05-05'),
      comment: 'Un pedido de impresión y encuadernación excelentes, como siempre. Hecho con cariño y profesionalidad. Cuidando los detalles y con muy buena comunicación, para asegurarse que sale todo perfecto.. Mis felicitaciones a Alba por su trabajo y dedicación.'
    },
    {
      user: 'Alba Zuriaga Balaguer',
      rating: 5,
      date: new Date('2024-05-05'),
      comment: 'Alba ha atendido mi pedido online preguntando por cada detalle, ha sido genial! La calidad es excelente'
    },
    {
      user: 'Pablo Martí Marced',
      rating: 5,
      date: new Date('2024-04-05'),
      comment: 'El servicio ha sido excelente. Pedí la impresión de un libro y estoy encantada con el resultado. Alba ha mantenido la comunicación conmigo durante todo el proceso llamándome para cualquier duda, la atención al cliente es muy buena. Los colores, el tacto, el brillo, todo calidad. Muchas gracias'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0); // Llena un array con el número de estrellas
  }

  getEmptyStars(rating: number): number[] {
    const totalStars = 5;
    return Array(totalStars - rating).fill(0); // Llena el array con estrellas vacías
  }

  highlightAlba(comment: string): string {
    const targetWord = 'Alba';
    const regex = new RegExp(`(${targetWord})`, 'gi');
    return comment.replace(regex, '<strong class="highlight-alba">$1</strong>');
  }

}
