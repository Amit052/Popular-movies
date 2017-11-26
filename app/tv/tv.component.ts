import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent implements OnInit {
private results;
private data;
private imgPath = 'https://image.tmdb.org/t/p/w185/';
  constructor(private ai: ApiService, private router: Router) { }

  ngOnInit() {
    this.results = this.ai.getPopularTv();
    this.results
    .subscribe(
      data => {
        this.data = data.results;
        console.log( this.data);
      }
    );
   
   
  }
  getDetails(id: number){
    this.router.navigate(['series/' + id]);
  }
}
