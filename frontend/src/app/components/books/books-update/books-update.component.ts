import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Books } from '../books';

@Component({
  selector: 'app-books-update',
  templateUrl: './books-update.component.html',
  styleUrls: ['./books-update.component.css']
})
export class BooksUpdateComponent implements OnInit {

  books!: Books;

  constructor(private booksService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id') as string;

    this.booksService.readById(id).subscribe(books => {
      this.books = books;
    })

  }

  update(): void{
    // Produto já foi setado no ngOnInit senão seria necessario trazer ele no evento click
    this.booksService.update(this.books).subscribe(()=>{
      this.booksService.showMessage('Produto alterado com sucesso', false);
      this.router.navigate(['/books'])
    })
  }

  cancel(): void{
    this.router.navigate(['/books'])
  }

}
