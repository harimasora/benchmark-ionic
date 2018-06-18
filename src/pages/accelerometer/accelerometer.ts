import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

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

  //Accelerometer
  accelSubscription = null;
  acceleration = {};

  //Gyrsoscope
  gyroSubscription = null;
  orientation = {}

  constructor(private deviceMotion: DeviceMotion, private gyroscope: Gyroscope) {
  }

  ionViewWillEnter() {
    // Accelerometer
    let accelOptions: DeviceMotionAccelerometerOptions = {
      frequency: 1000
    }

    this.deviceMotion.getCurrentAcceleration().then(
      (acceleration: DeviceMotionAccelerationData) => this.acceleration = acceleration,
      (error: any) => console.log(error)
    );

    this.accelSubscription = this.deviceMotion.watchAcceleration(accelOptions).subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.acceleration = acceleration;
    });

    //Gyroscope
    let gyroOptions: GyroscopeOptions = {
      frequency: 1000
    };

    this.gyroscope.getCurrent(gyroOptions)
      .then((orientation: GyroscopeOrientation) => this.orientation = orientation)
      .catch()

    this.gyroSubscription = this.gyroscope.watch(gyroOptions)
      .subscribe((orientation: GyroscopeOrientation) => {
        this.orientation = orientation;
      });
  }

  ionViewWillLeave() {
    // Stop watch
    this.accelSubscription.unsubscribe();
    this.gyroSubscription.unsubscribe();
  }

}
