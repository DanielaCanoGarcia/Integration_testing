import { Media } from './media';

export class Stddev {
  media: Media;

  constructor() {
    this.media = new Media();
  }

  getStddev(dataList: string, n: number): number {
    let desv = 0;
    // Dividir la cadena en un array de números
    let arrData = dataList.split(',').map(item => parseFloat(item.trim()));

    // Asegurarse de que la longitud del array es la esperada
    if (arrData.length !== n) {
      console.error('La longitud de los datos no coincide con el valor n proporcionado.');
      return 0;
    }

    // Calcular la desviación estándar
    for (let j = 0; j < n; j++) {
      desv += Math.pow(arrData[j] - this.media.getMedia(arrData, n), 2);
    }

    desv /= (n - 1);
    desv = Math.sqrt(desv);
    desv = parseFloat(desv.toFixed(2));

    return desv;
  }
}
