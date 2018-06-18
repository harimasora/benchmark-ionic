import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

/**
 * Generated class for the AccelerometerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accelerometer',
  templateUrl: 'accelerometer.html',
})
export class AccelerometerPage {

  accelSubscription = null;
  acceleration = {};

  constructor(private deviceMotion: DeviceMotion) {
  }

  ionViewWillEnter() {
    let options : DeviceMotionAccelerometerOptions = {
      frequency: 1000
    }

    // Get the device current acceleration
    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => this.acceleration = acceleration,
      (error: any) => console.log(error)
    );

    // Watch device acceleration
    this.accelSubscription = this.deviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.acceleration = acceleration;
    });
  }

  ionViewWillLeave() {
    // Stop watch
    this.accelSubscription.unsubscribe();
  }

}
