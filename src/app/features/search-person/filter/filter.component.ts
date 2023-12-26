import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SearchModel} from "../../../core/model/search.model";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {


  constructor() {
    console.log("je suis le constructeur de filter component");
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.searchPersonByCriteria();
  }

  ngOnDestroy() {
    console.log("je suis dans le On Destroy du filter component");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ah, y'a un input qui change");
  }


  @Output("searchCriteria") searchCriteriaOutput = new EventEmitter<SearchModel>();

  searchCriteria = new SearchModel();

  myForm = new FormGroup({
    lastName: new FormControl(),
    firstName: new FormControl(),
    minAge: new FormControl(),
    maxAge : new FormControl(100)
  });

  searchPersonByCriteria() {
    this.searchCriteria.firstName = this.myForm.get("firstName")?.value;
    this.searchCriteria.lastName = this.myForm.get("lastName")?.value;
    this.searchCriteria.minAge = Number(this.myForm.get("minAge")?.value);
    this.searchCriteria.maxAge = Number(this.myForm.get("maxAge")?.value);
    this.searchCriteriaOutput.emit(this.searchCriteria);

  }

  resetForm() {
    this.myForm.controls["firstName"].reset();
    this.myForm.controls["lastName"].reset();
    this.myForm.controls["minAge"].reset();
    this.myForm.controls["maxAge"].reset(100);
    this.searchPersonByCriteria();
  }
}
