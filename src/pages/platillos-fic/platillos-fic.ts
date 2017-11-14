import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-platillos-fic',
  templateUrl: 'platillos-fic.html',
})
export class PlatillosFicPage {

  platillos: Array<any> = [
    {
      foto:'./assets/imgs/platillos-fic/comida-del-dia.jpg',
      nombre:'Comida del día',
      descripcion:'Incluye plato fuerte con 2 guarniciones y 1 vaso de agua fresca',
      precio:'$55'
    },
    {
      foto:'./assets/imgs/platillos-fic/fritas.jpg',
      nombre:'Papas fritas',
      descripcion:'',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-fic/torta-huevo.png',
      nombre:'Torta de huevo/chorizo',
      descripcion:'',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-fic/banderilla.jpg',
      nombre:'Banderillas',
      descripcion:'',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/chili-dog.jpg',
      nombre:'Chili dog',
      descripcion:'',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/sincro.jpg',
      nombre:'Sincronizada',
      descripcion:'',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/nuggets.jpg',
      nombre:'Nuggets',
      descripcion:'',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/hamburguesa.jpg',
      nombre:'Hamburguesa',
      descripcion:'',
      precio:'$38'
    },
    {
      foto:'./assets/imgs/platillos-fic/sandwich.jpg',
      nombre:'Gran sandwich de pollo',
      descripcion:'',
      precio:'$38'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
