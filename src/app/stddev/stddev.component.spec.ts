import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, StddevComponent], // Importar en lugar de declarar
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return stddev = 572.03 if input is "160,591,114,229,230,270,128,1657,624,1503"', () => {
    component.datalist = '160,591,114,229,230,270,128,1657,624,1503';
    component.getStddev();
    expect(component.result).toBe(572.03);
  });

  it('should return stddev = 62.26 if input is "15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2"', () => {
    component.datalist = '15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2';
    component.getStddev();
    expect(component.result).toBe(62.26);
  });
});
