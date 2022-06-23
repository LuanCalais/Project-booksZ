import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books';

@Component({
  selector: 'app-books-read',
  templateUrl: './books-read.component.html',
  styleUrls: ['./books-read.component.css']
})
export class BooksReadComponent implements OnInit {

  // Irá receber o retorno de livros do Backend
  book!: Books[]; // ! - Significa que não é obrigatoriamente iniciado

  // Aqui ficará a configuração das colunas
  displayedColumns = ['id', 'name', 'price', 'action']; 

  constructor(private booksService: BooksService) { }

  // Ao iniciar...
  ngOnInit(): void {

    this.booksService.read().subscribe(book => {
      this.book = book;
    })
  }

}
