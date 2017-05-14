import { Component } from '@angular/core';
import { Microblogging } from '../microblogging/microblogging';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-identification',
  templateUrl: 'identification.html',
})
export class Identification {

  // tab1Root: any = Microblogging;
  // tab2Root: any = Microblogging;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
