import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuissancePipe } from './core/pipes/carre.pipe';
import { BackgroundColorDirective } from './core/directives/background-color.directive';
import { SearchPersonComponent } from './features/search-person/search-person.component';
import { FilterComponent } from './features/search-person/filter/filter.component';
import { DataTableComponent } from './features/search-person/data-table/data-table.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import { Feature2Component } from './features/feature2/feature2.component';
import { Feature3Component } from './features/feature3/feature3.component';

@NgModule({
  declarations: [
    AppComponent,
    PuissancePipe,
    BackgroundColorDirective,
    SearchPersonComponent,
    FilterComponent,
    DataTableComponent,
    Feature2Component,
    Feature3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
