import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  private movie;
  private data;
  private title;
  private categories;
  private release_date;
  private overview;
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
    this.movie = this.api.getSeries(this.id);
    this.movie
    .subscribe(
      data => {
        this.data = data;
        console.log( data);
        this.imgPath =  'https://image.tmdb.org/t/p/w185/' + data.backdrop_path;
        this.title =  data.name;
        this.overview =  data.overview;
        this.release_date =  data.first_air_date;
        this.categories = data.genres;
   
      }
    );
  }

}
