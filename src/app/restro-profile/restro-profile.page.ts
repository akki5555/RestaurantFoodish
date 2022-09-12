import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 

import { ScrollDetail } from '@ionic/core';


@Component({
  selector: 'app-restro-profile',
  templateUrl: './restro-profile.page.html',
  styleUrls: ['./restro-profile.page.scss'],
})
export class RestroProfilePage implements OnInit {
constructor(private navCtrl: NavController, private route: Router) { }
  ngOnInit() { 
  }
 showToolbar = false; 
 onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
}
	
  signin() {
    this.navCtrl.navigateRoot(['./signin']);
  } 
 add_address() {
    this.route.navigate(['./add-address']);
  } 
}
