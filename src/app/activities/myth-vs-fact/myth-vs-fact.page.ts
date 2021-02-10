import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-myth-vs-fact',
  templateUrl: './myth-vs-fact.page.html',
  styleUrls: ['./myth-vs-fact.page.scss'],
})
export class MythVsFactPage implements OnInit {
  cards: Observable<any>;

  constructor(
    private httpClient: HttpClient
  ){
  }

  ngOnInit() {
    
  }

  flipCard()
  {
    var card = document.getElementById('card');
    card.classList.toggle('flipped');
  }

  ionViewDidEnter(){
    console.log("Did Enter.");

    this.cards.subscribe(data => {
      console.log('My data: ', data);

      var mythButtons = document.querySelectorAll('.myth');
      mythButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.answerQuestion(evt, button, "Myth"));
      });

      var factButtons = document.querySelectorAll('.fact');
      factButtons.forEach(button => {
        button.addEventListener('click', (evt) => this.answerQuestion(evt, button, "Fact"));
      });
    });
  }

  answerQuestion(event: Event, button: Element, answer: string)
  {
    var buttonID: string;

    //flip card
    if(answer == "Fact")
    {
      buttonID = button.id.replace('fact-', '');
      var card = document.getElementById('card-' + buttonID);
      card.classList.toggle('is-flipped');
    }
    else
    {
      buttonID = button.id.replace('myth-', '');
      var card = document.getElementById('card-' + buttonID);
      card.classList.toggle('is-flipped');
    }
    

    //make post request
    let currentDate: Date = new Date();

    let postData = {
      "DateTimeAnswered" : currentDate.toISOString(),
      "QuestionID" : buttonID,
      "Answer" : answer
    };

    this.httpClient.post('https://setmefreeapi.azurewebsites.net/api/MythFactAnswers', postData)
    .subscribe((response) => {
      console.log("Response: ", response);
    });
  }

  ionViewWillEnter()
  {
    console.log("On Will Enter.");
    this.cards = this.httpClient.get('https://setmefreeapi.azurewebsites.net/api/MythFacts'); 
  }
}
