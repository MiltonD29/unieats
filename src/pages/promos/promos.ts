import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  promos:Array<any> = [
    {
      foto:'./assets/imgs/sandwich.jpg',
      nombre:'Sandwich, papas fritas y agua fresca',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/hamburguesa.jpg',
      nombre:'Hamburguesa, papas fritas y agua fresca',
      precio:'$30',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/burrito.png',
      nombre:'Burrito, papas fritas y agua fresca',
      precio:'$40',
      available:'Cafetería FOD'
    },
    {
      foto:'./assets/imgs/promos/sandwich.jpg',
      nombre:'Sandwich de jamón y queso, con jugo Beberé',
      precio:'$25',
      available:'Cafe FACDyC'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
