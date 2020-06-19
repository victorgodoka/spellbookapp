import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CardData } from '../models/card-data';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'; // api rest fake
  random = 'https://db.ygoprodeck.com/api/v7/randomcard.php'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // Obtem todos os carros
  getCards(params): Observable<CardData[]> {
    return this.httpClient
      .get<CardData[]>(`${this.url}?${params}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Obtem todos os carros
  getCardsById(id): Observable<CardData[]> {
    return this.httpClient
      .get<CardData[]>(`${this.url}?id=${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Obtem todos os carros
  getRandomCard(): Observable<CardData[]> {
    return this.httpClient
      .get<CardData[]>(`${this.random}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
