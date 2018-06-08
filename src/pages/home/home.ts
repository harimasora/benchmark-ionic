import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages = [
    {
      "title": "Download",
      "location": null
    }, {
      "title": "Upload",
      "location": null
    }, {
      "title": "Camera",
      "location": null
    }, {
      "title": "Map & Location",
      "location": null
    }, {
      "title": "Accelerometer & Gyro",
      "location": null
    }, {
      "title": "Compass",
      "location": null
    }, {
      "title": "Touch ID",
      "location": null
    }, {
      "title": "Proximity Sensor",
      "location": null
    }, {
      "title": "Bluetooth Connection",
      "location": null
    }]

  constructor(public navCtrl: NavController) {

  }

  pageSelected(page) {
    console.log(page.title)
  }

}
