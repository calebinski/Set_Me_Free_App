import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.page.html',
  styleUrls: ['./guess-who.page.scss'],
})
export class GuessWhoPage implements OnInit {
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
      //console.log("Traffickers: ", data);
      for(let pic of data)
      {
        //console.log("Pic url: ", pic.picture);
        this.getImage(pic.picture, pic.id);
      }
    });
  }

  async submitForm()
  {
    alert("Answers submitted!");

    for(let picture of this.traffickerPictures)
    {
      var radioElement = <HTMLInputElement> document.getElementById('isTrafficker-'+picture.pictureID);

      let currentDate: Date = new Date();
      let postData = {
        "PictureID" : picture.pictureID,
        "Rating" : +radioElement.value,
        "DateTimeAnswered" : currentDate.toISOString()
      };

      this.httpClient.post("https://setmefreeapi.azurewebsites.net/api/GuessWhoAnswers", postData)
      .subscribe((response) => {
        console.log("Response: ", response);
      });
    }

    var element = <HTMLInputElement> document.getElementById("submitBtn");
    element.disabled = true;
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
