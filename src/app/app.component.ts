import { Component } from '@angular/core';

/**
 * - Cómo puedo hacer para crear un servicio que genere un numero aleatorio en su constructor, y lo provea mediante un método?
 * - Cómo puedo hacer para solicitar ese numero aleatorio desde un componente, que a su vez lo muestre en pantalla?
 * - Cómo puedo hacer para solicitar un numero aleatorio diferente desde otro componente?
 * - Cómo puedo hacer para solicitar datos desde un API (hosteado en un servidor real), mediante un request HTTP?
 * - Note la capacidad de Angular para lidiar con asincronía automáticamente.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  getRandomNumber(): number {
    return 0;
  }

}
