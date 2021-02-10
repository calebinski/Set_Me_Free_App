import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myth-vs-fact',
  templateUrl: './myth-vs-fact.page.html',
  styleUrls: ['./myth-vs-fact.page.scss'],
})
export class MythVsFactPage implements OnInit {
  entries: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.entries = this.http.get('https://setmefreeapi.azurewebsites.net/api/MythFacts');
  }

  ionViewDidEnter()
  {
    this.entries.subscribe(data => {
      var deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.deleteEntry(evt, button, "Delete"));
      });
    });
  }

  async deleteEntry(event: Event, button: Element, answer: string)
  {
    var txtStatement = <HTMLInputElement>document.getElementById('txtStatement');
    var radMythFact = <HTMLInputElement>document.getElementById('radMythFact');
    var txtAnswer = <HTMLInputElement>document.getElementById('txtAnswer');

    var buttonID: string;

    if(answer == 'Delete')
    {
      buttonID = button.id.replace('delete-', '');

      this.http.delete('https://setmefreeapi.azurewebsites.net/api/MythFacts/'+buttonID)
      .subscribe((response) => {
        console.log("Response:", response);
        alert("Entry deleted. Please refresh page to see updated list of entries.");
        txtStatement.value = "";
        txtAnswer.value = "";
        radMythFact.value = "";
      });
    }

    
  }

  setEntries()
  {
    this.entries = this.http.get('https://setmefreeapi.azurewebsites.net/api/MythFacts');
  }

  subscribeEntries()
  {
    this.entries.subscribe(data => {
      var deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.deleteEntry(evt, button, "Delete"));
      });
    });
  }

  async submitForm()
  {
    var txtStatement = <HTMLInputElement>document.getElementById('txtStatement');
    var radMythFact = <HTMLInputElement>document.getElementById('radMythFact');
    var txtAnswer = <HTMLInputElement>document.getElementById('txtAnswer');

    let postData = {
      "Statement" : txtStatement.value,
      "Answer" : txtAnswer.value,
      "MythOrFact" : radMythFact.value
    };

    this.http.post('https://setmefreeapi.azurewebsites.net/api/MythFacts', postData)
    .subscribe((response) => {
      console.log("Response:", response);
      alert("Entry created. Please refresh page to see updated list of entries.");
      txtStatement.value = "";
      txtAnswer.value = "";
      radMythFact.value = "";
    });

    
  }
}
