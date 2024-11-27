export class Media {
  getMedia(datalist: number[], n: number): number {
    let media = 0;

    // Calcular la suma de los números en el array
    for (let i = 0; i < n; i++) {
      media += datalist[i];
    }

    // Calcular la media
    media /= n;
    media = parseFloat(media.toFixed(2));
    return media;
  }
}
