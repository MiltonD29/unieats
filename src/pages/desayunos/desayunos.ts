import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-desayunos',
  templateUrl: 'desayunos.html',
})
export class DesayunosPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fime/mollete.jpeg',
      nombre:'Molletes',
      descripcion:'Pan francés untado con frijoles y queso mozzarella derretido',
      precio:'$15 c/u',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-fime/hot-cakes.png',
      nombre:'Hot Cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel o mermelada',
      precio:'$15 c/u',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/almuerzo.jpg',
      nombre:'Almuerzos',
      descripcion:'Almuerzo a elegir con complementos.',
      precio:'$45',
      available:'Cafetería FACDYC'
    },
    {
      foto:'./assets/imgs/platillos-fod/hotcakes.jpg',
      nombre:'Hot cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel al gusto.',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fod/molletes.jpg',
      nombre:'Molletes',
      descripcion:'Pan francés calientito untado con frijoles y queso gratinado.',
      precio:'$25',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fod/cereal.jpg',
      nombre:'Cereal',
      descripcion:'Plato de cereal (a elegir) con leche.',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fod/huevo.jpg',
      nombre:'Huevos al gusto',
      descripcion:'Elige cualquiera de nuestros complementos',
      precio:'$40 y $45',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/platillos-fic/torta-huevo.png',
      nombre:'Torta de huevo/chorizo',
      descripcion:'Rica torta de pan francés rellena de huevo con chorizo.',
      precio:'$25',
      available:'Cafetería FIC'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
