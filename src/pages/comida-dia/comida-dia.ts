import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comida-dia',
  templateUrl: 'comida-dia.html',
})
export class ComidaDiaPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fime/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir con dos guarniciones (incluye bebida y postre)',
      precio:'$70',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir servido con dos guarniciones',
      precio:'$55',
      available:'Cafetería FACDYC'
    },
    {
      foto:'./assets/imgs/platillos-fic/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Incluye plato fuerte con 2 guarniciones y 1 vaso de agua fresca',
      precio:'$55',
      available:'Cafetería FIC'
    },
    {
      foto:'./assets/imgs/platillos-fod/comida-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir acompañado de dos guarniciones.',
      precio:'$60',
      available:'Cafetería FOD'
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
