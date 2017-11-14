import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-platillos-fime',
  templateUrl: 'platillos-fime.html',
})
export class PlatillosFimePage {


  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fime/mollete.jpeg',
      nombre:'Molletes',
      descripcion:'Pan francés untado con frijoles y queso mozzarella derretido',
      precio:'$15 c/u'
    },
    {
      foto:'./assets/imgs/platillos-fime/hot-cakes.png',
      nombre:'Hot Cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel o mermelada',
      precio:'$15 c/u'
    },
    {
      foto:'./assets/imgs/platillos-fime/burrito.png',
      nombre:'Burrito',
      descripcion:'Tortilla de harina rellena con un guiso a elegir acompañado con frijoles al gusto y totopos',
      precio:'$30'
    },
    {
      foto:'./assets/imgs/platillos-fime/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir con dos guarniciones (incluye bebida y postre)',
      precio:'$70'
    },
    {
      foto:'./assets/imgs/platillos-fime/caldo-tlalpeño.jpg',
      nombre:'Caldo tlalpeño',
      descripcion:'Caldo tradicional servido con pollo, elote, garbanzo, papa y zanahoria',
      precio:'$70'
    },
    {
      foto:'./assets/imgs/platillos-fime/hamburguesa.jpg',
      nombre:'Hamburguesa',
      descripcion:'Rica hamburguesa servida con papas a la francesa (incluye bebida)',
      precio:'$50'
    },
    {
      foto:'./assets/imgs/platillos-fime/hot-dog.jpg',
      nombre:'Hot dog',
      descripcion:'Rico hot dog servido con papas a la francesa (incluye bebida)',
      precio:'$37'
    },
    {
      foto:'./assets/imgs/platillos-fime/sandwich.jpg',
      nombre:'Sandwich',
      descripcion:'Sandwich tradicional calentado a la plancha servido con papas a la francesa',
      precio:'$30'
    },
    {
      foto:'./assets/imgs/platillos-fime/ensalada.jpg',
      nombre:'Ensalada de pollo',
      descripcion:'Rica y saludable ensalada con cama de lechuga y trozos de pollo a la plancha',
      precio:'$40'
    },
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


}
