import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  startDate: Date = new Date(2020, 8); // Octubre es el mes 9 (ya que enero es 0)


  constructor (public _servicio : InfoPaginaService){

  }
  getElapsedTime(): string {
    return this.calculateTimeElapsed(this.startDate);
  }
  calculateTimeElapsed(startDate: Date): string {
    const currentDate = new Date();

    // Obtener el total de meses transcurridos
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    // Si los meses son negativos, ajustar restando un año y sumando meses
    if (months < 0) {
      years--;
      months += 12;
    }

    // Formatear el texto de salida
    const yearsText = years > 0 ? `${years} años` : '';
    const monthsText = months > 0 ? `${months} meses` : '';
    const elapsedTime = `${yearsText} ${monthsText}`.trim();

    return `oct. ${startDate.getFullYear()} - Actualidad · ${elapsedTime}`;
  }

}
