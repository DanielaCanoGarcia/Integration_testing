export class SimpsonIntegration {
    private intNumSeg: number = 0;
    private dblW: number = 0;
    private dblE: number = 0;
    private intDOF: number = 0;
    private dblX: number = 0;
    private dblTotXi: number[] = [];
    private dblFirstBaseTerms: number[] = [];
    private dblExponent: number[] = [];
    private dblCoeff: number = 0;
    private dblFxi: number[] = [];
    private dblFinalTerms: number = 0;
    private dblFTerms: number[] = [];
    private dblFinalValue: number = 0;
      
        constructor() {}
      
        computeW(intNumSeg: number, dblX: number): number {
          this.dblW = dblX / intNumSeg;
          console.log(this.dblW);
          return this.dblW;
        }
      
        computeXi(intNumSeg: number): number[] {
          this.dblTotXi = new Array(intNumSeg + 1).fill(0);
          for (let i = 1; i <= intNumSeg; i++) {
            this.dblTotXi[i] = this.dblTotXi[i - 1] + this.dblW;
            console.log("xi" + this.dblTotXi[i]);
          }
          return this.dblTotXi;
        }
      
        computeFirtsBaseTerms(intNumSeg: number, intDOF: number): number[] {
          this.dblFirstBaseTerms = new Array(intNumSeg + 1);
          for (let i = 0; i <= intNumSeg; i++) {
            this.dblFirstBaseTerms[i] = 1 + Math.pow(this.dblTotXi[i], 2) / intDOF;
            console.log("fbt" + this.dblFirstBaseTerms[i]);
          }
          return this.dblFirstBaseTerms;
        }
      
        computeExponent(intNumSeg: number, intDOF: number): number[] {
          this.dblExponent = new Array(intNumSeg + 1);
          for (let i = 0; i <= intNumSeg; i++) {
            this.dblExponent[i] = Math.pow(
              this.dblFirstBaseTerms[i],
              ((intDOF + 1) / 2) * -1
            );
            console.log("exp" + this.dblExponent[i]);
          }
          return this.dblExponent;
        }
      
        /*computeCoefficient(intDOF: number): number {
          const x = intDOF;
          const myGammaFunction = new GammaFunction();
          this.dblCoeff =
            Math.exp(myGammaFunction.computeDblGamma((x + 1) / 2)) /
            (Math.sqrt(x * Math.PI) *
              Math.exp(myGammaFunction.computeDblGamma(x / 2)));
          console.log(this.dblCoeff);
          return this.dblCoeff;
        }*/
      
        computeFxi(intNumSeg: number): number[] {
          this.dblFxi = new Array(intNumSeg + 1);
          for (let i = 0; i <= intNumSeg; i++) {
            this.dblFxi[i] = this.dblExponent[i] * this.dblCoeff;
            console.log("fxi" + this.dblFxi[i]);
          }
          return this.dblFxi;
        }
      
        computeFinalTerms(dblX: number, intNumSeg: number): number {
          this.dblFTerms = new Array(intNumSeg + 1);
          this.dblFinalTerms = 0;
          for (let i = 0; i <= intNumSeg; i++) {
            if (i === 0 || i === intNumSeg) {
              this.dblFTerms[i] = this.dblFxi[i] * 1 * (dblX / (3.0 * intNumSeg));
            } else if (i % 2 === 0) {
              this.dblFTerms[i] = this.dblFxi[i] * 2 * (dblX / (3.0 * intNumSeg));
            } else {
              this.dblFTerms[i] = this.dblFxi[i] * 4 * (dblX / (3.0 * intNumSeg));
            }
            console.log("ft" + this.dblFTerms[i]);
          }
          for (let i = 0; i <= intNumSeg; i++) {
            this.dblFinalTerms += this.dblFTerms[i];
          }
          console.log("ft" + this.dblFinalTerms);
          return this.dblFinalTerms;
        }
      
        computeFinalValue(intNumSeg: number, dblE: number, dblX: number, intDOF: number): number {
          let ME = new Array(intNumSeg + 1).fill(0);
          let rest = 0;
          let aux = 1;
          for (let i = aux; i <= intNumSeg / 10; i++) {
            ME[i] = this.dblFinalTerms;
            console.log("me" + ME[i]);
          }
          for (let j = 0; j <= intNumSeg - 1; j++) {
            rest = Math.abs(ME[j] - ME[j + 1]);
            console.log("rest" + rest);
          }
          do {
            intNumSeg += 10;
            ME = new Array(intNumSeg + 1).fill(0);
            this.computeW(intNumSeg, dblX);
            this.computeXi(intNumSeg);
            this.computeFirtsBaseTerms(intNumSeg, intDOF);
            this.computeExponent(intNumSeg, intDOF);
           // this.computeCoefficient(intDOF);
            this.computeFxi(intNumSeg);
            this.computeFinalTerms(dblX, intNumSeg);
            aux++;
            for (let i = aux; i <= intNumSeg / 10; i++) {
              ME[i] = this.dblFinalTerms;
              console.log("me" + ME[i]);
            }
            for (let j = 0; j <= intNumSeg - 1; j++) {
              rest = Math.abs(ME[j] - ME[j + 1]);
              console.log("rest" + rest);
            }
          } while (rest > dblE);
          this.dblFinalValue = this.dblFinalTerms;
          console.log("fv" + this.dblFinalValue);
          return this.dblFinalValue;
        }
      }
