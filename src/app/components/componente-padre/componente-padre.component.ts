import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.scss']
})
export class ComponentePadreComponent  {

@Input()  personajesPadre!: Personaje[] 

}
