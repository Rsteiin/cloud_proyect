import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-file',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {
  @Input() url_image = "";
  @Input() name_image = "";
  @Input() type_image = "";

  descargarImagen() {
    const nombreArchivo = 'imagen.jpg'; // Puedes cambiar el nombre del archivo si lo deseas
    const url = this.url_image; // Obteniendo la URL de la imagen desde el atributo de la clase

    // Crear un enlace de descarga oculto
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = url;
    enlaceDescarga.download = nombreArchivo;

    // Simular clic en el enlace de descarga para iniciar la descarga
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
  }

  copiarUrlImagen() {
    const url = this.url_image;

    // Copiar la URL al portapapeles
    navigator.clipboard.writeText(url).then(() => {
      console.log('URL copiada al portapapeles: ' + url);
    }, (err) => {
      console.error('Error al copiar la URL al portapapeles: ', err);
    });
  }
}
