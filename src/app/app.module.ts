import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {
  HomePage,
  PromosPage,
  BuscarPage,
  InfoPage,
  TabsPage,
  PlatillosFimePage,
  PlatillosFacdycPage,
  PlatillosFodPage,
  PlatillosFicPage,
  DesayunosPage,
  ComidaRapidaPage,
  ComidaDiaPage,
  ComidaSaluablePage,
  PostresPage,
  BebidasPage
} from "../pages/index.paginas";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PromosPage,
    BuscarPage,
    InfoPage,
    TabsPage,
    PlatillosFimePage,
    PlatillosFacdycPage,
    PlatillosFodPage,
    PlatillosFicPage,
    DesayunosPage,
    ComidaRapidaPage,
    ComidaDiaPage,
    ComidaSaluablePage,
    PostresPage,
    BebidasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PromosPage,
    BuscarPage,
    InfoPage,
    TabsPage,
    PlatillosFimePage,
    PlatillosFacdycPage,
    PlatillosFodPage,
    PlatillosFicPage,
    DesayunosPage,
    ComidaRapidaPage,
    ComidaDiaPage,
    ComidaSaluablePage,
    PostresPage,
    BebidasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
