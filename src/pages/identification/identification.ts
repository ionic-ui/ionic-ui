import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html',
})
export class Identification {

  segment = 'login';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    //
  }

  updateView() {
    //
  }

}
