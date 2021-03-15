import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  public _url:string='https://jsonplaceholder.typicode.com/posts'

  constructor(private https:HttpClient) { }
  // getAllComments():Observable<Iposts[]>{
  //   return this.https.get<Iposts[]>(this._url).pipe(
  //     catchError(
  //       (err)=>
  //       {
  //       return throwError(err.message || "Sever Error")
  //       }
  //     )
  //   )
    
  // }

}
