import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Report } from './report';


@Component({
  selector: 'report-details',
  template: `
        <ul class="reports" id="ul-reports">
          <li *ngFor="let report of reports"
            [class.selected]="report === selectedReport">

            <md-card>
               <md-card-header>
                  <img md-card-avatar src="images/{{report.img}}.jpg">
                  <md-card-title>{{report.time}}</md-card-title>
                  <md-card-subtitle>{{report.text}}</md-card-subtitle>
               </md-card-header>
               <md-card-content>
                  <p>{{report.category}}</p>
               </md-card-content>
                <button md-raised-button class="btnActions" (click)="onRemove(report)">מחיקה</button>
                <button md-raised-button class="btnActions" (click)="onSelect(report)">עריכה</button>
                <md-input *ngIf="selectedReport" class="reportText" required placeholder="הדיווח" [(ngModel)]="selectedReport.text"></md-input>
            </md-card>

          </li>
        </ul>
  `,
  styles: [`

    .selected {
      background-color: rgba(0, 178, 217, 0.62) !important;
      color: white;
    }
    .btnActions {
        background-color: rgba(0, 16, 255, 0.53);
        color: white;
    }
    .reports {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    #ul-reports {
        width:100%;
        background-color: inherit;
        padding-top: 80px !important;
        height: 100% !important;
    }
    .reports li {
//      cursor: pointer;
      position: relative;
      left: 0;
      margin: .5em;
      padding: .3em 0;
      border-radius: 4px;
    }
    .reports li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .reports li:hover {
//      color: #607D8B;
//      background-color: #DDD;
//      left: .1em;
    }
    .reports .text {
      position: relative;
      top: -3px;
    }
    .reports .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class ReportDetailsComponent {
    @Input()
    reports: Report[];
    @Input()
    report: Report;
     @Output() outputEvent: EventEmitter<Report>=new EventEmitter();
     @Output() inputDataChange=new EventEmitter();
    
    onSelect(value: Report){
        this.outputEvent.emit(value);
    }
     
     onRemove(value : Report){
         var index = this.reports.indexOf(value);
         this.reports.splice(index, 1);
     }
     
     
}
