import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private router : Router) {

    const subject = new ReplaySubject(2);

    let i = 0;
    setInterval(()=> {
      subject.next(i);
      i++;
    }, 5000);


    subject.subscribe(resp => console.log("je suis le subscriber 1 : " +resp));


    setTimeout(()=>{
      subject.subscribe(resp => console.log("je suis le subscriber 2 : " +resp));
    }, 20000);


  }


  navigateTo(location: string) {
    this.router.navigateByUrl(location);

  }
}
