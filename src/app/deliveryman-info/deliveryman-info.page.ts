import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliveryman-info',
  templateUrl: './deliveryman-info.page.html',
  styleUrls: ['./deliveryman-info.page.scss'],
})
export class DeliverymanInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

chat() {
    this.route.navigate(['./chat']);
  } 
}
