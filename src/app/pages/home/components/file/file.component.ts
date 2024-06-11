import { Component } from '@angular/core';
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

}
