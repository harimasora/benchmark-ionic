import { Component } from '@angular/core';
import { FileUploadOptions, FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Platform, AlertController } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  imagePath: string = 'assets/files/futurama.png';
  fileEntry = null;
  storageDirectory: string = '';

  constructor(private platform: Platform, private transfer: FileTransfer, private file: File, private alertCtrl: AlertController) {
    this.platform.ready()
      .then(() => {
        return this.file.resolveDirectoryUrl(this.file.applicationDirectory + 'www/assets/files')
      })
      .then((filesDir) => {
        return this.file.getFile(filesDir, 'futurama.png', { create: false })
      })
      .then((fileEntry) => {
        this.fileEntry = fileEntry;
      })
      .catch(error => {
        console.error(JSON.stringify(error))
      })
  }

  upload() {
    const url = 'https://content.dropboxapi.com/2/files/upload';

    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      headers: {
        "Authorization": "Bearer frLGybnUFXoAAAAAAAAdaEEy48ISejZ4wspvf3r_syOqmV8FfH0Kxv_LUOv5Q6rn",
        "Dropbox-API-Arg": "{\"path\": \"/TCC/uploaded-ionic.png\",\"mode\": \"add\",\"autorename\": false,\"mute\": false}",
        "Content-Type": "application/octet-stream"
      }
    }
    fileTransfer.upload(this.fileEntry.nativeURL, url, options)
      .then((data) => {
        // success
        const alertSuccess = this.alertCtrl.create({
          title: 'Upload Succeeded!',
          subTitle: 'futurama.png was successfully uploaded to Dropbox',
          buttons: ['Ok']
        });

        alertSuccess.present();
      }, (error) => {
        // error
        const alertFailure = this.alertCtrl.create({
          title: `Upload Failed!`,
          subTitle: `futurama.png was not successfully uploaded. Error code: ${error.code}`,
          buttons: ['Ok']
        });

        alertFailure.present();
      })
  }

}
