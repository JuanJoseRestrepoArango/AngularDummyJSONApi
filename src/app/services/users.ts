import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User ,UserResponse} from '../models/user.models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.baseUrl}/${environment.usersResource}`;

  constructor(private http: HttpClient) {}

  getUsers(limit: number = 10, skip: number = 0):Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl}?limit=${limit}&skip=${skip}`); 
  }

  getUserById(id:String):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

}
