import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-col',
  templateUrl: './nav-col.component.html',
  styleUrls: ['./nav-col.component.css']
})
export class NavColComponent implements OnInit {
  page = 'Home';
  @Output() navPage = new EventEmitter();

  constructor() { }

  onClickHome() {
    this.page = 'Home';
    this.navPage.emit(this.page);
    console.log ('page: ' + this.page);
  }

  onClickAbout() {
    this.page = 'About';
    this.navPage.emit(this.page);
    console.log ('page: ' + this.page);
  }

  onClickResume() {
    this.page = 'Resume';
    this.navPage.emit(this.page);
    console.log ('page: ' + this.page);
  }

  onClickGallery() {
    this.page = 'Gallery';
    this.navPage.emit(this.page);
    console.log ('page: ' + this.page);
  }

  ngOnInit() {
  }

}
