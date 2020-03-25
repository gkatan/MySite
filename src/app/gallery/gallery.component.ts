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
  new GalleryImage ('Wave', 'assets/Paintings/Wave.jpg'),
  new GalleryImage ('Campfire on the Beach', 'assets/Paintings/Campfire on the Beach.jpg'),
  new GalleryImage ('Orchids in Bloom', 'assets/Paintings/Orchids in Bloom.jpg'),
  new GalleryImage ('Stargazing Adventure', 'assets/Paintings/Stargazing Adventure.jpg'),
  new GalleryImage ('Canon Beach', 'assets/Paintings/Canon Beach.jpg'),
  new GalleryImage ('Summer Stream', 'assets/Paintings/Summer Stream.jpg'),
  new GalleryImage ('Aurora Borealis', 'assets/Paintings/Aurora Borealis.jpg'),
  new GalleryImage ('Betta Fish', 'assets/Paintings/Betta Fish.jpg'),
  new GalleryImage ('Blue Rose', 'assets/Paintings/Blue Rose.jpg'),
  new GalleryImage ('Rose', 'assets/Paintings/Rose.jpg'),
  new GalleryImage ('Apple Blossoms', 'assets/Paintings/Apple Blossoms.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
