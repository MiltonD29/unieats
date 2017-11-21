import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  promos:Array<any> = [
    {
      foto:'./assets/imgs/promos/promo1.png',
      nombre:'Sandwich, papas fritas y agua fresca',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/promos/promo2.png',
      nombre:'Hamburguesa, papas fritas y agua fresca',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/promos/promo3.png',
      nombre:'Burrito, papas fritas y agua fresca',
      precio:'$40',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/promos/promo4.png',
      nombre:'Sandwich de jamón y queso, con jugo Beberé',
      precio:'$25',
      available:'Cafe FACDyC'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
