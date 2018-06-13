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
import { BluetoothPage } from '../pages/bluetooth/bluetooth';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

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
    ProximityPage,
    BluetoothPage
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
    ProximityPage,
    BluetoothPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
