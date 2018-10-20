import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
  // template: ``
})
export class FormsPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
}