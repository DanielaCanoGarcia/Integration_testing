import { Component } from '@angular/core';
import { Media } from './../classes/media';

@Component({
  selector: 'app-media',
  standalone: true,
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  media: Media;
  constructor() {
    this.media = new Media();
  }

  getMedia(datalist: string[], n: number): number {
    return this.media.getMedia(datalist, n);
  }
}
