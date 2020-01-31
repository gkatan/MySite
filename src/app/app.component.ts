import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'All About Geula!';
  page = 'Home';

  onNavPage(event) {
    this.page = event;
  }
}
