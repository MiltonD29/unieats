import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-postres',
  templateUrl: 'postres.html',
})
export class PostresPage {

  postres: Array<any> = [
    {
      nombre:'Rebanada de pastel',
      foto:'./assets/imgs/postres/pastel.jpg',
      descripcion:'Disfruta de una rica rebanada de la variedad de pasteles.',
      precio:'$20',
      disponible:'Cafetería FIME'
    },
    {
      nombre:'Nieve estilo Jalisco',
      foto:'./assets/imgs/postres/nieve-jalisco.jpg',
      descripcion:'Helados de sabores de fruta, con el sabor de Jalisco.',
      precio:'$',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Nieve de leche en vaso',
      foto:'./assets/imgs/postres/nieve.jpg',
      descripcion:'Helados de sabores de fruta, hecho a base de leche.',
      precio:'$25',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Hojarascas',
      foto:'./assets/imgs/postres/hojarasca.png',
      descripcion:'Ricas hojarascas espolvoreadas con azúcar y canela.',
      precio:'$4 c/u',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Gorditas de azúcar',
      foto:'./assets/imgs/postres/gordita.jpg',
      descripcion:'Tradicional postre mexicano, con cubierta dulce a elegir (cajeta, mermelada o miel)',
      precio:'$5 c/u',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Vaso de fruta',
      foto:'./assets/imgs/postres/fruta.jpg',
      descripcion:'Rico y saludable coctel de frutas.',
      precio:'$25',
      disponible:'Cafetería FACDYC'
    },
    {
      nombre:'Pan de dulce',
      foto:'./assets/imgs/postres/pan.jpg',
      descripcion:'Pieza de pan dulce calientito.',
      precio:'$10',
      disponible:'Cafetería FACDYC'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
