import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>("https://bloggenturma28.herokuapp.com/postagens")
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://bloggenturma28.herokuapp.com/postagens/${id}`)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://bloggenturma28.herokuapp.com/postagens/titulo/${titulo}`)

  }


  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://bloggenturma28.herokuapp.com/postagens", postagem)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>("https://bloggenturma28.herokuapp.com/postagens", postagem)
  }

  deletePostagem(id: number){
    return this.http.delete<Postagem>(`https://bloggenturma28.herokuapp.com/postagens/${id}`)
  }

  
}
