import { HttpClient } from '@angular/common/http';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trustworthy-person',
  templateUrl: './trustworthy-person.page.html',
  styleUrls: ['./trustworthy-person.page.scss'],
})
export class TrustworthyPersonPage implements OnInit {
  trustworthyStories: Observable<any>;
  stories: {id: number, title: string, parts: number[]}[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.trustworthyStories = this.http.get('https://setmefreeapi.azurewebsites.net/api/TrustworthyPersons');
    this.trustworthyStories.subscribe(data => {
      console.log("Stories:", data);

      for(let story of data)
      {
        let tempArray : number[] = []
        for(let i = 0; i < story.parts; i++)
        {
          tempArray.push(i+1);
        }
        let storyData : {id: number, title: string, parts: number[]} = {id: story.id, title: story.title, parts: tempArray};
        this.stories.push(storyData);
      }
    });
  }

  async submitForm()
  {
    var answerString: string = "";
    var tempArray: string[] = [];

    for(let story of this.stories)
    {
      var rangeElements = document.getElementsByClassName('rating-'+story.id);
      for(let i = 0; i < rangeElements.length; i++)
      {
        var element = <HTMLInputElement> rangeElements.item(i);

        let tempString = "[S"+story.id+"-P"+(i+1)+"-V"+element.value+"]";
        tempArray.push(tempString);
      }
    }

    console.log("Temp Array:", tempArray);
    for(let i = 0; i < tempArray.length; i++)
    {
      if(i == 0)
      {
        answerString = tempArray[i];
      }
      else
      {
        answerString = answerString.concat("," + tempArray[i]);
      }
    }
    console.log("Answer String:", answerString);

    let postData = {
      "Answer" : answerString,
      "DateTimeAnswered" : new Date().toISOString()
    };

    this.http.post("https://setmefreeapi.azurewebsites.net/api/TrustworthyPersonAnswers", postData)
      .subscribe((response) => {
        console.log("Response: ", response);
      });

    alert("Answer Submitted!");
    var element = <HTMLInputElement> document.getElementById("submitBtn");
    element.disabled = true;
  }
}
