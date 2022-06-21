import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.css']
})
export class BooksCreateComponent implements OnInit {

  book: Books = {
    id: 0,
    name: '',
    price: undefined
  }

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
  }

  createBook(): void {
    alert('A');
  }

}
