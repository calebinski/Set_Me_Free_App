import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trustworthy-person',
  templateUrl: './trustworthy-person.page.html',
  styleUrls: ['./trustworthy-person.page.scss'],
})
export class TrustworthyPersonPage implements OnInit {
  private storyTitle: string;
  private numOfSections: number;
  stories: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.stories = this.http.get('https://setmefreeapi.azurewebsites.net/api/TrustworthyPersons');
  }

  ionViewDidEnter()
  {
    this.stories.subscribe(data => {
      var deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.deleteEntry(evt, button));
      });
    });
  }

  deleteEntry(event: Event, button: Element)
  {
    var buttonID: string = button.id.replace('delete-', '');

    this.http.delete('https://setmefreeapi.azurewebsites.net/api/TrustworthyPersons/'+buttonID)
    .subscribe((response) => {
      console.log("Response:", response);
    });

    alert("Story deleted. Please refresh the page to see updated list.");
  }

  submitForm()
  {
    console.log("Title:", this.storyTitle);
    console.log("Number of sections:", this.numOfSections);

    if(this.storyTitle == "" || this.storyTitle == null ||
        this.numOfSections == null || this.numOfSections == 0)
    {
      alert("Warning: You must have a title and a valid number of sections.");
      return;
    }

    let postData = {
      "Title" : this.storyTitle,
      "Parts" : this.numOfSections
    };

    this.http.post("https://setmefreeapi.azurewebsites.net/api/TrustworthyPersons", postData)
    .subscribe((response) => {
      console.log("Response:", response);
    });

    alert("New story created. Please refresh the page to see the updated list.");

    this.storyTitle = "";
    this.numOfSections = null;
  }
}
