import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url = 'https://vlkg23nvl4.execute-api.us-east-1.amazonaws.com/v2/get-images';

  constructor() {}

  async getImages(): Promise<any[]> {
    let response = {
      images: [
        {
          id: 1,
          filename: 'imagen.jpg',
          url: 'https://bucket-project2-epn.s3.amazonaws.com/imagen.jpg',
          contentType: 'image/jpeg',
          descripcion: '',
        },
        {
          id: 2,
          filename: 'imagen1.jpg',
          url: 'https://bucket-project2-epn.s3.amazonaws.com/imagen1.jpg',
          contentType: 'image/jpeg',
          descripcion: 'Descripcion imagen',
        },
      ],
    };

    return [];
  }
}
