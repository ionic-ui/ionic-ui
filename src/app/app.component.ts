import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Blank } from '../pages/blank/blank';
import { Messages } from '../pages/messages/messages';
import { Microblogging } from '../pages/microblogging/microblogging';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = Microblogging;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
