import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { BooksCrudComponent } from './view/books-crud/books-crud.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BooksReadComponent } from './components/books/books-read/books-read.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { BooksCreateComponent } from './components/books/books-create/books-create.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { BooksDeleteComponent } from './components/books/books-delete/books-delete.component';
import { BooksUpdateComponent } from './components/books/books-update/books-update.component';
import localeCoin from '@angular/common/locales/pt' //Importa em uma variável a localidade da moeda 
import { registerLocaleData } from '@angular/common'; // Importa registrador de localização

registerLocaleData(localeCoin); //Faz o registro da localização desejada 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    BooksCrudComponent,
    BooksReadComponent,
    BooksCreateComponent,
    BooksDeleteComponent,
    BooksUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, //Import toolbar angular material
    MatSidenavModule, // Import Side Nav Module
    MatCardModule, // Import Cards 
    MatListModule, // Import List
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
