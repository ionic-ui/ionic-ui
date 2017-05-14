import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Blank } from '../blank/blank';
import { Identification } from '../identification/identification';
import { Messages } from '../messages/messages';
import { Microblogging } from '../microblogging/microblogging';
import { Profile } from '../profile/profile';
import { Slider } from '../slider/slider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  public filterPage = '';
  public pages:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initializePages();
  }

  initializePages() {
    this.pages = [
      { title: 'Blank',             component: Blank,           tags: '' },
      { title: 'Identification',    component: Identification,  tags: 'identification, login, signup' },
      { title: 'Messages',          component: Messages,        tags: 'message, messenger, facebook, chat, profil' },
      { title: 'Microblogging',     component: Microblogging,   tags: 'twitter, post' },
      { title: 'Profile',           component: Profile,         tags: 'profile, avatar' },
      { title: 'Slider',            component: Slider,          tags: 'slider, poll' }
    ];
  }

}
