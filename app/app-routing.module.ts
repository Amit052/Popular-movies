import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { TVComponent } from './tv/tv.component';
import { SeriesComponent } from 'app/tv/series/series.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'tv', component: TVComponent },
  { path: 'series/:id', component: SeriesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
