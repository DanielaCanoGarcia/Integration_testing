import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReadFileService } from '../classes/readFile';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let readFileService: ReadFileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, LinearRegressionComponent],
      providers: [ReadFileService]
    }).compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    readFileService = TestBed.inject(ReadFileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return b0 approximately -22.55 with the dataset Data_Test1', async () => {
    const result = await component.b0('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset Data_Test1', async () => {
    const result = await component.b1('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with the dataset Data_Test1 if x=386', async () => {
    const result = await component.yk('assets/x.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.039  with the dataset Data_Test2', async () => {
    const result = await component.b0('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(-4.039 , 2);
  });

  it('Should return b1 approximately 0.1681 with the dataset Data_Test2', async () => {
    const result = await component.b1('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.1681, 2);
  });

  it('Should return yk approximately 60.858 with the dataset Data_Test2 if x=386', async () => {
    const result = await component.yk('assets/x.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(60.858, 2);
  });

  it('Should return b0 approximately -23.92 with the dataset Data_Test3', async () => {
    const result = await component.b0('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('Should return b1 approximately 1.43097 with the dataset Data_Test3', async () => {
    const result = await component.b1('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with the dataset Data_Test3 if x=386', async () => {
    const result = await component.yk('assets/y1.txt', 'assets/y2.txt');
    expect(result).toBeCloseTo(528.4294, 2);
  });

  
  it('Should return b0 approximately -4.604 with the dataset Data_Test4', async () => {
    const result = await component.b0('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(-4.604, 2);
  });

  it('Should return b1 approximately 0.16064 with the dataset Data_Test4', async () => {
    const result = await component.b1('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(0.140164
      , 2);
  });

  it('Should return yk approximately 49.4994 with the dataset Data_Test4 if x=386', async () => {
    const result = await component.yk('assets/y1.txt', 'assets/y3.txt');
    expect(result).toBeCloseTo(49.4994, 2);
  });

});
