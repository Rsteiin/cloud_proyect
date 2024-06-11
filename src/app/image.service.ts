import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  url = 'https://vlkg23nvl4.execute-api.us-east-1.amazonaws.com/v2/get-images';
  url_delete = 'https://vlkg23nvl4.execute-api.us-east-1.amazonaws.com/v2/delete-image';
  url_upload =  'https://vlkg23nvl4.execute-api.us-east-1.amazonaws.com/v2/save-image'

  constructor() {}

    async getImages(): Promise<any[]> {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'get-images',
        }),
      });
  
      const data = await response.json();
      return data.images || [];
    }

    async deleteImage(image_name:string): Promise<any[]> {
      const response = await fetch(this.url_delete, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "action": "delete",
          "filename": image_name
        }),
      });
  
      const data = await response.json();
      return data.images || [];
    }

    async uploadImage(filename: string, file: string, contentType: string, descripcion: string): Promise<any> {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'upload',
          filename: filename,
          file: file,
          contentType: contentType,
          descripcion: descripcion,
        }),
      });
  
      const data = await response.json();
      return data;
    }
}
