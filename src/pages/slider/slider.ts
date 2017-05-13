import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class Slider {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // document.getElementById('page-profile').className += ' appear';
  }

}
