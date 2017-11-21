import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comida-rapida',
  templateUrl: 'comida-rapida.html',
})
export class ComidaRapidaPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fime/hamburguesa.jpg',
      nombre:'Hamburguesa',
      descripcion:'Rica hamburguesa servida con papas a la francesa (incluye bebida)',
      precio:'$50',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-fime/hot-dog.jpg',
      nombre:'Hot dog',
      descripcion:'Rico hot dog servido con papas a la francesa (incluye bebida)',
      precio:'$37',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/chili-dog.jpg',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$19',
      available:'Cafetería FACDYC'
    },
    {
      foto:'./assets/imgs/platillos-fod/papas.jpg',
      nombre:'Papas a la francesa',
      descripcion:'Ricas papas a la francesa sazonadas, con aderezo al gusto.',
      precio:'Chicas: $30, grandes: $35',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fic/sincro.jpg',
      nombre:'Sincronizada',
      descripcion:'Rica sincronizada acompañada con papas a la francesa (incluye agua fresca)',
      precio:'$35',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fic/fritas.jpg',
      nombre:'Papas fritas',
      descripcion:'Tradicionales patatas fritas sazonadas con sal.',
      precio:'$25',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-fic/banderilla.jpg',
      nombre:'Banderillas',
      descripcion:'Clásicas salchichas empanizadas. Opción rápida para calmar el hambre.',
      precio:'$35',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/chili-dog.jpg',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$35',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-fic/sincro.jpg',
      nombre:'Sincronizada',
      descripcion:'Sandwich con bases de tortilla, rellenas de jamón, queso y frijoles. Incluye ensalada y papas fritas.',
      precio:'$35',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-fic/nuggets.jpg',
      nombre:'Nuggets',
      descripcion:'Porciones redondas de pollo empanizado. Acompañados de papas fritas y aderezos.',
      precio:'$35',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-fic/hamburguesa.jpg',
      nombre:'Hamburguesa',
      descripcion:'Hamburguesa sencilla (carne, jamón, queso y verduras). Incluye papas a la francesa.',
      precio:'$38',
      available:'Cafetería FIC'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
