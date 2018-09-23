import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HomePage } from '../pages/home/home';
import { EconomyPage } from '../pages/economy/economy';

import { StreamPage } from '../pages/stream/stream';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public appPages = [
    {
    title:'Anasayfa',
 
    component: HomePage,
    icon:'home'
   },
   {
    title:'Ekonomi',
    
    component: EconomyPage,
    icon:'stats'
   }
   ,
   {
    title:'Canlı Yayın',
    
    component: StreamPage,
    icon:'stream'
   }

  ]

  
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public api:ApiProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    this.nav.setRoot(page.component);
  }
}
