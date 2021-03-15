import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Iposts } from '../shared classes and types/interfacePosts';
import {  Observable, throwError } from 'rxjs';
import {catchError} from  'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class PostsService {
public _url:string='https://jsonplaceholder.typicode.com/posts'

  constructor(private https:HttpClient) { }
  getAllPosts():Observable<Iposts[]>{
    return this.https.get<Iposts[]>(this._url).pipe(
      catchError(
        (err)=>
        {
        return throwError(err.message || "Sever Error")
        }
      )
    )
    
  }
}

