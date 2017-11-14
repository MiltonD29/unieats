import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-platillos-facdyc',
  templateUrl: 'platillos-facdyc.html',
})
export class PlatillosFacdycPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-facdyc/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir servido con dos guarniciones',
      precio:'$55'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/milanesa.jpg',
      nombre:'Milanesa de res/pollo',
      descripcion:'Milanesa de res o pollo, servida con dos guarniciones.',
      precio:'$65'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/suizas.jpg',
      nombre:'Enchiladas Suizas',
      descripcion:'Deliciosas enchiladas suizas (5) bañadas en salsa verde, con queso gratinado.',
      precio:'$50'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/campechana.jpg',
      nombre:'Campechana grande',
      descripcion:'Tortilla de harina (25 cm) con carne de trompo, bistek y queso.',
      precio:'$50'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/tacos.png',
      nombre:'Tacos de guiso (5)',
      descripcion:'Ricos tacos de guisos a elegir.',
      precio:'$40'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/almuerzo.jpg',
      nombre:'Almuerzos',
      descripcion:'Almuerzo a elegir con complementos.',
      precio:'$45'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/cuernito.png',
      nombre:'Cuernito de jamón y queso',
      descripcion:'Rico cuernito calientito de jamón y queso.',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/papas.jpg',
      nombre:'Papas a la francesa',
      descripcion:'Papas a la francesa tradicionales acompañadas con catsup.',
      precio:'$15'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/chili-dog.jpg',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$19'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
