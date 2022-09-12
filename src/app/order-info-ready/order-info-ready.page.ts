import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-info-ready',
  templateUrl: './order-info-ready.page.html',
  styleUrls: ['./order-info-ready.page.scss'],
})
export class OrderInfoReadyPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

chat() {
    this.route.navigate(['./chat']);
  } 
 deliveryman_info() {
    this.route.navigate(['./deliveryman-info']);
  } 
}
