import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  a = 8;
  b = 5;
  listo = false;
  // colocar var:string asigna el tipo de dato
  nombre:string = '';
// this es la clase
  constructor() {
    setTimeout(() => {this.listo = true; }, 3000);
  }
// event binding
  hacerAlgo() {
    alert('hey');
    console.log('diste click');
  }
}
