import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Blank } from '../pages/blank/blank';
import { Messages } from '../pages/messages/messages';
import { Microblogging } from '../pages/microblogging/microblogging';

@NgModule({
  declarations: [
    MyApp,
    Blank,
    Messages,
    Microblogging
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // mode: 'md',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Blank,
    Messages,
    Microblogging
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
