import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DownloadPage } from '../download/download';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages = [
    {
      "title": "Download",
      "location": DownloadPage
    }, {
      "title": "Upload",
      "location": UploadPage
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
    console.log(page.title);
    if (page.location) {
      this.navCtrl.push(page.location);
    }
  }

}
