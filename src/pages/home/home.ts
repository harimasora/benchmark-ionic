import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DownloadPage } from '../download/download';
import { UploadPage } from '../upload/upload';
import { CameraPage } from '../camera/camera';
import { MapPage } from '../map/map';
import { AccelerometerPage } from '../accelerometer/accelerometer';
import { CompassPage } from '../compass/compass';
import { TouchPage } from '../touch/touch';

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
      "location": CameraPage
    }, {
      "title": "Map & Location",
      "location": MapPage
    }, {
      "title": "Accelerometer & Gyro",
      "location": AccelerometerPage
    }, {
      "title": "Compass",
      "location": CompassPage
    }, {
      "title": "Touch ID",
      "location": TouchPage
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
