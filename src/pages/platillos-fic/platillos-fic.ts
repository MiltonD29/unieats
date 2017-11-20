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
      descripcion:'Tradicionales patatas fritas sazonadas con sal.',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-fic/torta-huevo.png',
      nombre:'Torta de huevo/chorizo',
      descripcion:'Rica torta de pan francés rellena de huevo con chorizo.',
      precio:'$25'
    },
    {
      foto:'./assets/imgs/platillos-fic/banderilla.jpg',
      nombre:'Banderillas',
      descripcion:'Clásicas salchichas empanizadas. Opción rápida para calmar el hambre.',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-facdyc/chili-dog.jpg',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/sincro.jpg',
      nombre:'Sincronizada',
      descripcion:'Sandwich con bases de tortilla, rellenas de jamón, queso y frijoles. Incluye ensalada y papas fritas.',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/nuggets.jpg',
      nombre:'Nuggets',
      descripcion:'Porciones redondas de pollo empanizado. Acompañados de papas fritas y aderezos.',
      precio:'$35'
    },
    {
      foto:'./assets/imgs/platillos-fic/hamburguesa.jpg',
      nombre:'Hamburguesa',
      descripcion:'Hamburguesa sencilla (carne, jamón, queso y verduras). Incluye papas a la francesa.',
      precio:'$38'
    },
    {
      foto:'./assets/imgs/platillos-fic/sandwich.jpg',
      nombre:'Gran sandwich de pollo',
      descripcion:'Sandwich de 3 pisos, con milanesa de pollo, verduras y queso.',
      precio:'$38'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
