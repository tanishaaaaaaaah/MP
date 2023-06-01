import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab4Page {
  feedbackText: string = '';

  constructor(private alertController: AlertController) {}

  async showAlert() {
    //await waits for async to resolve or reject
    //async keyword needs to be updated in front of functions that contain ”await” keyword to notify that the result might be available after a certain delay
    const alert = await this.alertController.create({
      header: 'Feedback',
      message: `You entered: ${this.feedbackText}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
