import { Component } from '@angular/core';
import { Stddev } from '../classes/stddev';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {
  stddev = new Stddev();
  result: number = 0;
  datalist: string = ''; 

  constructor() {
    this.stddev = new Stddev();
  }

  getStddev(): void {
    const datalistArray = this.datalist.split(',').map(item => parseFloat(item.trim()));
    this.result = this.stddev.getStddev(datalistArray.join(','), datalistArray.length);
  }
}
