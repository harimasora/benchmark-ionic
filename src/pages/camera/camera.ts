import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { normalizeURL, Platform } from 'ionic-angular';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  base64Image = "assets/files/futurama.png";

  constructor(private platform: Platform, private camera: Camera) {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.platform.is('ios') ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: true,
      sourceType: 1
    }

    this.camera.getPicture(options).then((imageData) => {

      let base64Image = null;

      //get photo from the camera based on platform type
      if (this.platform.is('ios'))
        base64Image = normalizeURL(imageData);
      else
        base64Image = "data:image/jpeg;base64," + imageData;

      this.base64Image = base64Image;

    }, (error) => {
      console.debug("Unable to obtain picture: " + error, "app");
      console.log(error);
    });
  }

}
