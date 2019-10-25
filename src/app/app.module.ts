import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDefaultComponent } from './components/input-default/input-default.component';
import { ResultTableComponent } from './components/result-table/result-table.component';
import { MainPageComponent } from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {TemperaturePipe} from './pipes/temperature.pipe';
import { RowElementComponent } from './components/row-element/row-element.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDefaultComponent,
    ResultTableComponent,
    MainPageComponent,
    TemperaturePipe,
    RowElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
