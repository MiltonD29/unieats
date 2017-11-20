import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-comida-saluable',
  templateUrl: 'comida-saluable.html',
})
export class ComidaSaluablePage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fime/sandwich.jpg',
      nombre:'Sandwich',
      descripcion:'Sandwich tradicional calentado a la plancha servido con papas a la francesa',
      precio:'$30',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-fime/ensalada.jpg',
      nombre:'Ensalada de pollo',
      descripcion:'Rica y saludable ensalada con cama de lechuga y trozos de pollo a la plancha',
      precio:'$40',
      available:'Cafetería FIME'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/cuernito.png',
      nombre:'Cuernito de jamón y queso',
      descripcion:'Rico cuernito calientito de jamón y queso.',
      precio:'$25',
      available:'Cafetería FACDYC'
    },
    {
      foto:'./assets/imgs/platillos-fic/sandwich.jpg',
      nombre:'Gran sandwich de pollo',
      descripcion:'Sandwich de 3 pisos, con milanesa de pollo, verduras y queso.',
      precio:'$38',
      available:'Cafetería FIC'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
