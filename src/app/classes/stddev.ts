import { Media } from './media'
export class Stddev {
    media: Media;

  constructor() {
    this.media = new Media();
  }

  getStddev(dataList: string[], n: number): number {
    let desv = 0;
    let arrData: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
      arrData[i] = parseFloat(dataList[i]);
    }
    
    for (let j = 0; j < n; j++) {
      desv += Math.pow(arrData[j] - this.media.getMedia(dataList, n), 2);
    }

    desv /= (n - 1);
    desv = Math.sqrt(desv);
    desv = parseFloat(desv.toFixed(2));

    return desv;
  }
}