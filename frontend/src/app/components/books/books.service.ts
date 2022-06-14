import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //Import para requisições http
import { catchError, map, Observable } from 'rxjs';//Import de Observable
import { Books } from './books';

@Injectable({
  providedIn: 'root'//Injetável na raiz
})
export class BooksService {

  // String de base de url para chamadas no backend
  baseUrl = "http://localhost:3001/books";

  // Construtor levando um http para requisições
  constructor(private http: HttpClient) { }

  // Método da service que irá fazer a Read no backend
  read(): Observable<Books[]>{
    return this.http.get<Books[]>(this.baseUrl);
  }

}
