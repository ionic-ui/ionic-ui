import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ArrayFilterPipe } from '../pipes/array-filter.pipe';

import { Blank } from '../pages/blank/blank';
import { Home } from '../pages/home/home';
import { Messages } from '../pages/messages/messages';
import { Microblogging } from '../pages/microblogging/microblogging';
import { Profile } from '../pages/profile/profile';
import { Slider } from '../pages/slider/slider';


@NgModule({
  declarations: [
    MyApp,
    ArrayFilterPipe,
    Blank,
    Home,
    Messages,
    Microblogging,
    Profile,
    Slider
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      // mode: 'md',
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Blank,
    Home,
    Messages,
    Microblogging,
    Profile,
    Slider
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
