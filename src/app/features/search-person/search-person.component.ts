import {Component} from '@angular/core';
import {SearchModel} from "../../core/model/search.model";
import {PersonService} from "../../core/services/person.service";
import {PersonModel} from "../../core/model/person.model";

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.css']
})
export class SearchPersonComponent {

  data : PersonModel[] = [];


  constructor(private personService: PersonService) {
  }

  search(criteria: SearchModel) {
    this.personService.searchPersonByCriteria(criteria).subscribe(resp => {
      this.data = resp;
    });

  }
}
