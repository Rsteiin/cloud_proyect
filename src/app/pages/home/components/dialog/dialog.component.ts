import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  imports: [MatDialogModule],
  standalone: true,
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialogRef<DialogComponent>) {
    dialog.disableClose = true;
    this.uploadForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      console.log('File selected:', file);

      // Perform any additional file processing here
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
}
