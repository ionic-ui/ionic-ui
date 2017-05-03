import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class Messages {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
