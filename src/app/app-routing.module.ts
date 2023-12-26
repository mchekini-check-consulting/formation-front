import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchPersonComponent} from "./features/search-person/search-person.component";
import {Feature2Component} from "./features/feature2/feature2.component";
import {Feature3Component} from "./features/feature3/feature3.component";
import {MyGuard} from "./core/guard/feature2.guard";

const routes: Routes = [

  {path : 'recherche', component : SearchPersonComponent },
  {path : 'feature2', component : Feature2Component, canActivate : [MyGuard] },
  {path : 'feature3', component : Feature3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
