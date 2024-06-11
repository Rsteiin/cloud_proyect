import { Component, OnInit } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { FileComponent } from '../file/file.component';
import { ImageService } from '../../../../image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showfiles',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    FileComponent,
    CommonModule
  ],
  templateUrl: './showfiles.component.html',
  styleUrl: './showfiles.component.scss'
})
export class ShowfilesComponent implements OnInit {
  panelOpenState = false;
  imagenes: any[] = [];
  constructor (
    private imgSrv: ImageService
  ){

  }

  ngOnInit(): void {
   this.imgSrv.getImages().then(res=>{
    this.imagenes = res;
   });
  }

}
