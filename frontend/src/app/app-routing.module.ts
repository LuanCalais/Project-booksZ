import { BooksCreateComponent } from './components/books/books-create/books-create.component';
import { BooksDeleteComponent } from './components/books/books-delete/books-delete.component';
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
},
{
  path: "books/create",
  component: BooksCreateComponent
},
{
  path: "books/delete/:id",
  component: BooksDeleteComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
