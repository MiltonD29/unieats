import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-platillos-fod',
  templateUrl: 'platillos-fod.html',
})
export class PlatillosFodPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir acompañado de dos guarniciones.',
      precio:'$60'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Hot cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel al gusto.',
      precio:'$30'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Papas a la francesa',
      descripcion:'Ricas papas a la francesa sazonadas, con aderezo al gusto.',
      precio:'Chicas: $30, grandes: $35'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Molletes',
      descripcion:'Pan francés calientito untado con frijoles y queso gratinado.',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Tacos a vapor',
      descripcion:'Clásica y económica orden de tacos a vapor.',
      precio:'$20'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Tacos preparados',
      descripcion:'Pide tus tacos con el guiso de tu preferencia.',
      precio:'$8 c/u'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Cereal',
      descripcion:'Plato de cereal (a elegir) con leche.',
      precio:'$30'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Sincronizada',
      descripcion:'Rica sincronizada acompañada con papas a la francesa (incluye agua fresca)',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fod/.jpg',
      nombre:'Huevos al gusto',
      descripcion:'Elige cualquiera de nuestros complementos',
      precio:'$40 y $45'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
