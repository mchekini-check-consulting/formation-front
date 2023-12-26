import {HttpClient} from "@angular/common/http";
import {SearchModel} from "../model/search.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {PersonModel} from "../model/person.model";

@Injectable({
  providedIn: "root"
})
export class PersonService {


  constructor(private http: HttpClient) {
  }


  searchPersonByCriteria(criteria: SearchModel): Observable<PersonModel[]> {
    return this.http.post<PersonModel[]>("api/v1/person/search", criteria);
  }
}
