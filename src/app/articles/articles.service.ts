import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import { Articles } from './articles';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }



  getArticles(page: number, size: number): Observable<Articles[]> {
    return this.http.get<Articles[]>(`${this.apiBaseUrl}/articles?page=${page}&size=${size}`);
  }

  public getOneArticle(articleId: string): Observable<Articles> {
    console.log('fetching article with ID:', articleId);
    return this.http.get<Articles>(`${this.apiBaseUrl}/articles/${articleId}`);
  }

  // public deleteArticle(articleId: string): Observable<any> {
  //   console.log('Deleting article with ID:', articleId);
  //   return this.http.delete<any>(`${this.apiBaseUrl}/articles/${articleId}`);
  // }
  //
  // updateArticle(articleId: string, updatedArticle: any): Observable<Article> {
  //   const url = `${this.apiBaseUrl}/articles/${articleId}`;
  //   console.log(updatedArticle);
  //   return this.http.put<Article>(url, updatedArticle);
  // }
  // addArticle(addedArticle: any): Observable<Article> {
  //   console.log(addedArticle);
  //   return this.http.post<Article>(`${this.apiBaseUrl}/articles`, addedArticle);
  // }


}
