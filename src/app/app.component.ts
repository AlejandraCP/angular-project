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
  apellido:string = '';
  lugares:any = [
    {active: true,
      nombre: 'Florería La Gardenia'},
    {active: true,
      nombre: 'Donas La Pasadita'},
    {active: false,
      nombre: 'Veterinaria Huellitas'}
  ];
  users:any = [
    {older: true,
      nombre: 'Juana'},
    {older: true,
      nombre: 'Carolina'},
    {older: false,
      nombre: 'Juan Carlos'}
  ];
  lat:number = -11.9951899;
  lng:number = -77.0700;
// this es la clase
  constructor() {

}
