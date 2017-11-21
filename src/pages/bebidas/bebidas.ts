import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  bebidas: Array<any> = [
    {
      nombre:'Agua fresca (chica)',
      foto:'./assets/imgs/bebidas/vaso-chico.jpg',
      precio:'$7',
      disponible:'Cafetería FIME'
    },
    {
      nombre:'Agua fresca (grande)',
      foto:'./assets/imgs/bebidas/vaso-grande.jpg',
      precio:'$12',
      disponible:'Cafetería FIME'
    },
    {
      nombre:'Chocolala',
      foto:'./assets/imgs/bebidas/chocolala.jpg',
      precio:'$15',
      disponible:'Cafetería FIME'
    },
    {
      nombre:'Yomilala',
      foto:'./assets/imgs/bebidas/yomilala.jpg',
      precio:'$13',
      disponible:'Cafetería FIME'
    },
    {
      nombre:'Refresco de lata',
      foto:'./assets/imgs/bebidas/refresco-lata.jpg',
      precio:'$15',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Refresco de 500 ml',
      foto:'./assets/imgs/bebidas/refresco-500.jpg',
      precio:'$15',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Del Valle Frut 600 ml',
      foto:'./assets/imgs/bebidas/del-valle.jpg',
      precio:'$15',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'POWERADE 500 ml',
      foto:'./assets/imgs/bebidas/powerade.jpg',
      precio:'$20',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Agua purificada 1 lto',
      foto:'./assets/imgs/bebidas/agua-litro.jpg',
      precio:'$12',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Licuados de sabor',
      foto:'./assets/imgs/bebidas/licuados.jpg',
      precio:'$25',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Jugo beberé',
      foto:'./assets/imgs/bebidas/bebere.jpg',
      precio:'$10',
      disponible:'Cafetería FACDYC'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
