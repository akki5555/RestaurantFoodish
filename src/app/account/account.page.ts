import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { ModalController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

 profile() {
    this.route.navigate(['./restro-profile']);
  } 
 review() {
    this.route.navigate(['./reviews']);
  } 
 earnings() {
    this.route.navigate(['./wallet']);
  } 
 select_language() {
    this.route.navigate(['./select-language']);
  } 
 support() {
    this.route.navigate(['./support']);
  } 
  buyAppAction() {
    window.open("https://bit.ly/cc2_foodish", '_system', 'location=no');
  }


 buyappalert () {
    this.modalController
      .create({ component: BuyappalertPage })
      .then(modalElement => {
        modalElement.present()
      })
  }
  
  developed_by () {
    window.open('https://opuslab.works', '_system', 'location=no')
    
 }
}
