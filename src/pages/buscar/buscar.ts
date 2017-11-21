import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})

export class BuscarPage {

  nombre='';
  items:any;
  platillos = [
    {
      id:1,
      foto:'./assets/imgs/avatarList/molletes-2.png',
      nombre:'Molletes',
      descripcion:'Pan francés untado con frijoles y queso mozzarella derretido',
      precio:'$15 c/u',
      disponible:'Cafetería FIME'
    },
    {
      id:2,
      foto:'./assets/imgs/avatarList/hotcakes.png',
      nombre:'Hot Cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel o mermelada',
      precio:'$15 c/u',
      disponible:'Cafetería FIME'
    },
    {
      id:3,
      foto:'./assets/imgs/avatarList/burrito-2.png',
      nombre:'Burrito',
      descripcion:'Tortilla de harina rellena con un guiso a elegir acompañado con frijoles al gusto y totopos',
      precio:'$30',
      disponible:'Cafetería FIME'
    },
    {
      id:4,
      foto:'./assets/imgs/avatarList/comida-dia.png',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir con dos guarniciones (incluye bebida y postre)',
      precio:'$70',
      disponible:'Cafetería FIME'
    },
    {
      id:5,
      foto:'./assets/imgs/avatarList/caldo-2.png',
      nombre:'Caldo tlalpeño',
      descripcion:'Caldo tradicional servido con pollo, elote, garbanzo, papa y zanahoria',
      precio:'$70',
      disponible:'Cafetería FIME'
    },
    {
      id:6,
      foto:'./assets/imgs/avatarList/burger.png',
      nombre:'Hamburguesa',
      descripcion:'Rica hamburguesa servida con papas a la francesa (incluye bebida)',
      precio:'$50',
      disponible:'Cafetería FIME'
    },
    {
      id:7,
      foto:'./assets/imgs/avatarList/hotdog.png',
      nombre:'Hot dog',
      descripcion:'Rico hot dog servido con papas a la francesa (incluye bebida)',
      precio:'$37',
      disponible:'Cafetería FIME'
    },
    {
      id:8,
      foto:'./assets/imgs/avatarList/sandwich.png',
      nombre:'Sandwich',
      descripcion:'Sandwich tradicional calentado a la plancha servido con papas a la francesa',
      precio:'$30',
      disponible:'Cafetería FIME'
    },
    {
      id:8,
      foto:'./assets/imgs/avatarList/ensalada.png',
      nombre:'Ensalada de pollo',
      descripcion:'Rica y saludable ensalada con cama de lechuga y trozos de pollo a la plancha',
      precio:'$40',
      disponible:'Cafetería FIME'
    },
    {
      id:9,
      foto:'./assets/imgs/avatarList/comida-dia.png',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir servido con dos guarniciones',
      precio:'$55',
      disponible:'Cafetería FACDYC'
    },
    {
      id:10,
      foto:'./assets/imgs/avatarList/milanesa.png',
      nombre:'Milanesa de res/pollo',
      descripcion:'Milanesa de res o pollo, servida con dos guarniciones.',
      precio:'$65',
      disponible:'Cafetería FACDYC'
    },
    {
      id:11,
      foto:'./assets/imgs/avatarList/enchiladas.jpg',
      nombre:'Enchiladas Suizas',
      descripcion:'Deliciosas enchiladas suizas (5) bañadas en salsa verde, con queso gratinado.',
      precio:'$50',
      disponible:'Cafetería FACDYC'
    },
    {
      id:12,
      foto:'./assets/imgs/avatarList/campechana.png',
      nombre:'Campechana grande',
      descripcion:'Tortilla de harina (25 cm) con carne de trompo, bistek y queso.',
      precio:'$50',
      disponible:'Cafetería FACDYC'
    },
    {
      id:13,
      foto:'./assets/imgs/avatarList/tacos-preparados.png',
      nombre:'Tacos de guiso (5)',
      descripcion:'Ricos tacos de guisos a elegir.',
      precio:'$40',
      disponible:'Cafetería FACDYC'
    },
    {
      id:14,
      foto:'./assets/imgs/avatarList/almuerzos.png',
      nombre:'Almuerzos',
      descripcion:'Almuerzo a elegir con complementos.',
      precio:'$45',
      disponible:'Cafetería FACDYC'
    },
    {
      id:15,
      foto:'./assets/imgs/avatarList/cuernito.png',
      nombre:'Cuernito de jamón y queso',
      descripcion:'Rico cuernito calientito de jamón y queso.',
      precio:'$25',
      disponible:'Cafetería FACDYC'
    },
    {
      id:16,
      foto:'./assets/imgs/avatarList/papas-fritas.png',
      nombre:'Papas a la francesa',
      descripcion:'Papas a la francesa tradicionales acompañadas con catsup.',
      precio:'$15',
      disponible:'Cafetería FACDYC'
    },
    {
      id:17,
      foto:'./assets/imgs/avatarList/chilidog.png',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$19',
      disponible:'Cafetería FACDYC'
    },
    {
      id:18,
      foto:'./assets/imgs/avatarList/comida-dia.png',
      nombre:'Comida del día',
      descripcion:'Guiso a elegir acompañado de dos guarniciones.',
      precio:'$60',
      disponible:'Cafetería FOD'
    },
    {
      id:19,
      foto:'./assets/imgs/avatarList/hotcakes.png',
      nombre:'Hot cakes',
      descripcion:'Esponjosos hot cakes acompañados con miel al gusto.',
      precio:'$30',
      disponible:'Cafetería FOD'
    },
    {
      id:20,
      foto:'./assets/imgs/avatarList/papas-fritas.png',
      nombre:'Papas a la francesa',
      descripcion:'Ricas papas a la francesa sazonadas, con aderezo al gusto.',
      precio:'Chicas: $30, grandes: $35',
      disponible:'Cafetería FOD'
    },
    {
      id:21,
      foto:'./assets/imgs/avatarList/molletes-2.png',
      nombre:'Molletes',
      descripcion:'Pan francés calientito untado con frijoles y queso gratinado.',
      precio:'$25',
      disponible:'Cafetería FOD'
    },
    {
      id:22,
      foto:'./assets/imgs/avatarList/taco.png',
      nombre:'Tacos a vapor',
      descripcion:'Clásica y económica orden de tacos a vapor.',
      precio:'$20',
      disponible:'Cafetería FOD'
    },
    {
      id:23,
      foto:'./assets/imgs/avatarList/tacos-preparados.png',
      nombre:'Tacos preparados',
      descripcion:'Pide tus tacos con el guiso de tu preferencia.',
      precio:'$8 c/u',
      disponible:'Cafetería FOD'
    },
    {
      id:24,
      foto:'./assets/imgs/avatarList/cereal.png',
      nombre:'Cereal',
      descripcion:'Plato de cereal (a elegir) con leche.',
      precio:'$30',
      disponible:'Cafetería FOD'
    },
    {
      id:25,
      foto:'./assets/imgs/avatarList/sincro.png',
      nombre:'Sincronizada',
      descripcion:'Rica sincronizada acompañada con papas a la francesa (incluye agua fresca)',
      precio:'$35',
      disponible:'Cafetería FOD'
    },
    {
      id:26,
      foto:'./assets/imgs/avatarList/huevos-al-gusto.png',
      nombre:'Huevos al gusto',
      descripcion:'Elige cualquiera de nuestros complementos',
      precio:'$40 y $45',
      disponible:'Cafetería FOD'
    },
    {
      id:27,
      foto:'./assets/imgs/avatarList/comida-dia.png',
      nombre:'Comida del día',
      descripcion:'Incluye plato fuerte con 2 guarniciones y 1 vaso de agua fresca',
      precio:'$55',
      disponible:'Cafetería FIC'
    },
    {
      id:28,
      foto:'./assets/imgs/avatarList/papas-fritas.png',
      nombre:'Papas fritas',
      descripcion:'Tradicionales patatas fritas sazonadas con sal.',
      precio:'$25',
      disponible:'Cafetería FIC'
    },
    {
      id:29,
      foto:'./assets/imgs/avatarList/torta-chorizo.png',
      nombre:'Torta de huevo/chorizo',
      descripcion:'Rica torta de pan francés rellena de huevo con chorizo.',
      precio:'$25',
      disponible:'Cafetería FIC'
    },
    {
      id:30,
      foto:'./assets/imgs/avatarList/corndog.png',
      nombre:'Banderillas',
      descripcion:'Clásicas salchichas empanizadas. Opción rápida para calmar el hambre.',
      precio:'$35',
      disponible:'Cafetería FIC'
    },
    {
      id:31,
      foto:'./assets/imgs/avatarList/chilidog.png',
      nombre:'Chili dog',
      descripcion:'Pan francés relleno de chili con carne.',
      precio:'$35',
      disponible:'Cafetería FIC'
    },
    {
      id:32,
      foto:'./assets/imgs/avatarList/sincro.png',
      nombre:'Sincronizada',
      descripcion:'Sandwich con bases de tortilla, rellenas de jamón, queso y frijoles. Incluye ensalada y papas fritas.',
      precio:'$35',
      disponible:'Cafetería FIC'
    },
    {
      id:33,
      foto:'./assets/imgs/avatarList/nuggets.jpg',
      nombre:'Nuggets',
      descripcion:'Porciones redondas de pollo empanizado. Acompañados de papas fritas y aderezos.',
      precio:'$35',
      disponible:'Cafetería FIC'
    },
    {
      id:34,
      foto:'./assets/imgs/avatarList/hamburguesa.png',
      nombre:'Hamburguesa',
      descripcion:'Hamburguesa sencilla (carne, jamón, queso y verduras). Incluye papas a la francesa.',
      precio:'$38',
      disponible:'Cafetería FIC'
    },
    {
      id:35,
      foto:'./assets/imgs/avatarList/g-sandwich.png',
      nombre:'Gran sandwich de pollo',
      descripcion:'Sandwich de 3 pisos, con milanesa de pollo, verduras y queso.',
      precio:'$38',
      disponible:'Cafetería FIC'
    }
  ];

  searchQuery: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.initializeItems();
  }

  public viewList(id){
    let vlista = this.items.filter(function(e,i){return e.id==id})[0];
    let alert = this.alertCtrl.create({
      title: vlista.nombre,
      subTitle: 'Disponible en: ' + vlista.disponible,
      buttons:['OK']
    });
    alert.present();
  }

  initializeItems() {
    this.items=this.platillos;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
