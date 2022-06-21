import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-crud',
  templateUrl: './books-crud.component.html',
  styleUrls: ['./books-crud.component.css']
})
export class BooksCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {

    // Rota configurada em app-routing.module.ts
    this.router.navigate(['books/create'])
  }


}
