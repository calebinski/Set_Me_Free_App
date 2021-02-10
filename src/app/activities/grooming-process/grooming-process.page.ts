import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grooming-process',
  templateUrl: './grooming-process.page.html',
  styleUrls: ['./grooming-process.page.scss'],
})
export class GroomingProcessPage implements OnInit {
  groomingSteps: string[] = [
    "They <b>target</b> you.",
    "They gain your <b>trust</b>",
    "They <b>fill</b> a need.",
    "They <b>isolate</b> you.",
    "They <b>sexualize</b> the individual.",
    "They <b>maintain</b> control."
  ];
  shuffledList: {groomingStep: string, order: number}[] = [];
  answerOrder: string = "";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>)
  {
    this.groomingSteps = ev.detail.complete(this.groomingSteps);
    console.log("After complete: ", this.groomingSteps);
  }

  ionViewWillEnter()
  {
    this.shuffleOrder(this.groomingSteps);
  }

  //randomize order of steps
  shuffleOrder(stepList)
  {
    var currentIndex = stepList.length, temporaryValue, randomIndex;

    while(0 != currentIndex)
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = stepList[currentIndex];
      stepList[currentIndex] = stepList[randomIndex];
      stepList[randomIndex] = temporaryValue;
    }

    return stepList;
  }

  submitForm()
  {
    for(let i = 0; i < this.groomingSteps.length; i++)
    {
      if(i == 0)
      {
        this.answerOrder = this.groomingSteps[i];
      }
      else
      {
        this.answerOrder = this.answerOrder.concat("," + this.groomingSteps[i]);
      }
    }
    console.log("Order to be submitted: ", this.answerOrder);

    let currentDate: Date = new Date();
      let postData = {
        "Answer" : this.answerOrder,
        "DateTimeAnswered" : currentDate.toISOString()
      };

      this.httpClient.post("https://setmefreeapi.azurewebsites.net/api/GroomingStepAnswers", postData)
      .subscribe((response) => {
        console.log("Response: ", response);
      });

    alert("Answer submitted!");
    var element = <HTMLInputElement> document.getElementById("submitBtn");
    element.disabled = true;
  }
}
