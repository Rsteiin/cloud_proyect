import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../../../../image.service';
import { MatInputModule } from '@angular/material/input';
import { 
  MatSnackBar,   
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';

@Component({
  imports: [MatDialogModule, FormsModule,MatInputModule],
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  filename: string = '';
  file: string = '';
  contentType: string = 'image/jpeg';
  descripcion: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<DialogComponent>,
    private imageService: ImageService,
    private _snackBar: MatSnackBar
  ) {
    dialog.disableClose = true;
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.file = e.target.result.split(',')[1]; // Get base64 encoded string
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit() {
    if (this.filename && this.file && this.contentType && this.descripcion) {
      const response = await this.imageService.uploadImage(this.filename, this.file, this.contentType, this.descripcion);
      this.onClosed();
      window.location.reload(); 
      console.log(response);
      if(response?.message === "Image uploaded successfully"){
        this.openSnackBar("Imagen guardada", "ok");

      }
    }
  }

  onClosed(): void {
    this.dialog.close();
  }

  onCancel(): void {
    this.dialog.close();
  }

  onUpload(): void {
    // Implement upload logic here
    this.dialog.close();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:5000
    });
  }
}
