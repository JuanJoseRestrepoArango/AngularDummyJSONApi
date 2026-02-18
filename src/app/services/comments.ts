import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentResponse,Comment } from '../models/comment.models';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly baseUrl = `${environment.baseUrl}/${environment.commentsResource}`;

  constructor(private http:HttpClient){}

  getComments(limit:number = 10, skip: number = 0):Observable<CommentResponse>{
    return this.http.get<CommentResponse>(`${this.baseUrl}?limit=${limit}&skip=${skip}`);
  }

}
