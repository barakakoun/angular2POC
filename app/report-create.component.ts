import { Component, Input } from '@angular/core';
import { Report } from './report';

@Component({
  selector: 'report-create',
    template: `
    <div *ngIf="!report">
        <md-input class="reportText" required placeholder="הדיווח" [(ngModel)]="newReport.text"></md-input>
        <select class="form-control reportText"  id="category"
                  required
                  [(ngModel)]="newReport.category" name="category">
            <option *ngFor="let category of categories" [value]="category">{{category}}</option>
          </select> 
        <select class="form-control reportText"  id="imgs"
                  required
                  [(ngModel)]="newReport.img" name="img">
            <option *ngFor="let img of imgs" [value]="img">{{img}}</option>
          </select> 
        <md-input class="reportText" type="number" placeholder="X" [(ngModel)]="newReport.xCord"></md-input>
        <md-input class="reportText" type="number" placeholder="Y" [(ngModel)]="newReport.yCord"></md-input>

            
        <br />
        <button md-raised-button class="btnActions" (click)="addReport()">סיים</button>

    </div>

    <div *ngIf="report">
        <md-input class="reportText" placeholder="הדיווח" [(ngModel)]="report.text"></md-input>
        <select class="form-control reportText"  id="category"
                  required
                  [(ngModel)]="report.category" name="category">
            <option *ngFor="let category of categories" [value]="category">{{category}}</option>
          </select> 
        <select class="form-control reportText"  id="imgs"
                  required
                  [(ngModel)]="newReport.img" name="img">
            <option *ngFor="let img of imgs" [value]="img">{{img}}</option>
          </select> 
        <md-input class="reportText" type="number" placeholder="X" [(ngModel)]="report.xCord"></md-input>
        <md-input class="reportText" type="number" placeholder="Y" [(ngModel)]="report.yCord"></md-input>
        <br />
        <button md-raised-button class="btnActions" (click)="saveReport()">שמור</button>
    </div>
      `,
    styles: [`
    .reportText {
      width: 51%;
    }
    .md-input{
        text-align: right;
    }
    .btnActions {
        background-color: rgba(0, 16, 255, 0.53);
        color: white;
    }
    `]
//  template: `
//    <div *ngIf="report">
//      <h2>{{report.text}} details!</h2>
//      <div><label>Time: </label>{{report.time}}</div>
//      <div>
//        <label>name: </label>
//        <input [(ngModel)]="report.text" placeholder="דיווח"/>
//      </div>
//    </div>
//    <input type="number" [(ngModel)]="newReport.category" >
//    <input type="text" [(ngModel)]="newReport.time" >
//    <input type="text" [(ngModel)]="newReport.img" >
//    <input type="number" [(ngModel)]="newReport.xCord" >
//    <input type="number" [(ngModel)]="newReport.yCord" >
//  `
})
export class ReportCreateComponent {
    
    @Input()
    report: Report;
    @Input()
    reports: Report[];
     @Input()
     tryTe: string;
     
     categories = ['רגיל', 'חשוב', 'דחוף'];
     
     imgs = ['eminem','drake','lamar','kanye'];
     
     
     newReport : Report = { text: '', category: this.categories[0], time: '', img: this.imgs[0], xCord: 0, yCord: 0 };

   addReport() {
    if (this.newReport) {
        var currDate = new Date();
        var time = (currDate).getDate().toString() + "/" + ((currDate).getMonth()+1).toString() + "/" + (currDate).getFullYear().toString() + " " + (currDate).getHours().toString() + ":" + (currDate).getMinutes().toString();
        this.newReport.time = time;
        
      this.reports.push(this.newReport);
      this.newReport = { text: '', category: this.categories[0], time: '', img: this.imgs[0], xCord: 0, yCord: 0 };
    }
  }
   saveReport() {
    this.report= null;
  }
}
