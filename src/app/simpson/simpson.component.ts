import { Component } from '@angular/core';
import { SimpsonIntegration } from '../classes/simpson';
@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrl: './simpson.component.css'
})
export class SimpsonComponent {

  private simpsonIntegration: SimpsonIntegration;

  constructor() {
    this.simpsonIntegration = new SimpsonIntegration();
  }

  // Ejemplo de uso de la función computeFinalValue
  public calculate(): void {
    const finalValue = this.simpsonIntegration.computeFinalValue(10, 0.01, 1, 5);
    console.log('Final Value:', finalValue);
  }
  
}
