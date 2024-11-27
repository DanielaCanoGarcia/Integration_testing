import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, MediaComponent], // Importar en lugar de declarar
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return media = 550.6 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const input = '160,591,114,229,230,270,128,1657,624,1503';
    component.datalist = input;
    component.getMedia();
    expect(component.result).toBe(550.6);
  });

  it('should return media = 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const input = '15.0,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2';
    component.datalist = input;
    component.getMedia();
    expect(component.result).toBe(60.32);
  });
});
