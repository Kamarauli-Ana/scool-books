import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { postList } from '../models/posts-response.models';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) { }

  getPosts():Observable<postList[]>{
   return this.http.get<postList[]>(`${environment.api}posts`);
  }
  postPosts():Observable<postList[]>{
    return this.http.post<postList[]>(`${environment.api}posts`,{});
   }
   deletePosts(id:number){
    return this.http.delete(`${environment.api}posts/${id}`);
   }
}
