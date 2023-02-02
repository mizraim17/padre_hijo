import { Component } from '@angular/core';
import { Personaje } from './models/personaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  personaje: Personaje[] = [
    { nombre: 'Mike', serie: 'The office', calificacion: 9, visto: false },
    { nombre: 'Rick', serie: 'Ricky y Morty', calificacion: 8, visto: true },
    { nombre: 'Goku', serie: 'Dragon Ball', calificacion: 7, visto: false },
    { nombre: 'Bockjack', serie: 'Bockjack', calificacion: 10, visto: true }
  ]
}
