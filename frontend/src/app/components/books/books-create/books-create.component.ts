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

  createBook(book: Books): void {
    this.booksService.create(this.book).subscribe(() => {
      console.log('Produto Criado')

      // Mostra SnackBar de sucesso ou erro
      this.booksService.showMessage('Livro criado com sucesso!', false);

      // Retorna para a página books 
      this.router.navigate(["books"]);
    })
  }

  cancelProduct():void{
    // Navega para crud books
    this.router.navigate(["books"]);
  }

}
