import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images = ['assets/Paintings/Apple Blossoms.jpg',
    'assets/Paintings/Aurora Borealis.jpg',
    'assets/Paintings/Betta Fish.jpg',
    'assets/Paintings/Blue Rose.jpg',
    'assets/Paintings/Rose.jpg',
    'assets/Paintings/Eye of the Dragon.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
