import { Component, OnInit } from '@angular/core';

import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 showToolbar = false; 
 onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 330;
    }
}
}
