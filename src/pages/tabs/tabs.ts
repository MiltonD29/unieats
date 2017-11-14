import { Component } from '@angular/core';

import {
  HomePage,
  PromosPage,
  BuscarPage,
  InfoPage
} from "../index.paginas";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  constructor() {

    this.tab1 = HomePage;
    this.tab2 = PromosPage;
    this.tab3 = BuscarPage;
    this.tab4 = InfoPage;
    
  }

}
