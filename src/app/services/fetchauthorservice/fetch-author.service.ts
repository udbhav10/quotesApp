import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

const totalAuthors = 803;
const authorsPerPage = 150;
const numberOfPages = Math.ceil(totalAuthors / authorsPerPage);

const authorsAPIBase = "https://quotable.io/authors?sortBy=name&order=asc";

const authorImgBase = "https://images.quotable.dev/profile/400/"

@Injectable({
  providedIn: 'root'
})
export class FetchAuthorService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<any> {

    const observables: Observable<any>[] = [];

    for( let page = 1; page <= numberOfPages; page++ ) {
      
      observables.push(this.http.get<any>(`${authorsAPIBase}&page=${page}&limit=${authorsPerPage}`)); 
    
    }
    return forkJoin(observables);
  }

  fetchAuthorImage(authorSlug: string): string {
    return `${authorImgBase}${authorSlug}.jpg`;
  }

  fetchByAuthorSlug(authorSlug: string) {
    return this.http.get<any>(`https://quotable.io/authors?slug=${authorSlug}`);
  }
}
