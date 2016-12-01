import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { ReportCreateComponent } from './report-create.component';
import { ReportDetailsComponent } from './report-details.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [ 
    AppComponent, 
    ReportCreateComponent,
      ReportDetailsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
