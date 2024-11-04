import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LinearRegressionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-testing';
}
