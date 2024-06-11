import { Component } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { FileComponent } from '../file/file.component';

@Component({
  selector: 'app-showfiles',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    FileComponent
  ],
  templateUrl: './showfiles.component.html',
  styleUrl: './showfiles.component.scss'
})
export class ShowfilesComponent {
  panelOpenState = false;
}
