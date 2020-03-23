import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/GalleryImage.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images = [new GalleryImage ('Apple Blossoms', 'assets/Paintings/Apple Blossoms.jpg'),
  new GalleryImage ('Aurora Borealis', 'assets/Paintings/Aurora Borealis.jpg'),
  new GalleryImage ('Betta Fish', 'assets/Paintings/Betta Fish.jpg'),
  new GalleryImage ('Blue Rose', 'assets/Paintings/Blue Rose.jpg'),
  new GalleryImage ('Rose', 'assets/Paintings/Rose.jpg'),
  new GalleryImage ('Eye of the Dragon', 'assets/Paintings/Eye of the Dragon.jpg')];

  constructor() { }

  ngOnInit() {
  }

}
