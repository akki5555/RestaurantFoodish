import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 order_info_ready() {
    this.route.navigate(['./order-info-ready']);
  } 
 chat() {
    this.route.navigate(['./chat']);
  } 
}
