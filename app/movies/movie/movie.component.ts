import { Component, OnInit, Input } from '@angular/core';
import { prepareProfile } from 'selenium-webdriver/firefox';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 private movie;
 private data;
 private title;
 private categories;
 private release_date;
 private overview;
 private runtime;
 private  id: number;
 private imgPath = '';
 private subscription: Subscription;
  constructor(private api: ApiService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.id = param['id'];
             }
    );
    this.movie = this.api.getMovie(this.id);
    this.movie
    .subscribe(
      data => {
        this.data = data;
        console.log( data);
        this.imgPath =  'https://image.tmdb.org/t/p/w185/' + data.backdrop_path;
        this.title =  data.title;
        this.overview =  data.overview;
        this.release_date =  data.release_date;
        this.categories = data.genres;
        this.runtime = data.runtime;
      }
    );
  }


}
