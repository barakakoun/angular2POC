import { Component } from '@angular/core';

import { Report } from './report';


const REPORTS: Report[] = [
    { text: 'דיווח ראשון', category: "דחוף", time: '6/9/2016 10:6', img: 'drake', xCord: 11, yCord: 111 },
    { text: 'דיווח שני', category: "רגיל", time: '6/10/2016 10:6', img: 'eminem', xCord: 22, yCord: 222 },
    { text: 'דיווח שלישי', category: "דחוף", time: '6/11/2016 10:6', img: 'lamar', xCord: 33, yCord: 333 },
    { text: 'דיווח רביעי', category: "חשוב", time: '30/11/2016 10:6', img: 'kanye', xCord: 44, yCord: 444 }
];

@Component({
  selector: 'my-app',
  template: `
    <md-grid-list cols="4" rowHeight="355px">
       <md-grid-tile colspan="1" rowspan="2" style="background-color: rgba(0, 178, 217, 0.62); overflow-y:auto;">
       
        <report-details [report]="selectedReport" [reports]="reports" (outputEvent)="onSelectedChange($event)" style="width:100%;"></report-details>
       
       </md-grid-tile>
       <md-grid-tile colspan="3" rowspan="1" style="background-color: rgba(0, 178, 217, 0.62);">
        <report-create [report]="selectedReport" [reports]="reports"></report-create>
       
       </md-grid-tile>
       <md-grid-tile colspan="2" rowspan="1" style="background-color: rgba(128, 0, 128, 0.84);">
מפת דיווחים
        </md-grid-tile>
       <md-grid-tile colspan="1" rowspan="1" style="background-color: rgba(0, 178, 217, 0.62);">
        ניטור


</md-grid-tile>
    </md-grid-list>
    
    
  `,
  styles: [`
md-grid-tile figure {
color: pink;
display: block !important;
}
  `]
})
export class AppComponent {
  reports: Report[] = REPORTS;
  
  selectedReport: Report;
  
    tryText: string = "hry";

  onSelect(report: Report): void {
    this.selectedReport = report;
  }

//    onSelectedChange(value){
    onSelectedChange(value: Report){
        this.selectedReport = value;
    }
}
