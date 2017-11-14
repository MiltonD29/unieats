import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlatillosFimePage,
         PlatillosFacdycPage,
         PlatillosFodPage,
         PlatillosFicPage
       } from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    tabBarElement: any;
    splash = true;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  verPlatillosFime( platillo:any ){
    this.navCtrl.push( PlatillosFimePage, { 'platillo':platillo } );
  }

  verPlatillosFacdyc( platillo:any ){
    this.navCtrl.push( PlatillosFacdycPage, { 'platillo':platillo } );
  }

  verPlatillosFod( platillo:any ){
    this.navCtrl.push( PlatillosFodPage, { 'platillo':platillo } );
  }

  verPlatillosFic( platillo:any ){
    this.navCtrl.push( PlatillosFicPage, { 'platillo':platillo } );
  }

  navegarPagina(){
  this.navCtrl.push( PlatillosFimePage );
  }


}
