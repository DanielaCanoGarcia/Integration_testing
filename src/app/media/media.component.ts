import { Component } from '@angular/core';
import { Media } from './../classes/media';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  media: Media;
  result: number = 0;
  datalist: string = '';

  constructor() {
    this.media = new Media();
  }

  getMedia(): void {
    const datalistArray = this.datalist.split(',').map(item => parseFloat(item.trim()));
    this.result = this.media.getMedia(datalistArray, datalistArray.length);
  }
}
