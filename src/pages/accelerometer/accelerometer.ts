import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the AccelerometerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova;

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

  //Magnetometer
  magSubscription = null;
  magReading = {};

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

    //Magnetometer

    var thisComponent = this;

    cordova.plugins.magnetometer.getReading(
      function success(reading) {
        thisComponent.magReading = reading;
        // Output: {x: 23.113, y:-37.245, z:6.172, magnitude: 44.266}
      },
      function error(message) {
        console.log(message);
      }
    )

    this.magSubscription = cordova.plugins.magnetometer.watchReadings(
      function success(reading) {
        thisComponent.magReading = reading;
      },
      function error(message) {
        console.log(message);
      }
    )
  }

  ionViewWillLeave() {
    // Stop watch
    this.accelSubscription.unsubscribe();
    this.gyroSubscription.unsubscribe();
    cordova.plugins.magnetometer.stop(this.magSubscription)
  }

}
