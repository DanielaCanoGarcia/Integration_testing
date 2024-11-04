export class Media {
    getMedia(datalist: string[], n: number): number {
      let media = 0;
      let arrData: number[] = new Array(n);
      for (let i = 0; i < n; i++) {
        arrData[i] = parseFloat(datalist[i]);
      }
      
      for (let j = 0; j < n; j++) {
        media += arrData[j];
      }
  
      media /= n;
      media = parseFloat(media.toFixed(2)); // Redondear a 2 decimales
      return media;
    }
  }
  