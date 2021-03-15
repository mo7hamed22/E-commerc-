import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../shared classes and types/interfaceUsers';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url: string = 'https://jsonplaceholder.typicode.com/users'
  constructor(private https: HttpClient) { }
  getAllUsers(): Observable<IUser[]> {
 
    return this.https.get<IUser[]>(this._url).pipe(
      catchError(
        (err) => {
          return throwError(err.message || "Sever Error")
        }
      )
    )
  }
}
