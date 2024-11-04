export class LinearRegression {
    private dblSumX: number = 0;
    private dblSumY: number = 0;
    private dblSumXY: number = 0;
    private dblSumXX: number = 0;
    private dblSumYY: number = 0;
    private dblAvgX: number = 0;
    private dblAvgY: number = 0;
    private intN: number = 0;
    private dblB1: number = 0;
    private dblB0: number = 0;
    private dblXk: number = 386;
    private dblYk: number = 0;
  
    constructor() {}
  
    public sumX(datalistX: string[]): number {
      this.dblSumX = 0;
      datalistX.forEach(x => {
        this.dblSumX += parseFloat(x);
      });
      return this.dblSumX;
    }
  
    public sumY(datalistY: string[]): number {
      this.dblSumY = 0;
      datalistY.forEach(y => {
        this.dblSumY += parseFloat(y);
      });
      return this.dblSumY;
    }
  
    public sumXY(datalistX: string[], datalistY: string[]): number {
      this.dblSumXY = 0;
      for (let i = 0; i < datalistX.length; i++) {
        this.dblSumXY += parseFloat(datalistX[i]) * parseFloat(datalistY[i]);
      }
      return this.dblSumXY;
    }
  
    public sumXX(datalistX: string[]): number {
      this.dblSumXX = 0;
      datalistX.forEach(x => {
        this.dblSumXX += parseFloat(x) * parseFloat(x);
      });
      return this.dblSumXX;
    }
  
    public sumYY(datalistY: string[]): number {
      this.dblSumYY = 0;
      datalistY.forEach(y => {
        this.dblSumYY += parseFloat(y) * parseFloat(y);
      });
      return this.dblSumYY;
    }
  
    public getAvgX(datalistX: string[]): number {
      this.dblAvgX = 0;
      this.intN = datalistX.length;
      this.dblAvgX = this.dblSumX / this.intN;
      return this.dblAvgX;
    }
  
    public getAvgY(datalistY: string[]): number {
      this.dblAvgY = 0;
      this.intN = datalistY.length;
      this.dblAvgY = this.dblSumY / this.intN;
      return this.dblAvgY;
    }
  
    public getB0(): number {
      this.dblB0 = 0;
      this.dblB1 = 0;
      this.dblB1 = this.dblSumXY - (this.intN * this.dblAvgX * this.dblAvgY);
      this.dblB1 = this.dblB1 / (this.dblSumXX - (this.intN * this.dblAvgX * this.dblAvgX));
      this.dblB0 = this.dblAvgY - (this.dblAvgX * this.dblB1);
      this.dblB0 = parseFloat(this.dblB0.toFixed(4));
      return this.dblB0;
    }
  
    public getB1(): number {
      this.dblB1 = 0;
      this.dblB1 = this.dblSumXY - (this.intN * this.dblAvgX * this.dblAvgY);
      this.dblB1 = this.dblB1 / (this.dblSumXX - (this.intN * this.dblAvgX * this.dblAvgX));
      this.dblB1 = parseFloat(this.dblB1.toFixed(4));
      return this.dblB1;
    }
  
    public getYk(): number {
      this.dblYk = 0;
      this.dblB0 = 0;
      this.dblB1 = 0;
      this.dblB1 = this.dblSumXY - (this.intN * this.dblAvgX * this.dblAvgY);
      this.dblB1 = this.dblB1 / (this.dblSumXX - (this.intN * this.dblAvgX * this.dblAvgX));
      this.dblB0 = this.dblAvgY - (this.dblAvgX * this.dblB1);
      this.dblYk = this.dblB0 + (this.dblB1 * this.dblXk);
      this.dblYk = parseFloat(this.dblYk.toFixed(4));
      return this.dblYk;
    }
  }
  