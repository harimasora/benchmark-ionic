import { Component } from '@angular/core';

/**
 * Generated class for the ProximityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var navigator;

@Component({
  selector: 'page-proximity',
  templateUrl: 'proximity.html',
})
export class ProximityPage {

  constructor() {
  }

  ionViewDidLoad() {
    navigator.proximity.enableSensor();
  }

  ionViewWillLeave() {
    navigator.proximity.disableSensor();
  }

}
