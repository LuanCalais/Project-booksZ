import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from './../books.service';
import { Books } from './../books';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent implements OnInit {

  books!: Books;

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pega o ID do item que foi clicado no contexto 
    const id = this.route.snapshot.paramMap.get('id') as string;

    // Traz do backend o livro referente ao id trazido
    this.booksService.readById(id).subscribe(books => {
      this.books = books;
    })

  }

  deleteBook() : void{
    this.booksService.delete(this.books.id).subscribe(() => {
      this.booksService.showMessage(`${this.books.name} deletado com sucesso, meu amigo`, false);
      this.router.navigate(['/books']); 
    })
  }

  cancel(): void{
    this.router.navigate(['/books'])
  }

}
