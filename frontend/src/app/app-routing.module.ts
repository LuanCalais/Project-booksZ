import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { BooksCrudComponent } from './view/books-crud/books-crud.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},
{
  path: "books",
  component: BooksCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
