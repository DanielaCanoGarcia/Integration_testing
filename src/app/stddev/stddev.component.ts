import { Component } from '@angular/core';
import { Stddev } from '../classes/stddev';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})

export class StddevComponent {
  stddev = new Stddev();

  constructor() {
    this.stddev = new Stddev();
  }

  getStddev(dataList: string[], n: number): number {
    return this.stddev.getStddev(dataList, n);

  }
}
