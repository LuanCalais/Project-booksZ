import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  // Mostra mensagem de acerto em efetuar ação
  showMessage(msg: string, isError: boolean): void{
    this.snackBar.open(msg, 'X',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"] 
    })
  }

  // Método da service que irá fazer a Read no backend
  read(): Observable<Books[]>{
    return this.http.get<Books[]>(this.baseUrl)
  }

  // Método que traz o produto pelo seu identificador
  readById(id: string) : Observable<Books>{
    // Monta url solicitando ID
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Books>(url)
  }

  // Método da service que irá fazer o Create no backend
  create(books: Books): Observable<Books>{
    return this.http.post<Books>(this.baseUrl, books).pipe(
      map(obj => obj)
    );
  }

  // Método da service que irá fazer a Deleção no backend pelo ID
  delete(id: Number): Observable<Books>{

    // Monta url mandando mandando id para deleção
    const url = `${this.baseUrl}/${id}`

    // Solicitação HTTP
    return this.http.delete<Books>(url)

  }

}
