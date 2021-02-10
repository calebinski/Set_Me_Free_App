import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.page.html',
  styleUrls: ['./guess-who.page.scss'],
})
export class GuessWhoPage implements OnInit {
  private file: File;
  private base64String: string = "";
  objectURL: any;
  traffickers: Observable<any>;
  traffickerPictures: {picture: string, pictureID: number}[] = [];
  base64TrimmedURL: string;
  base64DefaultURL: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.traffickers = this.httpClient.get('https://setmefreeapi.azurewebsites.net/api/GuessWhoes');
    this.traffickers.subscribe(data => {
      for(let pic of data)
      {
        this.getImage(pic.picture, pic.id);
      }
    });
  }

  ionViewDidEnter()
  {
    this.traffickers.subscribe(data => {
      var deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.deleteEntry(evt, button));
      });
    });
  }

  async deleteEntry(event: Event, button: Element)
  {
    var buttonID: string = button.id.replace('delete-', '');

    this.httpClient.delete('https://setmefreeapi.azurewebsites.net/api/GuessWhoes/'+buttonID)
    .subscribe((response) => {
      console.log("Response:", response);
      alert("Picture deleted. Please refresh the page to see updated list of pictures.");
    });

    
  }

  onFileChange(event){
    this.file = event.target.files[0];
    console.log("File: ", this.file);

    var self = this;

    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = function() {
      console.log(reader.result);

      self.objectURL = URL.createObjectURL(self.convertDataUrlToBlob(reader.result));
      self.base64String = reader.result.toString();
    };

    reader.onerror = function(error) {
      console.log("Error Uploading File: ", error);
      alert("Error uploading file.");
    };
  }

  //allows file to be output as image
  convertDataUrlToBlob(dataUrl): Blob {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], {type: mime});
  }

  async submitForm()
  {
    if(this.base64String == "")
    {
      alert("No file selected.");
      return;
    }

    let postData = {
      "Picture" : this.base64String,
      "Rating" : 0
    };

    this.httpClient.post("https://setmefreeapi.azurewebsites.net/api/GuessWhoes", postData)
    .subscribe((response) => {
      console.log("Response: ", response);
      alert("Picture uploaded. Please refresh the page to see the updated list of pictures.")
      this.objectURL = "";
    });

    
  }  

  getImage(imageUrl: string, id: number) {
    this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.base64TrimmedURL = base64Data;
      this.createBlobImageFileAndShow(id);
    });
  }

  /* Method to fetch image from Url */
  getBase64ImageFromURL(url: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = err => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  /* Method to create base64Data Url from fetched image */
  getBase64Image(img: HTMLImageElement): string {
    // We create a HTML canvas object that will create a 2d image
    var canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    let dataURL: string = canvas.toDataURL("image/png");
    this.base64DefaultURL = dataURL;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  /**Method that will create Blob and show in new window */
  createBlobImageFileAndShow(id: number): void {
    this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      const imageFile: File = new File([imageBlob], imageName, {
        type: "image/jpeg"
      });
      //this.generatedImage = window.URL.createObjectURL(imageFile);
      let generatedImage = window.URL.createObjectURL(imageFile);
      //window.open(this.generatedImage);
      let newPicture : {picture: string, pictureID: number} = {picture : generatedImage, pictureID : id};
      this.traffickerPictures.push(newPicture);
    });
  }

  /* Method to convert Base64Data Url as Image Blob */
  dataURItoBlob(dataURI: string): Observable<Blob> {
    return Observable.create((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: "image/jpeg" });
      observer.next(blob);
      observer.complete();
    });
  }
  
  /**Method to Generate a Name for the Image */
  generateName(): string {
    const date: number = new Date().valueOf();
    let text: string = "";
    const possibleText: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(
        Math.floor(Math.random() * possibleText.length)
      );
    }
    // Replace extension according to your media type like this
    return date + "." + text + ".jpeg";
  }
}