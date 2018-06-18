import { Component } from '@angular/core';
import { TouchID } from '@ionic-native/touch-id';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TouchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-touch',
  templateUrl: 'touch.html',
})
export class TouchPage {

  constructor(private touchId: TouchID, private alertCtrl: AlertController) {
  }

  authenticate() {
    this.touchId.isAvailable()
      .then(
        res => {
          this.touchId.verifyFingerprint('Authenticate with Touch ID')
            .then(
              res => {
                const alertSuccess = this.alertCtrl.create({
                  title: `Scan complete!`,
                  subTitle: `Successfully scanned fingerprint.`,
                  buttons: ['Ok']
                });

                alertSuccess.present();
              },
              err => {
                const alertFailure = this.alertCtrl.create({
                  title: `Scan Failed!`,
                  subTitle: `Wrong fingerprint. Error code: ${err.code}`,
                  buttons: ['Ok']
                });

                alertFailure.present();
              }
            );
        },
        err => {
          const alertFailure = this.alertCtrl.create({
            title: `Scan Failed!`,
            subTitle: `Touch ID is not available. Error code: ${err.code}`,
            buttons: ['Ok']
          });

          alertFailure.present();
        }
      );
  }

}
