/*import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { userLogged } from 'src/assets/_models/customer.model';
import { FileHandle } from 'src/assets/_models/file-handle.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingServiceService {

constructor(private sanitizer : DomSanitizer) { }

public createImage(userOnline : userLogged){
  const userImage : any[] = userOnline.img;
  const userImageToFileHandle : FileHandle[] = [];

  for(let i = 0; i< userImage.length; i++){
    const imageFileData = userImage[i];
    const imageBlob = this.dataURLtoBlob(imageFileData.content, imageFileData.mime);
    const imageFile = new File([imageBlob], imageFileData.name, {type: imageFileData.mime});
    const fileHandle : FileHandle = {
      file : imageFile,
      url : this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(imageFile))
    };
    userImageToFileHandle.push(fileHandle);
  }
  userOnline.img = userImageToFileHandle;
  return userOnline;
}

public dataURLtoBlob(content: string, mime: any){
  const byteString = window.atob(content);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);

  for(let i = 0; i< byteString.length; i++){
   int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], {type: mime});
  return blob;
}
}
*/