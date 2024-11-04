import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ReadFileService {
  fileContent: string[] = [];

  constructor(private http: HttpClient) {}

  readFile(filePath: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.http.get(filePath, { responseType: 'text' })
        .subscribe(
          data => {
            this.fileContent = this.processFileContent(data);
            console.log('File Content:', this.fileContent);
            resolve(this.fileContent);
          },
          error => {
            console.error('Error al leer el archivo:', error.message, 'Detalles:', error);
            reject(error);
          }
        );
    });
  }

  processFileContent(content: string): string[] {
    const cleanContent = content.replace(/\r/g, ''); // Eliminar caracteres \r
    return cleanContent.split('\n'); // Dividir contenido en líneas
  }
}
