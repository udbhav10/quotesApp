import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

const totalQuotes = 2127;
const quotesPerPage = 150;
const numberOfPages = Math.ceil(totalQuotes / quotesPerPage);

const quoteAPIRandom = "https://api.quotable.io/random";
const quoteAPIBase = "https://api.quotable.io/quotes"

@Injectable({
  providedIn: 'root'
})

export class FetchquoteService {

  constructor(private http: HttpClient) { }

  fetchRandom() {
    return this.http.get<any>(quoteAPIRandom);
  }

  fetchAll(): Observable<any> { 

    const observables: Observable<any>[] = [];

    for( let page = 1; page <= numberOfPages; page++ ) {
      
      observables.push(this.http.get<any>(`${quoteAPIBase}?page=${page}&limit=${quotesPerPage}`)); 
    
    }

    return forkJoin(observables);
     
  }

  fetchByTagName(tagName: string): Observable<any> {
    return this.http.get<any>(`${quoteAPIBase}?tags=${tagName}&limit=150`);
  }

  fetchByAuthor(authorName: string): Observable<any> {
    return this.http.get<any>(`${quoteAPIBase}?author='${authorName}'&limit=150`);
  }

}