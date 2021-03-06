import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DownloadPage } from '../pages/download/download';
import { UploadPage } from '../pages/upload/upload';
import { CameraPage } from '../pages/camera/camera';
import { MapPage } from '../pages/map/map';
import { AccelerometerPage } from '../pages/accelerometer/accelerometer';
import { CompassPage } from '../pages/compass/compass';
import { TouchPage } from '../pages/touch/touch';
import { ProximityPage } from '../pages/proximity/proximity';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceMotion } from '@ionic-native/device-motion';
import { Gyroscope } from '@ionic-native/gyroscope';
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { TouchID } from '@ionic-native/touch-id';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DownloadPage,
    UploadPage,
    CameraPage,
    MapPage,
    AccelerometerPage,
    CompassPage,
    TouchPage,
    ProximityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DownloadPage,
    UploadPage,
    CameraPage,
    MapPage,
    AccelerometerPage,
    CompassPage,
    TouchPage,
    ProximityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Geolocation,
    DeviceMotion,
    Gyroscope,
    DeviceOrientation,
    TouchID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
