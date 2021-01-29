import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

interface BarChartDataset {
  label: string,
  backgroundColor: string,
  data: number[]
}

interface LineChartDataset{
  label: string,
  fill: boolean,
  lineTension: number,
  backgroundColor: string,
  borderColor: string,
  borderCapStyle: string,
  borderDashOffset: number,
  borderJoinStyle: string,
  pointBorderColor: string,
  pointBackgroundColor: string,
  pointBorderWidth: number,
  pointHoverRadius: number,
  pointHoverBackgroundColor: string,
  pointHoverBorderColor: string,
  pointHoverBorderWidth: number,
  pointRadius: number,
  pointHitRadius: number,
  data: number[],
  spanGaps: boolean
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  @ViewChild("barCanvas", {static: true}) barCanvas: ElementRef;
  @ViewChild("lineCanvas", {static: true}) lineCanvas: ElementRef;

  mythFacts: Observable<any>;
  mythFactsAnswers: Observable<any>;

  //bar chart variables
  barLabels: string[] = [];
  barDataSets: BarChartDataset[] = [];
  mythArray: number[] = [];
  factArray: number[] = [];

  //line chart variables
  dates: string[] = [];
  lineDataSets: LineChartDataset[] = [];

  private barChart: Chart;
  private lineChart: Chart;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.mythFacts = this.http.get('https://localhost:44380/api/MythFacts');
    this.mythFactsAnswers = this.http.get('https://localhost:44380/api/MythFactAnswers');

    this.mythFactsAnswers.subscribe(answerData => {
      console.log("Data:", answerData);

      //create bar for each question
      //step 1: create array of labels for each question
      for(let answer of answerData)
      {
        this.barLabels.push(answer.questionID);

        //for line chart
        this.dates.push(answer.dateTimeAnswered.substr(0, answer.dateTimeAnswered.indexOf('T')));
      }
      console.log("Pre-filtered barLabels:", this.barLabels);

      //step 2: filter repeated values
      const uniqueSet = new Set(this.barLabels);
      this.barLabels = [...uniqueSet];
      console.log("Post-filtered barLabels:", this.barLabels);

      //step 3: populate data arrays for each dataset
      for(let label of this.barLabels)
      {
        let tempFact: number = 0;
        let tempMyth: number = 0;
        for(let answer of answerData)
        {
          if(answer.questionID == label)
          {
            if(answer.answer == "Fact")
            {
              tempFact++;
            }
            else
            {
              tempMyth++;
            }
          }
        }

        this.factArray.push(tempFact);
        this.mythArray.push(tempMyth);

        console.log(label, this.factArray);
        console.log(label, this.mythArray);
      }

      //step 4: create and push new datasets to dataset array
      //create and push the fact dataset
      this.barDataSets.push({
        label: "Fact",
        backgroundColor: "red",
        data: this.factArray
      });
      //create and push the myth dataset
      this.barDataSets.push({
        label: "Myth",
        backgroundColor: "blue",
        data: this.mythArray
      });

      //populate bar chart
      var data = {
        labels: this.barLabels,
        datasets: this.barDataSets
      };

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: "bar",
        data: data,
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });

      //create line chart to show answers over time
      //each line represents a question
      //step 1: get filtered list of dates
      //this can be used for the labels array
      console.log("Pre-filtered Dates:", this.dates);
      const unique = new Set(this.dates);
      this.dates = [...unique];
      console.log("Post-Filtered Dates:", this.dates);
      
      //step 2: create the necessary datasets
      //there needs to be to datasets per question
      //one representing the number of myths over time
      //and one representing the number of truths over time

      
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: "line",
        data: {
          labels: this.dates,
          datasets: [
            {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40],
              spanGaps: false
            }
          ]
        }
      });
    });    
  }

  ionViewDidEnter()
  {
    this.mythFacts.subscribe(data => {
      console.log('MythFact data: ', data);
    });

    this.mythFactsAnswers.subscribe(data => {
      console.log('MythFactAnswers data: ', data);
    });
  }

  ionViewWillEnter()
  {
    
  }
}
