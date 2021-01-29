import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.page.html',
  styleUrls: ['./guess-who.page.scss'],
})
export class GuessWhoPage implements OnInit {
  private file: File;
  private base64String: string = "";
  objectURL: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
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

    this.httpClient.post("https://localhost:44380/api/GuessWhoes", postData)
    .subscribe((response) => {
      console.log("Response: ", response);
    });

    this.objectURL = "";
  }  
}
