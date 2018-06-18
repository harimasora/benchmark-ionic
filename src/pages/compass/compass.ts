import { Component } from '@angular/core';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

/**
 * Generated class for the CompassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html',
})
export class CompassPage {

  subscription = null;
  compass = {};

  constructor(private deviceOrientation: DeviceOrientation) {
  }

  ionViewDidLoad() {
    // Get the device current compass heading
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => this.compass = data,
      (error: any) => console.log(error)
    );

    // Watch the device compass heading change
    this.subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => this.compass = data
    );
  }

  ionViewWillLeave() {
    // Stop watching heading change
    this.subscription.unsubscribe();
  }

}
