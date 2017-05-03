import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Blank } from '../blank/blank';
import { Messages } from '../messages/messages';
import { Microblogging } from '../microblogging/microblogging';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  public pages;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Blank',             component: Blank },
      { title: 'Messages',          component: Messages },
      { title: 'Microblogging',     component: Microblogging }
    ];
  }

}
