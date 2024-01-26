import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import { Comments } from './comments';
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }


  getComments(page: number, size: number): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.apiBaseUrl}/comments?page=${page}&size=${size}`);
  }
  postComment(newComment: Comments): Observable<Comments> {
    return this.http.post<Comments>(`${this.apiBaseUrl}/comments`, newComment)
      .pipe(
        catchError((error: any) => {
          console.error('Error posting comment:', error);
          throw error;
        })
      );
  }


  public getOneComment(commentId: string): Observable<Comments> {
    console.log('fetching comment with ID:', commentId);
    return this.http.get<Comments>(`${this.apiBaseUrl}/comments/${commentId}`);
  }

}
