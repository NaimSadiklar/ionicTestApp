import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StreamPage } from '../pages/stream/stream';
import { DetailPage } from '../pages/detail/detail';
import { EconomyPage } from '../pages/economy/economy';
import { ApiProvider } from '../providers/api/api';
import { GenreBrowserPage } from '../providers/stream-api/stream-api';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    EconomyPage,   
    StreamPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    EconomyPage,
    StreamPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    GenreBrowserPage
    
    
  ]
})
export class AppModule {}
