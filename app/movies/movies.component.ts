import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MainComponent implements OnInit {
private genres;
private data;
private imgPath = 'https://image.tmdb.org/t/p/w185/';
  constructor(private ai: ApiService, private router: Router) { }

  ngOnInit() {
  this.genres = this.ai.getPopular();
  this.genres
  .subscribe(
    data => {
      this.data = data.results;
      console.log( this.data);
    }
  );
 
 
}
 getDetails(id: number){
   this.router.navigate(['movie/' + id]);
 }
}
