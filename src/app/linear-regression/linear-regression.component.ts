import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReadFileService } from '../classes/readFile';
import { LinearRegression } from '../classes/linearRegression';

@Component({
  selector: 'app-linear-regression',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css'],
  providers: [HttpClient, ReadFileService]
})
export class LinearRegressionComponent {
  readFilex: ReadFileService;
  readFiley: ReadFileService;
  linearRegression: LinearRegression;

  constructor(private http: HttpClient, private readFileService: ReadFileService) {
    this.readFilex = new ReadFileService(this.http);
    this.readFiley = new ReadFileService(this.http);
    this.linearRegression = new LinearRegression();
  }

  setupLinearRegression(fileContentX: string[], fileContentY1: string[]) {
    this.linearRegression.sumX(fileContentX);
    this.linearRegression.sumY(fileContentY1);
    this.linearRegression.sumXY(fileContentX, fileContentY1);
    this.linearRegression.sumXX(fileContentX);
    this.linearRegression.sumYY(fileContentY1);
    this.linearRegression.getAvgX(fileContentX);
    this.linearRegression.getAvgY(fileContentY1);
  }

  async b0(data1: string, data2: string): Promise<number> {
    const x = await this.readFilex.readFile(data1);
    const y = await this.readFiley.readFile(data2);
    this.setupLinearRegression(x, y);
    return this.linearRegression.getB0();
  }

  async b1(data1: string, data2: string): Promise<number> {
    const x = await this.readFilex.readFile(data1);
    const y = await this.readFiley.readFile(data2);
    this.setupLinearRegression(x, y);
    return this.linearRegression.getB1();
  }

  async yk(data1: string, data2: string): Promise<number> {
    const x = await this.readFilex.readFile(data1);
    const y = await this.readFiley.readFile(data2);
    this.setupLinearRegression(x, y);
    return this.linearRegression.getYk();
  }
}
