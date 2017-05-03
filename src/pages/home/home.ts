import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Blank } from '../blank/blank';
import { Messages } from '../messages/messages';
import { Microblogging } from '../microblogging/microblogging';

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
      { title: 'Messages',          component: Messages,        tags: 'message, messenger, facebook, chat, profil' },
      { title: 'Microblogging',     component: Microblogging,   tags: 'twitter, post' }
    ];
  }

}
