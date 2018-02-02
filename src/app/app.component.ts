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
    {cercania: 1, distancia: 1, active: true,
      nombre: 'Florería La Gardenia'},
    {cercania: 2, distancia: 10, active: true,
      nombre: 'Donas La Pasadita'},
    {cercania: 1, distancia: 8, active: false,
      nombre: 'Veterinaria Huellitas'},
    {cercania: 1, distancia: 40, active: true,
      nombre: 'Pollería Pechugita'},
    {cercania: 2, distancia: 120, active: true,
      nombre: 'Joyería Golden'},
    {cercania: 3, distancia: 18, active: false,
      nombre: 'Karaoke Mouth'}
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
