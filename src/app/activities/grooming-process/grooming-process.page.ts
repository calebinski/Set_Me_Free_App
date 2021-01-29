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
  groomingSteps: Observable<any>;
  shuffledList: {groomingStep: string, order: number}[] = [];
  answerOrder: string = "";
  
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>)
  {
    this.shuffledList = ev.detail.complete(this.shuffledList);
    console.log("After complete: ", this.shuffledList);
  }

  ionViewWillEnter()
  {
    this.groomingSteps = this.httpClient.get('https://localhost:44380/api/GroomingSteps');
    this.groomingSteps.subscribe(data => {
      for(let i = 0; i < data.length; i++)
      {
        let newStep: {groomingStep: string, order: number} = {groomingStep: data[i].groomingStep, order: data[i].id};
        this.shuffledList.push(newStep);
      }

      this.shuffleOrder(this.shuffledList);
      console.log("Post-shuffled list: ", this.shuffledList)
    });
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
    for(let i = 0; i < this.shuffledList.length; i++)
    {
      if(i == 0)
      {
        this.answerOrder = this.shuffledList[i].order.toString();
      }
      else
      {
        this.answerOrder = this.answerOrder.concat("," + this.shuffledList[i].order.toString());
      }
    }
    console.log("Order to be submitted: ", this.answerOrder);

    let currentDate: Date = new Date();
      let postData = {
        "Answer" : this.answerOrder,
        "DateTimeAnswered" : currentDate.toISOString()
      };

      this.httpClient.post("https://localhost:44380/api/GroomingStepAnswers", postData)
      .subscribe((response) => {
        console.log("Response: ", response);
      });

    alert("Answer submitted!");
    var element = <HTMLInputElement> document.getElementById("submitBtn");
    element.disabled = true;
  }
}
