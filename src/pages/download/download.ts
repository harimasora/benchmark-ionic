import { Component } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Platform, AlertController } from 'ionic-angular';

/**
 * Generated class for the DownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {

  imagePath: string = '';
  storageDirectory: string = '';

  constructor(private platform: Platform, private transfer: FileTransfer, private file: File, private alertCtrl: AlertController) {
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });

  }

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://placekitten.com/200/200';
    fileTransfer.download(url, this.storageDirectory + 'kitten.jpg').then((entry) => {

      const alertSuccess = this.alertCtrl.create({
        title: `Download Succeeded!`,
        subTitle: `kitten.jpg was successfully downloaded to: ${entry.toURL()}`,
        buttons: ['Ok']
      });

      alertSuccess.present();

      // Show file as Base64
      this.file.readAsDataURL(this.storageDirectory, 'kitten.jpg')
      .then((res) => {
        this.imagePath = res;
      });

    }, (error) => {
      const alertFailure = this.alertCtrl.create({
        title: `Download Failed!`,
        subTitle: `kitten.jpg was not successfully downloaded. Error code: ${error.code}`,
        buttons: ['Ok']
      });

      alertFailure.present();
    });
  }

}
