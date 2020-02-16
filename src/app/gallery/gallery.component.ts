import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images = ['assets/Apple_Blossoms.jpg',
    'assets/Aurora_Borealis.jpg',
    'assets/Betta%20Fish.jpg',
    'assets/Blue Rose.jpg',
    'assets/Rose.jpg',
    'assets/Eye of the Dragon.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
