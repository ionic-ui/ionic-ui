import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class Messages {

  segment = 'messages';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  updateView() {
    //
  }

}
