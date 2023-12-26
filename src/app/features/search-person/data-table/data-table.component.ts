import {Component, Input} from '@angular/core';
import {PersonModel} from "../../../core/model/person.model";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {


  @Input("data") data: PersonModel [] = [];

  columns: string [] = ['firstName', 'lastName', 'email', 'productNumber', 'productsNames']

}
