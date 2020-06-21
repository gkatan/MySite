import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../gallery/GalleryImage.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
images = [
  new GalleryImage ('Eye of the Dragon', 'assets/Paintings/Eye of the Dragon.jpg'),
  new GalleryImage ('Dancing Lavendar', 'assets/Paintings/Dancing Lavendar.jpg'),
  new GalleryImage ('Together in the Rain', 'assets/Paintings/Together in the Rain.jpg'),
  new GalleryImage ('Cat', 'assets/Paintings/Cat.jpg'),
  new GalleryImage ('Forest', 'assets/Paintings/Forest.jpg'),
  new GalleryImage ('Orchids in Bloom', 'assets/Paintings/Orchids in Bloom.jpg'),
  new GalleryImage ('Stargazing Adventure', 'assets/Paintings/Stargazing Adventure.jpg'),
  new GalleryImage ('Canon Beach', 'assets/Paintings/Canon Beach.jpg'),
  new GalleryImage ('Horse at Sunrise', 'assets/Paintings/Horse at Sunrise.jpg'),
  new GalleryImage ('Mount Hood', 'assets/Paintings/Mount Hood.jpg'),
  new GalleryImage ('Toothless and Hiccup', 'assets/Paintings/Toothless and Hiccup.jpg'),
  new GalleryImage ('Tree at Moonrise', 'assets/Paintings/Tree at Moonrise.jpg'),
  new GalleryImage ('Rose', 'assets/Paintings/Rose.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
