import { Injectable } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http/';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  private api_id = '?api_key=82b7b06bcdfdabf80cf2a5f1fe9fa42d';
  private api_url = 'https://api.themoviedb.org/3';
  private categories;
  
  constructor(private http: Http) {}
  getSeries(id: number): Observable<any> {
    
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Content-Type', 'application/json');
    
    const options = new RequestOptions({ headers: headers });
     return this.http.get(this.api_url + '/tv/' + id + this.api_id, options)
    .map( res => res.json());
  };
  getMovie(id: number): Observable<any> {
    
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Content-Type', 'application/json');
    
    const options = new RequestOptions({ headers: headers });
     return this.http.get(this.api_url + '/movie/' + id + this.api_id, options)
    .map( res => res.json());
  };


  getPopular() : Observable<any>{
    
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Content-Type', 'application/json');
    
    const options = new RequestOptions({ headers: headers });
     return this.http.get(this.api_url + '/movie/popular' + this.api_id, options)
    .map( res => res.json());
  }

  getPopularTv(): Observable<any>{
    
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Content-Type', 'application/json');
    
    const options = new RequestOptions({ headers: headers });
     return this.http.get(this.api_url + '/tv/popular' + this.api_id, options)
    .map( res => res.json());
  }


  /*getCategories() { //deprecated
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });

     this.http.get(this.api_url + '/genre/movie/list' + this.api_id, options)
    .map( res => res.json()).subscribe(
      res =>  this.categories = res.genres
    );
  }*/
}
