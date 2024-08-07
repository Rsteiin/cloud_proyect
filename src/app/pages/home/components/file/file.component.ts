import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImageService } from '../../../../image.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss',
})
export class FileComponent {
  @Input() url_image = '';
  @Input() name_image = '';
  @Input() type_image = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private imgSrv: ImageService, private _snackBar: MatSnackBar) {}

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
    navigator.clipboard.writeText(url).then(
      () => {
        this.openSnackBar('URL copiada al portapapeles', "OK");
      },
      (err) => {
        console.error('Error al copiar la URL al portapapeles: ', err);
      }
    );
  }

  eliminarImagen() {
    this.imgSrv.deleteImage(this.name_image).then((res) => {
      this.openSnackBar(`Se ha eliminado la image${this.name_image}`, "OK");
      window.location.reload(); 
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
  }
}
