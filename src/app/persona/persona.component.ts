import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent {
  nombre: string = 'Fran';
  apellido: string = 'Coto';
  edad: number = 34;
  //private edad: number = 34;

  // getEdad(): number {
  //   return this.edad;
  // }
}
